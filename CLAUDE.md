# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Svelte 5 + Vite + TypeScript project. It uses the latest Svelte 5 syntax including runes (`$state`, `$bindable`, `$props`).

## Essential Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type-check TypeScript code
npm run check

# Type-check in watch mode
npm run check:watch

# Run linting and formatting checks
npm run lint

# Auto-format code
npm run format
```

## Architecture

The application follows a standard Vite + Svelte structure:

- **Entry flow**: `index.html` → `src/main.ts` → `src/App.svelte`
- **Component location**: Reusable components go in `src/lib/`
- **Svelte 5 syntax**: Uses runes (`$state()`, `$bindable()`, `$props()`) instead of older syntax
- **TypeScript**: Strict mode enabled, separate configs for source and tooling

## Development Notes

- No test framework is currently configured
- ESLint and Prettier are installed but use default configurations
- The project uses ES modules throughout (type: "module" in package.json)
- Always run `npm run format` before committing code changes
- Run `npm run check` to catch TypeScript errors before building