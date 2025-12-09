import PropTypes from 'prop-types';

const Header = ({ totalGames, filteredGames }) => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Games Browser</h1>
            <p className="text-sm text-indigo-100 mt-1">
              Showing {filteredGames} of {totalGames} games
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  totalGames: PropTypes.number.isRequired,
  filteredGames: PropTypes.number.isRequired,
};

export default Header;
