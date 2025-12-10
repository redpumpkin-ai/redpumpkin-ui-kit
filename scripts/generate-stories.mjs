import fs from 'fs'
import path from 'path'

function read(file) {
  return fs.readFileSync(file, 'utf8')
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, content)
}

function pascalCase(name) {
  return name
    .split(/[-_]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
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

function buildStory({ moduleName, modulePath, storyPath, exports }) {
  const title = `UI/${pascalCase(moduleName)}`
  const main = exports[0] || pascalCase(moduleName)
  const subs = exports.slice(1)
  const overlay = new Set([
    'dialog',
    'alert-dialog',
    'drawer',
    'sheet',
    'popover',
    'tooltip',
    'hover-card',
  ]).has(moduleName)
  const imported = [main, ...subs].join(', ')
  const subcomponentsLine = subs.length
    ? `,\n  subcomponents: { ${subs.join(', ')} }`
    : ''
  const argsLine = overlay ? `,\n  args: { open: true }` : ''
  const argTypesLine = overlay
    ? `,\n  argTypes: {\n    onOpenChange: { action: "onOpenChange" }\n  }`
    : ''
  const content = `import type { Meta, StoryObj } from "@storybook/react"\nimport { ${imported} } from "./${moduleName}"\n\nconst meta = {\n  title: "${title}",\n  component: ${main}${subcomponentsLine},\n  tags: ["autodocs"]${argsLine}${argTypesLine},\n  parameters: {\n    controls: { exclude: ["className", "style", "ref", "asChild"] },\n  },\n} satisfies Meta<typeof ${main}>;\n\nexport default meta;\n\ntype Story = StoryObj<typeof ${main}>;\n\nexport const Default: Story = {};\n`
  write(storyPath, content)
}

function run() {
  const root = process.cwd()
  const mainPath = path.join(root, 'lib', 'main.ts')
  const modules = extractModulesFromMain(mainPath)
  const generated = []
  const skipped = []
  modules.forEach((moduleName) => {
    const modulePath = path.join(
      root,
      'lib',
      'components',
      'ui',
      `${moduleName}.tsx`
    )
    const storyPath = path.join(
      root,
      'lib',
      'components',
      'ui',
      `${moduleName}.stories.tsx`
    )
    if (!fs.existsSync(modulePath)) return
    if (fs.existsSync(storyPath)) {
      skipped.push(moduleName)
      return
    }
    const exports = extractExportsFromModule(modulePath)
    buildStory({ moduleName, modulePath, storyPath, exports })
    generated.push(moduleName)
  })
  console.log(JSON.stringify({ generated, skipped }, null, 2))
}

run()
