# Games Arena - Game Browser Application

A modern, interactive React application for browsing and discovering games across different platforms.

## Features

✨ **Interactive UI**
- Responsive design with Tailwind CSS
- Mobile-friendly layout
- Smooth animations and hover effects
- Loading skeletons for better UX

🎮 **Game Browsing**
- Visual game cards with detailed information
- Editor's Choice badges
- Color-coded score ratings
- Platform and genre information

🔍 **Search & Filter**
- Autocomplete search by game title
- Keyboard navigation support (Arrow keys, Enter, Escape)
- Filter games by platform
- Multiple sorting options:
  - Score (High to Low / Low to High)
  - Title (A to Z / Z to A)
  - Editor's Choice First

🎨 **Modern Design**
- Dark theme with gradient accents
- Card hover animations
- Smooth transitions
- Custom scrollbar styling

## Tech Stack

- **React 18** - Latest version with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 3** - Latest utility-first CSS framework
- **PropTypes** - Runtime type checking

## Installation & Setup

1. Navigate to the project directory:
```bash
cd games-browser
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Project Structure

```
games-browser/
├── src/
│   ├── components/
│   │   ├── GameCard.jsx          # Individual game card component
│   │   ├── GameList.jsx          # Grid layout for game cards
│   │   ├── SearchBar.jsx         # Autocomplete search component
│   │   ├── FilterBar.jsx         # Platform filter & sort options
│   │   ├── Header.jsx            # App header with statistics
│   │   └── LoadingSkeleton.jsx   # Loading placeholder component
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles with Tailwind
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Component Architecture

### App.jsx
- Main component managing application state
- Fetches data from API on mount
- Handles filtering, sorting, and search logic
- Uses React hooks (useState, useEffect, useMemo)

### SearchBar.jsx
- Autocomplete search functionality
- Keyboard navigation support
- Click-outside detection to close suggestions
- Real-time filtering

### FilterBar.jsx
- Platform dropdown filter
- Sort options dropdown
- Responsive layout

### GameList.jsx
- Grid layout for game cards
- Loading state with skeletons
- Empty state handling

### GameCard.jsx
- Individual game display
- Editor's Choice badge
- Score color coding
- Hover animations

## Code Standards

- **Component-based architecture** - Each feature is a separate component
- **PropTypes validation** - Runtime type checking for all props
- **Descriptive naming** - Clear variable and function names
- **JSDoc comments** - Documentation for all components
- **React best practices** - Proper use of hooks and lifecycle methods
- **Memoization** - Performance optimization with useMemo
- **Responsive design** - Mobile-first approach

## API

Data is fetched from:
```
https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json
```

### Data Structure
- `title` - Game title
- `platform` - Gaming platform
- `score` - Rating score (0-10)
- `genre` - Game genre
- `editors_choice` - Editor's choice flag (Y/N)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
