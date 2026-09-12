# Copilot Instructions

## Project Overview

This is a React-based postboard application with authentication, theming, and dashboard functionality.

## Code Style & Quality

- Write clear, concise code without unnecessary comments
- Use descriptive variable and function names following camelCase convention
- Prefer TypeScript strict mode - always provide proper types
- Use functional components with hooks over class components
- Follow React best practices (proper dependency arrays, key props, etc.)

## Technology Stack

- **Frontend**: React 18+ with TypeScript, built using Vite
- **Styling**: TailwindCSS with Shadcn UI components as the primary design system
- **State Management**: Zustand for global state
- **Backend**: Appwrite for authentication and data services

## Architecture Patterns

- Keep components small and focused on single responsibilities
- Use custom hooks for reusable logic
- Store business logic in Zustand stores, not in components
- Follow the existing folder structure: `components/`, `pages/`, `stores/`, `layouts/`

## Shadcn UI Guidelines

- Always check if a Shadcn component exists before creating custom UI
- Import Shadcn components from `@/components/ui/`
- Extend Shadcn components rather than replacing them
- Use Tailwind utilities for custom styling on top of Shadcn base styles

## State Management Rules

- Use Zustand stores for cross-component state
- Keep local state in components using useState for UI-only state
- Follow the established auth store pattern for new stores
- Use proper TypeScript interfaces for store state

## Authentication & Security

- Always check authentication state before accessing protected features
- Use the existing auth store patterns
- Handle loading and error states consistently

## File Naming & Organization

- Use kebab-case for file names (e.g., `user-profile.tsx`)
- Use PascalCase for component names
- Keep related files grouped in appropriate folders
- Export components as default exports

## Error Handling

- Always handle potential errors in async operations
- Use proper TypeScript error types
- Provide user-friendly error messages
- Use the existing Error component for consistent error display

## Performance Considerations

- Use React.memo for expensive components
- Implement proper loading states
- Avoid unnecessary re-renders
- Use proper keys in lists

## Testing Preferences

- Prefer quick, focused validation over full build/lint cycles during active UI development.
- When the user is testing with live reload, do not run full build commands unless they explicitly ask for verification or the task requires a production check.
- Do not run linting, type-checking, or other automated checks during routine UI iteration when the user is actively testing in the browser.
- Explicitly do not run `pnpm exec tsc --noEmit` as a casual or default check during normal frontend work.
- Only run TypeScript checking when the user explicitly asks for compile verification, when the fix is specifically about a TypeScript issue, or when a code change is known to require type validation.
- The user is validating their own code visually and will call out issues; do not perform extra verification steps unless they specifically request them.
- Default to direct code edits and browser/live-preview validation instead of running `npm run build`, `npm run lint`, or similar heavy commands for routine frontend tweaks.
- If validation is necessary, keep it to the smallest relevant command and explain why it is needed.

## Don't Do

- Don't add inline styles - use Tailwind classes
- Don't create custom UI components if Shadcn alternatives exist
- Don't mutate state directly - use proper state setters
- Don't ignore TypeScript errors - fix them properly
