import React from 'react';

/**
 * LoadingSkeleton Component
 * Loading placeholder for game cards
 */
const LoadingSkeleton = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 animate-pulse">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-8 bg-gray-200 rounded w-12"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
