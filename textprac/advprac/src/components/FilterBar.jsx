const FILTER_OPTIONS = [
  { value: "all", label: "All Types" },
  { value: "movie", label: "Movies" },
  { value: "series", label: "Series" },
  { value: "game", label: "Games" },
]

function FilterBar({ filterType, onFilterChange, totalResults, displayedCount }) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="type-filter">Filter:</label>
        <select
          id="type-filter"
          value={filterType}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          {FILTER_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {totalResults > 0 && (
        <p className="results-count">
          Showing <strong>{displayedCount}</strong> of <strong>{totalResults}</strong> results
        </p>
      )}
    </div>
  )
}

export default FilterBar
