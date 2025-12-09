# Games Arena - Architecture Documentation

## Component Hierarchy

```
App (Main Container)
│
├── Header
│   └── Statistics (totalGames, filteredGames)
│
├── SearchBar
│   ├── Input Field
│   ├── Search Icon
│   ├── Clear Button
│   └── Autocomplete Dropdown
│       └── Suggestion Items
│
├── FilterBar
│   ├── Platform Filter Dropdown
│   └── Sort Options Dropdown
│
├── GameList
│   ├── LoadingSkeleton (x8) [when loading]
│   ├── Empty State [when no results]
│   └── GameCard (multiple)
│       ├── Editor's Choice Badge [conditional]
│       ├── Title
│       ├── Platform Info
│       ├── Genre Info
│       ├── Score Display
│       └── Hover Effect Border
│
└── Footer
```

## Data Flow

```
API (AWS S3)
    ↓
App.jsx (useEffect on mount)
    ↓
games state (raw data)
    ↓
    ├→ platforms (useMemo - unique platforms)
    │       ↓
    │   FilterBar (platform dropdown)
    │
    ├→ SearchBar (for autocomplete)
    │       ↓
    │   searchTerm state
    │
    └→ filteredAndSortedGames (useMemo)
            ↓
        [Apply filters]
            ├─ searchTerm filter
            └─ selectedPlatform filter
            ↓
        [Apply sorting]
            ├─ score-high/low
            ├─ title-asc/desc
            └─ editors-choice
            ↓
        GameList → GameCard (x N)
```

## State Management

### App.jsx State
```javascript
const [games, setGames] = useState([])              // All games from API
const [loading, setLoading] = useState(true)        // Loading indicator
const [error, setError] = useState(null)            // Error state
const [searchTerm, setSearchTerm] = useState('')    // Search query
const [selectedPlatform, setSelectedPlatform] = useState('') // Platform filter
const [sortBy, setSortBy] = useState('default')     // Sort option
```

### SearchBar.jsx State
```javascript
const [searchTerm, setSearchTerm] = useState('')    // Local input value
const [suggestions, setSuggestions] = useState([])  // Filtered suggestions
const [showSuggestions, setShowSuggestions] = useState(false) // Dropdown visibility
const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1) // Keyboard nav
```

## Lifecycle Methods (Hooks)

### App.jsx
```javascript
// componentDidMount - Fetch data once on mount
useEffect(() => {
  fetchGames()
}, [])

// Computed values - Recalculate when dependencies change
useMemo(() => extractPlatforms(), [games])
useMemo(() => filterAndSortGames(), [games, searchTerm, selectedPlatform, sortBy])
```

### SearchBar.jsx
```javascript
// componentDidMount + componentWillUnmount - Event listener cleanup
useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside)
  return () => document.removeEventListener('mousedown', handleClickOutside)
}, [])

// Update suggestions when search term changes
useEffect(() => {
  filterSuggestions()
}, [searchTerm, games])
```

## Props Flow

### Header Component
```javascript
<Header 
  totalGames={games.length}
  filteredGames={filteredAndSortedGames.length}
/>
```

### SearchBar Component
```javascript
<SearchBar 
  games={games}                    // For autocomplete
  onSearch={handleSearch}          // Callback to update searchTerm
/>
```

### FilterBar Component
```javascript
<FilterBar 
  platforms={platforms}                      // Unique platform list
  selectedPlatform={selectedPlatform}        // Current selection
  onPlatformChange={handlePlatformChange}    // Callback
  sortBy={sortBy}                            // Current sort option
  onSortChange={handleSortChange}            // Callback
/>
```

### GameList Component
```javascript
<GameList 
  games={filteredAndSortedGames}   // Processed game list
  loading={loading}                 // Loading state
/>
```

### GameCard Component
```javascript
<GameCard 
  game={{
    title: string,
    platform: string,
    score: number,
    genre: string,
    editors_choice: string
  }}
/>
```

## Performance Optimizations

### 1. Memoization
```javascript
// Prevents recalculation unless dependencies change
const platforms = useMemo(() => {
  return [...new Set(games.map(g => g.platform))].sort()
}, [games])

const filteredAndSortedGames = useMemo(() => {
  // Expensive filtering and sorting logic
}, [games, searchTerm, selectedPlatform, sortBy])
```

### 2. Efficient Filtering
```javascript
// Single pass through array
result = games
  .filter(game => matchesSearch(game))
  .filter(game => matchesPlatform(game))
  .sort(sortFunction)
```

### 3. Conditional Rendering
```javascript
// Only render what's needed
{loading && <LoadingSkeleton />}
{!loading && games.length === 0 && <EmptyState />}
{!loading && games.length > 0 && <GameCards />}
```

## Styling Architecture

### Tailwind Configuration
```javascript
// tailwind.config.js
- Custom animations (fade-in, slide-up, pulse-slow)
- Custom keyframes
- Extended theme
```

### Global Styles
```css
/* index.css */
- Tailwind directives
- Custom scrollbar
- Global transitions
```

### Component Styles
- Utility-first approach
- Responsive classes (md:, lg:, xl:)
- State variants (hover:, focus:)
- Dark theme colors

## API Integration

### Endpoint
```
https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json
```

### Fetch Implementation
```javascript
useEffect(() => {
  const fetchGames = async () => {
    try {
      setLoading(true)
      const response = await fetch(API_URL)
      const data = await response.json()
      setGames(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  fetchGames()
}, [])
```

## Error Handling

### Levels
1. **API Level** - Try-catch in fetch
2. **Component Level** - Error state rendering
3. **User Level** - Friendly error messages

### Error States
```javascript
if (error) return <ErrorDisplay />
if (loading) return <LoadingState />
if (games.length === 0) return <EmptyState />
return <GameList />
```

## Accessibility Features

- Semantic HTML elements
- Keyboard navigation support
- Focus states on interactive elements
- ARIA labels where needed
- Responsive touch targets (min 44x44px)
- Color contrast ratios met
- Screen reader friendly

## Browser Compatibility

- Modern ES6+ features
- CSS Grid and Flexbox
- Fetch API
- React 19 features
- Tailwind CSS 4
- Vite build optimizations

## Build & Deployment

### Development
```bash
npm run dev  # Vite dev server with HMR
```

### Production
```bash
npm run build  # Optimized production build
npm run preview  # Preview production build
```

### Output
- Minified JavaScript
- Optimized CSS
- Tree-shaken dependencies
- Code splitting
- Asset optimization
