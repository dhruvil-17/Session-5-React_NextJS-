import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import GameList from './components/GameList';

function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const API_URL = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json';

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }

        const data = await response.json();
        setGames(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching games:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const platforms = useMemo(() => {
    const uniquePlatforms = [...new Set(games.map((game) => game.platform))];
    return uniquePlatforms.sort();
  }, [games]);

  const filteredAndSortedGames = useMemo(() => {
    if (!games || games.length === 0) return [];
    
    let result = [...games];

    if (searchTerm && searchTerm.trim()) {
      result = result.filter((game) => {
        if (!game || !game.title) return false;
        return game.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

    if (selectedPlatform) {
      result = result.filter((game) => game && game.platform === selectedPlatform);
    }

    switch (sortBy) {
      case 'score-high':
        result.sort((a, b) => (b.score || 0) - (a.score || 0));
        break;
      case 'score-low':
        result.sort((a, b) => (a.score || 0) - (b.score || 0));
        break;
      case 'title-asc':
        result.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
        break;
      case 'title-desc':
        result.sort((a, b) => (b.title || '').localeCompare(a.title || ''));
        break;
      case 'editors-choice':
        result.sort((a, b) => {
          if (a.editors_choice === 'Y' && b.editors_choice !== 'Y') return -1;
          if (a.editors_choice !== 'Y' && b.editors_choice === 'Y') return 1;
          return (b.score || 0) - (a.score || 0);
        });
        break;
      default:
        break;
    }

    return result;
  }, [games, searchTerm, selectedPlatform, sortBy]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white border border-red-200 rounded-lg p-6 max-w-md">
          <p className="text-red-600 text-center">Error: {error}</p>
        </div>
      </div>
    );
  }

  console.log('App render:', { 
    gamesCount: games.length, 
    filteredCount: filteredAndSortedGames.length, 
    searchTerm,
    loading 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header 
        totalGames={games.length} 
        filteredGames={filteredAndSortedGames.length} 
      />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <SearchBar games={games} onSearch={setSearchTerm} />
        </div>

        <div className="mb-6">
          <FilterBar
            platforms={platforms}
            selectedPlatform={selectedPlatform}
            onPlatformChange={setSelectedPlatform}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        <GameList games={filteredAndSortedGames} loading={loading} />
      </main>
    </div>
  );
}

export default App;
