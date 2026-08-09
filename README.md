# YouTube Clone

A responsive React + Vite application that simulates a YouTube-style browsing experience.

## Features

- React + TypeScript application
- Vite-powered development environment
- Tailwind CSS for responsive styling
- Client-side routing with React Router DOM
- RapidAPI-based YouTube data fetching
- Sidebar navigation and video grid layout

## Project Structure

- `src/App.tsx` — application entry point and route definitions
- `src/components/` — UI components such as `Home`, `Search`, `PlayingVideo`, `AppBar`, `VideoCard`, and sidebar views
- `src/context/AuthProvider.tsx` — shared context for handling API data and search state
- `src/utils/rapidapi.ts` — helper for querying the YouTube RapidAPI endpoint

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with your RapidAPI key:

```env
VITE_YOUTUBE_API_KEY=your_rapidapi_key_here
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal.

## Available Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — build the production bundle
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint over the project

## Notes

- The `Search` and `PlayingVideo` components show placeholder content and can be expanded with full search results and video playback.
- `AuthProvider` currently loads search results for the query stored in context.
- Update the UI and routing to add more YouTube-like features such as video detail pages and search suggestions.

