# AGENTS.md - Interactive Interfaces

This document provides essential information for AI coding agents working on the Interactive Interfaces project.

## Project Overview

Interactive Interfaces is a Next.js application showcasing interactive UI components built with React, TypeScript, TailwindCSS, and Framer Motion. The project demonstrates various animation and interaction patterns.

## Build/Lint/Test Commands

### Development

- `npm run dev` or `bun run dev` - Start development server
- `npm run build` or `bun run build` - Build for production
- `npm run start` or `bun run start` - Start production server

### Code Quality

- `npm run lint` or `bun run lint` - Run ESLint
- `npm run lint:fix` or `bun run lint:fix` - Run ESLint with auto-fix
- `npm run format` or `bun run format` - Format code with Prettier
- `npm run format:check` or `bun run format:check` - Check Prettier formatting
- `npm run type-check` or `bun run type-check` - Run TypeScript type checking

### Testing

Currently no test framework is configured. When adding tests:

- Use a framework like Jest or Vitest
- Test command: `npm run test` or `bun run test`
- Run single test: `npm run test -- <test-file>` or `bun run test -- <test-file>`

## Code Style Guidelines

### File Structure

```
app/                    # Next.js App Router pages
components/             # Reusable React components
  atoms/               # Small atomic components
utils/                  # Utility functions
styles/                 # Global styles
assets/                 # Static assets
```

### Imports

- Use absolute imports with `@/` prefix (configured in tsconfig.json)
- Group imports: React imports first, then third-party, then local imports
- Use named imports for clarity
- Example:

```typescript
import * as React from "react"
import { motion } from "motion/react"
import Link from "next/link"

import classNames from "@/utils/classNames"
import { getMetadata } from "@/utils/metadata"
```

### Naming Conventions

- **Components**: PascalCase (e.g., `JellyTags`, `SliderTabs`)
- **Files**: PascalCase for components, camelCase for utilities
- **Functions**: camelCase (e.g., `toggleTag`, `getMetadata`)
- **Interfaces**: PascalCase with 'I' prefix (e.g., `ITag`, `Props`)
- **Types**: PascalCase (e.g., `MetadataArgs`)
- **Variables**: camelCase (e.g., `isSelected`, `currentTags`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `BASE_URL`)

### React Components

- Use functional components with TypeScript
- Define props interfaces explicitly
- Use React.FC<Props> for component typing
- Add "use client" directive for client components
- Example:

```typescript
"use client"
import * as React from "react"

interface Props {
  children: React.ReactNode
}

const MyComponent: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}
```

### TypeScript

- Strict mode enabled (`strict: true` in tsconfig.json)
- Use explicit types for function parameters and return values
- Prefer interfaces over types for object shapes
- Use union types for component variants
- Example:

```typescript
interface ITag {
  value: string
  isSelected: boolean
}

const toggleTag = (index: number): void => {
  // implementation
}
```

### Styling

- Use TailwindCSS v4 with `@import "tailwindcss"`
- Utilize CSS custom properties for theme variables
- Prefer utility classes over custom CSS
- Use `classNames` utility for conditional styling
- Break long class strings across multiple lines for readability
- Example:

```typescript
className={classNames(
  "flex items-center gap-2",
  isActive ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
)}
```

### Framer Motion

- Import from `motion/react`
- Use semantic motion components (`motion.div`, `motion.button`)
- Prefer `layout` prop for automatic animations
- Configure transitions explicitly
- Example:

```typescript
<motion.button
  layout
  transition={{
    type: "spring",
    mass: 1,
    stiffness: 600,
    damping: 15,
  }}
  className="..."
>
```

### Error Handling

- Use try-catch blocks for async operations
- Provide meaningful error messages
- Handle loading states appropriately
- Validate props in development

### Performance

- Use React.memo for expensive components when needed
- Optimize re-renders with proper dependency arrays in useEffect
- Use Framer Motion's layout animations judiciously
- Consider virtualization for large lists

### Git Workflow

- Use conventional commit messages
- Run lint and type-check before committing
- Follow the existing branch naming patterns

### Editor Configuration

- 2 spaces indentation (configured in .editorconfig)
- LF line endings
- UTF-8 encoding
- Final newline required

### Pre-commit Hooks

- Uses husky and lint-staged
- Automatically runs ESLint on staged JS/TS files
- Pre-commit hooks ensure code quality

## Cursor Rules

No Cursor rules directory (.cursor/rules/) or .cursorrules file found.

## Copilot Rules

No Copilot instructions file (.github/copilot-instructions.md) found.

## Additional Notes

- This project uses Next.js 16 with App Router
- TailwindCSS v4 is configured with CSS custom properties
- Font loading uses Next.js font optimization
- Analytics integration with Plausible
- Responsive design with mobile-first approach
- Focus on accessibility and semantic HTML
