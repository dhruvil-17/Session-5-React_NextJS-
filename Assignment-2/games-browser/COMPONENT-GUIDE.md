# Component Guide - Games Arena

## 🧩 Component Overview

This guide explains each component, its purpose, props, and usage.

---

## 1. App.jsx (Main Container)

**Purpose:** Root component that manages all application state and orchestrates child components.

**State:**
```javascript
- games: Array          // All games from API
- loading: Boolean      // Loading indicator
- error: String         // Error message
- searchTerm: String    // Current search query
- selectedPlatform: String  // Selected platform filter
- sortBy: String        // Current sort option
```

**Lifecycle:**
- `useEffect` - Fetches games on mount
- `useMemo` - Computes platforms list
- `useMemo` - Filters and sorts games

**Children:**
- Header
- SearchBar
- FilterBar
- GameList

---

## 2. Header.jsx

**Purpose:** Displays app title, description, and statistics.

**Props:**
```javascript
{
  totalGames: Number,      // Total number of games
  filteredGames: Number    // Number after filtering
}
```

**Features:**
- Gradient background
- Game icon
- Statistics cards
- Responsive layout

**Usage:**
```jsx
<Header 
  totalGames={100} 
  filteredGames={25} 
/>
```

---

## 3. SearchBar.jsx

**Purpose:** Provides autocomplete search functionality with keyboard navigation.

**Props:**
```javascript
{
  games: Array,           // All games for suggestions
  onSearch: Function      // Callback when search changes
}
```

**State:**
```javascript
- searchTerm: String              // Input value
- suggestions: Array              // Filtered suggestions
- showSuggestions: Boolean        // Dropdown visibility
- activeSuggestionIndex: Number   // Keyboard navigation
```

**Features:**
- Real-time autocomplete
- Keyboard navigation (↑↓ Enter Esc)
- Click outside to close
- Clear button
- Shows up to 8 suggestions
- Displays title, platform, genre, score

**Usage:**
```jsx
<SearchBar 
  games={allGames} 
  onSearch={(term) => setSearchTerm(term)} 
/>
```

**Keyboard Shortcuts:**
- `↓` - Move down in suggestions
- `↑` - Move up in suggestions
- `Enter` - Select active suggestion
- `Esc` - Close suggestions

---

## 4. FilterBar.jsx

**Purpose:** Provides platform filtering and sorting options.

**Props:**
```javascript
{
  platforms: Array,              // Unique platform names
  selectedPlatform: String,      // Current selection
  onPlatformChange: Function,    // Platform change callback
  sortBy: String,                // Current sort option
  onSortChange: Function         // Sort change callback
}
```

**Features:**
- Platform dropdown filter
- Sort options dropdown
- Responsive layout
- Custom styled selects

**Sort Options:**
- Default
- Score: High to Low
- Score: Low to High
- Title: A to Z
- Title: Z to A
- Editor's Choice First

**Usage:**
```jsx
<FilterBar 
  platforms={['PlayStation 3', 'Xbox 360']}
  selectedPlatform="PlayStation 3"
  onPlatformChange={(p) => setPlatform(p)}
  sortBy="score-high"
  onSortChange={(s) => setSort(s)}
/>
```

---

## 5. GameList.jsx

**Purpose:** Displays grid of game cards with loading and empty states.

**Props:**
```javascript
{
  games: Array,      // Games to display
  loading: Boolean   // Loading state
}
```

**States:**
- **Loading:** Shows 8 loading skeletons
- **Empty:** Shows "No Games Found" message
- **Loaded:** Shows game cards in grid

**Features:**
- Responsive grid (1-4 columns)
- Loading skeletons
- Empty state with icon
- Smooth animations

**Usage:**
```jsx
<GameList 
  games={filteredGames} 
  loading={isLoading} 
/>
```

---

## 6. GameCard.jsx

**Purpose:** Displays individual game information with animations.

**Props:**
```javascript
{
  game: {
    title: String,           // Game title
    platform: String,        // Platform name
    score: Number,           // Rating (0-10)
    genre: String,           // Game genre
    editors_choice: String   // 'Y' or 'N'
  }
}
```

**Features:**
- Editor's Choice badge (conditional)
- Color-coded scores:
  - Green (≥9.0)
  - Yellow (7.0-8.9)
  - Orange (<7.0)
- Hover animations (scale + shadow)
- Gradient bottom border on hover
- Platform and genre display

