import PropTypes from 'prop-types';

const GameCard = ({ game }) => {
  const { title, platform, score, genre, editors_choice } = game;

  const getScoreColor = (score) => {
    if (score >= 9) return 'text-green-600 bg-green-50';
    if (score >= 7) return 'text-blue-600 bg-blue-50';
    return 'text-orange-600 bg-orange-50';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-semibold text-gray-900 text-lg leading-tight flex-1">
          {title}
        </h3>
        <div className={`px-3 py-1 rounded-lg ${getScoreColor(score)}`}>
          <span className="text-xl font-bold">{score}</span>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Platform:</span>
          <span className="text-gray-900 font-medium">{platform}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Genre:</span>
          <span className="text-gray-700">{genre}</span>
        </div>
      </div>

      {editors_choice === 'Y' && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
            ⭐ Editor's Choice
          </span>
        </div>
      )}
    </div>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    editors_choice: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameCard;
