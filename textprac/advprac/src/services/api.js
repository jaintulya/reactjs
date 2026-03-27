const API_KEY = "b9a5e69d"
const BASE_URL = "https://www.omdbapi.com"

/**
 * Search movies by query string with pagination
 * @param {string} query - Search term
 * @param {number} page - Page number (1-based)
 * @returns {Promise<{movies: Array, totalResults: number}>}
 */
export async function searchMovies(query, page = 1) {
  const res = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${query}&page=${page}`)
  const data = await res.json()

  if (data.Response === "True") {
    return {
      movies: data.Search,
      totalResults: Number(data.totalResults),
    }
  }

  throw new Error(data.Error || "No movies found.")
}

/**
 * Get full movie details by IMDB ID
 * @param {string} id - IMDB ID (e.g. "tt1234567")
 * @returns {Promise<Object>}
 */
export async function getMovieById(id) {
  const res = await fetch(`${BASE_URL}/?apikey=${API_KEY}&i=${id}&plot=full`)
  const data = await res.json()

  if (data.Response === "True") {
    return data
  }

  throw new Error(data.Error || "Movie not found.")
}

/**
 * Fetch multiple movies by their IDs
 * @param {string[]} ids - Array of IMDB IDs
 * @returns {Promise<Array>}
 */
export async function getMoviesByIds(ids) {
  const promises = ids.map((id) => getMovieById(id).catch(() => null))
  const results = await Promise.all(promises)
  return results.filter(Boolean)
}
