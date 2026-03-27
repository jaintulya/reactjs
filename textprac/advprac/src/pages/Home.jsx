import { useState, useMemo } from "react"
import { useMovies } from "../hooks/useMovies"
import SearchBar from "../components/SearchBar"
import FilterBar from "../components/FilterBar"
import MovieCard from "../components/MovieCard"
import Loader from "../components/Loader"

function Home() {
  const { movies, loading, error, totalResults, hasMore, search, loadMore } = useMovies("batman")
  const [filterType, setFilterType] = useState("all")

  const filteredMovies = useMemo(() => {
    if (filterType === "all") return movies
    return movies.filter((m) => m.Type === filterType)
  }, [movies, filterType])

  return (
    <div className="page home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Discover Your Next <span className="gradient-text">Favorite Movie</span></h1>
          <p className="hero-subtitle">Explore thousands of movies, TV series, and games. Save your favorites and build your personal collection.</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Titles</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Genres</span>
            </div>
            <div className="stat">
              <span className="stat-number">&infin;</span>
              <span className="stat-label">Entertainment</span>
            </div>
          </div>
        </div>
      </div>

      <SearchBar onSearch={search} />

      <FilterBar
        filterType={filterType}
        onFilterChange={setFilterType}
        totalResults={totalResults}
        displayedCount={filteredMovies.length}
      />

      {error && <p className="error-msg">{error}</p>}

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {loading && <Loader />}

      {hasMore && !loading && (
        <div className="load-more">
          <button className="btn btn-outline" onClick={loadMore}>
            Load More Movies
          </button>
        </div>
      )}
    </div>
  )
}

export default Home
