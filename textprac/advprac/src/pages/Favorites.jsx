import { useState, useEffect } from "react"
import { useFavorites } from "../context/FavoritesContext"
import { getMoviesByIds } from "../services/api"
import MovieCard from "../components/MovieCard"
import Loader from "../components/Loader"

function Favorites() {
  const { favorites } = useFavorites()
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (favorites.length === 0) {
      setMovies([])
      setLoading(false)
      return
    }

    setLoading(true)
    getMoviesByIds(favorites)
      .then((data) => setMovies(data))
      .catch(() => setMovies([]))
      .finally(() => setLoading(false))
  }, [favorites])

  if (loading) return <Loader text="Loading your favorites..." />

  return (
    <div className="page favorites">
      <div className="page-header">
        <h1>My Favorites</h1>
        <p className="subtitle">
          {favorites.length > 0
            ? `You have ${favorites.length} favorite${favorites.length > 1 ? "s" : ""}`
            : "Your collection is empty"}
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">💔</span>
          <h2>No favorite movies added.</h2>
          <p>Start exploring and add movies you love!</p>
        </div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} showRemove={true} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites
