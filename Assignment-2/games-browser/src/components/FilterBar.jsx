import PropTypes from 'prop-types';

const FilterBar = ({ platforms, selectedPlatform, onPlatformChange, sortBy, onSortChange }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1">
        <select
          value={selectedPlatform}
          onChange={(e) => onPlatformChange(e.target.value)}
          className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 cursor-pointer"
        >
          <option value="">All Platforms</option>
          {platforms.map((platform) => (
            <option key={platform} value={platform}>
              {platform}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 cursor-pointer"
        >
          <option value="default">Sort by...</option>
          <option value="score-high">Highest Score</option>
          <option value="score-low">Lowest Score</option>
          <option value="title-asc">A to Z</option>
          <option value="title-desc">Z to A</option>
          <option value="editors-choice">Editor's Choice</option>
        </select>
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  platforms: PropTypes.array.isRequired,
  selectedPlatform: PropTypes.string.isRequired,
  onPlatformChange: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default FilterBar;
