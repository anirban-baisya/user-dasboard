# User Dashboard (React + TypeScript + Vite)

Deployed URL: https://user-dasboard-with-popup-drawer.netlify.app/

A simple user dashboard built with React, TypeScript and Vite. The app shows a list of users, supports viewing user details in a drawer, and includes a small local store for state management.

**Features**
- List users with pagination
- View user details in a drawer
- Lightweight local state store

**Tech stack**
- React 18
- TypeScript
- Vite
- Tailwind CSS (tailwindcss) + small component structure

## Project Structure

- `src/` — application source
  - `api/` — API helpers (e.g. `usersApi.ts`)
  - `components/` — UI components (`UserTable.tsx`, `UserRow.tsx`, `UserDrawer.tsx`)
  - `store/` — local state hooks (`useUserStore.ts`)
  - `types/` — TypeScript types (`user.ts`)

## Getting Started (local)

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Open the app

Visit `http://localhost:5173` (or the URL shown in the terminal).

## Build for production

```bash
npm run build
```

