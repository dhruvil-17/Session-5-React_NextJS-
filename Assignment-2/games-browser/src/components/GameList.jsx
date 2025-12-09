import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';
import LoadingSkeleton from './LoadingSkeleton';

/**
 * GameList Component
 * Displays grid of game cards
 */
const GameList = ({ games, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(8)].map((_, index) => (
          <LoadingSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No games found</p>
        <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {games.map((game, index) => {
        if (!game || !game.title) return null;
        return <GameCard key={`${game.title}-${index}`} game={game} />;
      })}
    </div>
  );
};

GameList.propTypes = {
  games: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default GameList;
