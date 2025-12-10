import fs from 'fs'
import path from 'path'

function read(file) {
  return fs.readFileSync(file, 'utf8')
}

function fail(msg) {
  console.error(msg)
}

function extractModulesFromMain(mainPath) {
  const src = read(mainPath)
  const re = /export\s*\*\s*from\s*["']\.\/components\/ui\/([^"']+)["']/g
  const modules = []
  let m
  while ((m = re.exec(src))) modules.push(m[1])
  return modules
}

function extractExportsFromModule(modulePath) {
  const src = read(modulePath)
  const re = /export\s*\{([\s\S]*?)\}/g
  const names = []
  let m
  while ((m = re.exec(src))) {
    const inner = m[1]
    inner
      .split(',')
      .map((s) => s.trim())
      .forEach((token) => {
        if (!token) return
        if (/^type\s+/i.test(token)) return
        const cleaned = token.replace(/\s+as\s+.*/i, '')
        if (/^[A-Z]/.test(cleaned)) names.push(cleaned)
      })
  }
  return Array.from(new Set(names))
}

function checkAutodocsTag(storySource) {
  return (
    /tags:\s*\[([^\]]*?)\]/.test(storySource) &&
    /['"]autodocs['"]/i.test(storySource)
  )
}

function checkControlledOpen(storySource) {
  return /\bopen\s*:\s*true\b/.test(storySource)
}

function hasSubcomponents(storySource) {
  return /subcomponents\s*:\s*\{/.test(storySource)
}

function run() {
  const root = process.cwd()
  const mainPath = path.join(root, 'lib', 'main.ts')
  const uiDir = path.join(root, 'lib', 'components', 'ui')
  const modules = extractModulesFromMain(mainPath)
  const overlays = new Set([
    'dialog',
    'alert-dialog',
    'drawer',
    'sheet',
    'popover',
    'tooltip',
    'hover-card',
  ])
  const errors = []
  const warnings = []

  modules.forEach((moduleName) => {
    const modulePath = path.join(uiDir, `${moduleName}.tsx`)
    const storyPath = path.join(uiDir, `${moduleName}.stories.tsx`)
    if (!fs.existsSync(modulePath)) {
      warnings.push(`Module source missing: ${moduleName}`)
      return
    }
    if (!fs.existsSync(storyPath)) {
      errors.push(
        `Missing story: ${moduleName} → ${path.relative(root, storyPath)}`
      )
      return
    }
    const storySrc = read(storyPath)
    if (!checkAutodocsTag(storySrc)) {
      errors.push(`Missing autodocs tag in story: ${moduleName}`)
    }
    if (overlays.has(moduleName) && !checkControlledOpen(storySrc)) {
      errors.push(
        `Overlay story not controlled (open: true) for: ${moduleName}`
      )
    }
    const exports = extractExportsFromModule(modulePath)
    if (exports.length > 1 && !hasSubcomponents(storySrc)) {
      warnings.push(
        `Story missing subcomponents for: ${moduleName} (${exports.slice(1).join(', ')})`
      )
    }
  })

  if (errors.length || warnings.length) {
    if (warnings.length) {
      console.warn('Storybook Quality Warnings:')
      warnings.forEach((w) => console.warn(`- ${w}`))
    }
    if (errors.length) {
      fail('Storybook Quality Errors:')
      errors.forEach((e) => fail(`- ${e}`))
      process.exitCode = 1
      return
    }
  }
  console.log('Storybook Quality Checks: OK')
}

run()
