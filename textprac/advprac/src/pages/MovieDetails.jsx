import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getMovieById } from "../services/api"
import { useFavorites } from "../context/FavoritesContext"
import { useToast } from "../context/ToastContext"
import Loader from "../components/Loader"

const PLACEHOLDER = "https://via.placeholder.com/300x450?text=No+Poster"

function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const { showToast } = useToast()

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    setLoading(true)
    setError("")

    getMovieById(id)
      .then((data) => setMovie(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <Loader text="Loading movie details..." />
  if (error) return <p className="error-msg">{error}</p>
  if (!movie) return null

  const liked = isFavorite(movie.imdbID)
  const posterSrc = movie.Poster !== "N/A" ? movie.Poster : PLACEHOLDER

  // Parse ratings into a nice format
  const ratings = movie.Ratings || []

  return (
    <div className="page movie-details">
      <button className="btn btn-back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="details-layout">
        <div className="details-poster">
          <img src={posterSrc} alt={movie.Title} />
        </div>

        <div className="details-info">
          <h1>{movie.Title} <span className="year-tag">({movie.Year})</span></h1>

          <div className="meta-tags">
            {movie.Genre && movie.Genre.split(", ").map((g) => (
              <span key={g} className="tag">{g}</span>
            ))}
          </div>

          <div className="details-section">
            <h3>Plot</h3>
            <p>{movie.Plot}</p>
          </div>

          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Director</span>
              <span className="detail-value">{movie.Director}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Actors</span>
              <span className="detail-value">{movie.Actors}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Runtime</span>
              <span className="detail-value">{movie.Runtime}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Language</span>
              <span className="detail-value">{movie.Language}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Released</span>
              <span className="detail-value">{movie.Released}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Rated</span>
              <span className="detail-value">{movie.Rated}</span>
            </div>
          </div>

          {/* Ratings */}
          {ratings.length > 0 && (
            <div className="ratings-section">
              <h3>Ratings</h3>
              <div className="ratings-list">
                {ratings.map((r) => (
                  <div key={r.Source} className="rating-chip">
                    <span className="rating-source">{r.Source}</span>
                    <span className="rating-value">{r.Value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            className={`btn btn-lg ${liked ? "btn-liked" : "btn-fav"}`}
            onClick={() => {
              toggleFavorite(movie.imdbID)
              if (liked) {
                showToast(`Removed "${movie.Title}" from favorites`, "error")
              } else {
                showToast(`Added "${movie.Title}" to favorites!`, "success")
              }
            }}
          >
            {liked ? "★ Remove from Favorites" : "☆ Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