**Usage:**
```jsx
<GameCard 
  game={{
    title: "The Last of Us",
    platform: "PlayStation 3",
    score: 9.5,
    genre: "Action",
    editors_choice: "Y"
  }}
/>
```

---

## 7. LoadingSkeleton.jsx

**Purpose:** Animated loading placeholder for game cards.

**Props:** None

**Features:**
- Matches GameCard layout
- Pulse animation
- Gray placeholder blocks
- Responsive sizing

**Usage:**
```jsx
<LoadingSkeleton />
```

---

## 🔄 Data Flow Diagram

```
API Request
    ↓
App.jsx (useEffect)
    ↓
games state updated
    ↓
    ├─→ Header (totalGames, filteredGames)
    │
    ├─→ SearchBar (games, onSearch)
    │       ↓
    │   searchTerm updated
    │
    ├─→ FilterBar (platforms, selectedPlatform, sortBy)
    │       ↓
    │   selectedPlatform / sortBy updated
    │
    └─→ filteredAndSortedGames (useMemo)
            ↓
        GameList (games, loading)
            ↓
        GameCard (x N)
```

---

## 🎨 Styling Patterns

### Consistent Color Scheme
```javascript
Background: gray-900, gray-800
Text: white, gray-300, gray-400
Accents: blue-500, purple-500, pink-500
Success: green-400
Warning: yellow-400
Error: orange-400, red-500
```

### Animation Classes
```javascript
animate-fade-in      // Fade in on load
animate-slide-up     // Slide up on appear
animate-pulse        // Loading pulse
hover:scale-105      // Scale on hover
hover:shadow-2xl     // Shadow on hover
```

### Responsive Grid
```javascript
grid-cols-1          // Mobile (default)
md:grid-cols-2       // Tablet (≥768px)
lg:grid-cols-3       // Desktop (≥1024px)
xl:grid-cols-4       // Large (≥1280px)
```

---

## 🔧 Component Customization

### Adding New Sort Option

1. Update `FilterBar.jsx`:
```jsx
<option value="new-option">New Sort</option>
```

2. Update `App.jsx` switch statement:
```javascript
case 'new-option':
  result.sort((a, b) => /* your logic */);
  break;
```

### Adding New Filter

1. Add state in `App.jsx`:
```javascript
const [newFilter, setNewFilter] = useState('');
```

2. Add to `filteredAndSortedGames` logic:
```javascript
if (newFilter) {
  result = result.filter(game => /* your logic */);
}
```

3. Pass to FilterBar and update UI

### Customizing GameCard

Edit `GameCard.jsx`:
- Change colors in className
- Add new fields from game object
- Modify layout structure
- Add new animations

---

## 📝 PropTypes Reference

All components use PropTypes for validation:

```javascript
import PropTypes from 'prop-types';

ComponentName.propTypes = {
  propName: PropTypes.type.isRequired,
};
```

**Common Types:**
- `PropTypes.string`
- `PropTypes.number`
- `PropTypes.bool`
- `PropTypes.array`
- `PropTypes.func`
- `PropTypes.shape({ ... })`

---

## 🧪 Testing Components

### Manual Testing Checklist

**SearchBar:**
- [ ] Type to see suggestions
- [ ] Use arrow keys to navigate
- [ ] Press Enter to select
- [ ] Click outside to close
- [ ] Clear button works

**FilterBar:**
- [ ] Platform filter updates results
- [ ] Sort options work correctly
- [ ] Dropdowns are styled properly

**GameCard:**
- [ ] Hover effects work
- [ ] Editor's Choice badge shows correctly
- [ ] Scores are color-coded
- [ ] All fields display properly

**GameList:**
- [ ] Loading skeletons appear
- [ ] Empty state shows when no results
- [ ] Grid is responsive

---

## 🚀 Performance Tips

1. **useMemo** - Used for expensive computations
2. **Key Props** - Unique keys for list items
3. **Conditional Rendering** - Only render what's needed
4. **Event Delegation** - Efficient event handling
5. **Debouncing** - Handled via React state updates

---

## 📚 Further Reading

- React Hooks: https://react.dev/reference/react
- Tailwind CSS: https://tailwindcss.com/docs
- PropTypes: https://www.npmjs.com/package/prop-types
- Vite: https://vite.dev/guide/

---

This component guide should help you understand and modify the application. Each component is designed to be reusable and maintainable!
