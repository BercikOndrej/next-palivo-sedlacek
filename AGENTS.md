# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js 15 App Router site for `palivosedlacek.cz`. Page-level sections live in `app/`, including the contact API route at `app/api/message/route.ts`. Feature components are grouped under `components/` (`components/header/`, `components/contact/`, `components/price-list/`), while shared primitives live in `components/ui/`. Helpers and schemas are in `utils/` and `lib/`. Static files live in `public/`, with the editable price list CSV at `public/data/Cenik.csv`.

## Build, Test, and Development Commands
- `npm run dev`: start the local dev server with Turbopack.
- `npm run build`: create the production build.
- `npm run start`: serve the built app locally.
- `npm run lint`: run ESLint across the project.

Run lint before opening a PR. After UI edits, verify the homepage sections, navbar theme toggle, gallery, and contact form in the browser.

## Coding Style & Naming Conventions
Use TypeScript with strict typing and the `@/*` path alias from `tsconfig.json`. Follow the existing style: double quotes, semicolons, and simple function components in `.tsx` files. Use PascalCase for React components (`ThemeToggle.tsx`), camelCase for utilities (`easy-translate.ts`), and kebab-case for route-adjacent files in `app/`.

Styling is built with Tailwind CSS v4 and shadcn/ui. Keep theme tokens centralized in `app/globals.css`; prefer `bg-background`, `bg-bg-color`, `text-heading`, and related tokens over hard-coded colors.

## Testing Guidelines
There is no automated test suite yet. Treat `npm run lint` plus manual verification as the release gate. Check both light and dark themes after changing layout, color tokens, or navbar/header/footer styling.

## Commit & Pull Request Guidelines
Recent history mixes plain subjects and Conventional Commits, but `feat:` / `fix:` style messages are preferred. Keep commits focused and descriptive, for example `feat: add navbar theme toggle` or `fix: update march price list`.

PRs should include a short description of user-visible changes, linked issues when available, and screenshots for layout, theming, or content updates.

## Security & Content Updates
Do not commit secrets. Mail configuration belongs in environment variables used by `utils/email-service.ts`. For price updates, replace `public/data/Cenik.csv` with the latest exported CSV and verify the price-list cards render correctly.
