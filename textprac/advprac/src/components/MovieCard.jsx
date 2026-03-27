import { Link } from "react-router-dom"
import { useFavorites } from "../context/FavoritesContext"
import { useToast } from "../context/ToastContext"

const PLACEHOLDER = "https://via.placeholder.com/300x450?text=No+Poster"

function MovieCard({ movie, showRemove = false }) {
  const { isFavorite, toggleFavorite, removeFavorite } = useFavorites()
  const { showToast } = useToast()
  const posterSrc = movie.Poster !== "N/A" ? movie.Poster : PLACEHOLDER
  const liked = isFavorite(movie.imdbID)

  function handleToggleFav() {
    if (liked) {
      toggleFavorite(movie.imdbID)
      showToast(`Removed "${movie.Title}" from favorites`, "error")
    } else {
      toggleFavorite(movie.imdbID)
      showToast(`Added "${movie.Title}" to favorites!`, "success")
    }
  }

  function handleRemove() {
    removeFavorite(movie.imdbID)
    showToast(`Removed "${movie.Title}" from favorites`, "error")
  }

  return (
    <div className="movie-card">
      <div className="card-poster">
        <img src={posterSrc} alt={movie.Title} loading="lazy" />
        <span className="card-type">{movie.Type}</span>

        {/* Hover overlay */}
        <div className="card-overlay">
          <Link to={`/movie/${movie.imdbID}`} className="overlay-btn">
            View Details
          </Link>
          <button
            className={`overlay-btn ${liked ? "overlay-liked" : ""}`}
            onClick={handleToggleFav}
          >
            {liked ? "★ Favorited" : "☆ Favorite"}
          </button>
        </div>
      </div>

      <div className="card-body">
        <h3 className="card-title" title={movie.Title}>{movie.Title}</h3>
        <div className="card-meta">
          <span className="card-year">{movie.Year}</span>
          <span className="card-type-tag">{movie.Type}</span>
        </div>

        <div className="card-actions">
          <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary">
            View Details
          </Link>

          {showRemove ? (
            <button className="btn btn-danger" onClick={handleRemove}>
              ✕ Remove
            </button>
          ) : (
            <button
              className={`btn ${liked ? "btn-liked" : "btn-fav"}`}
              onClick={handleToggleFav}
            >
              {liked ? "★ Favorited" : "☆ Favorite"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieCard
