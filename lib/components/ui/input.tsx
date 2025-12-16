import * as React from 'react'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import type { AnyFieldApi } from '@tanstack/form-core'
import { cn } from '../../utils'

interface InputProps extends React.ComponentProps<'input'> {
  field?: AnyFieldApi
  type?: string
}

/**
 * Enhanced Input component with password visibility toggle functionality
 * Preserves all existing functionality while adding eye icon toggle for password fields
 */
function Input({ field, className, type, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false)
  const isPasswordType = type === 'password'

  // Determine the actual input type based on password visibility state
  const getInputType = () => {
    if (type === 'number') return 'text'
    if (isPasswordType) return showPassword ? 'text' : 'password'
    return type
  }

  /**
   * Toggle password visibility state
   */
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type={getInputType()}
          data-slot="input"
          className={cn(
            'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            'focus-visible:border-ring focus-visible:ring-ring/25 focus-visible:ring-[3.5px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
            isPasswordType && 'pr-10', // Add right padding for password toggle icon
            className
          )}
          value={field?.state.value}
          onChange={(e) => {
            if (type === 'number') {
              const value = Number(e.target.value)
              if (!isNaN(value)) {
                field?.handleChange(value)
              }
            } else {
              field?.handleChange(e.target.value)
            }
          }}
          {...props}
        />

        {/* Password visibility toggle button */}
        {isPasswordType && (
          <button
            type="button"
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-sm text-neutral-500 transition-colors hover:text-neutral-700 focus:ring-2 focus:ring-[#751111]/20 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={-1} // Prevent tab focus, use mouse/touch only
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
      {field && <InputInfo field={field} />}
    </div>
  )
}

function InputInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <ul className="mt-1 list-inside list-disc">
          {field.state.meta.errors.map((e: any, key: number) => (
            <li key={key} className="text-destructive text-sm font-medium">
              {e ? e.message || e : null}
            </li>
          ))}
        </ul>
      ) : null}
      {field.state.meta.isValidating ? (
        <p className="text-muted-foreground mt-1 text-sm">Validating...</p>
      ) : null}
    </>
  )
}

export { Input, InputInfo }
