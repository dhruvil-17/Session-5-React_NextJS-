import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ games, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!searchTerm || searchTerm.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    if (!games || games.length === 0) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    try {
      const filtered = games
        .filter((game) => {
          if (!game || !game.title) return false;
          return game.title.toLowerCase().includes(searchTerm.toLowerCase());
        })
        .slice(0, 8);

      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
      setActiveSuggestionIndex(-1);
    } catch (error) {
      console.error('Error filtering suggestions:', error);
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm, games]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSuggestionClick = (title) => {
    setSearchTerm(title);
    onSearch(title);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && activeSuggestionIndex >= 0) {
      e.preventDefault();
      handleSuggestionClick(suggestions[activeSuggestionIndex].title);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (searchTerm && suggestions.length > 0) {
              setShowSuggestions(true);
            }
          }}
          placeholder="Search for a game..."
          className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            ×
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-80 overflow-y-auto">
          {suggestions.map((game, index) => (
            <div
              key={`${game.title}-${index}`}
              onClick={() => handleSuggestionClick(game.title)}
              className={`px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 ${
                index === activeSuggestionIndex
                  ? 'bg-indigo-50'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{game.title}</p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {game.platform} · {game.genre}
                  </p>
                </div>
                <span className="text-sm font-bold text-indigo-600">{game.score}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  games: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
