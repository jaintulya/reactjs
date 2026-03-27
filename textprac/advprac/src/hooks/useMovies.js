import { useState, useEffect, useCallback } from "react"
import { searchMovies } from "../services/api"

/**
 * Custom hook for searching movies with pagination support.
 * @param {string} initialQuery - Default search query on first load
 * @returns {Object} Movie search state and actions
 */
export function useMovies(initialQuery = "batman") {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState(initialQuery)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Fetch movies for a given query and page
  const fetchMovies = useCallback(async (searchQuery, pageNum, append = false) => {
    if (!searchQuery.trim()) return

    setLoading(true)
    setError("")

    try {
      const data = await searchMovies(searchQuery, pageNum)
      setMovies((prev) => (append ? [...prev, ...data.movies] : data.movies))
      setTotalResults(data.totalResults)
    } catch (err) {
      if (!append) {
        setMovies([])
        setTotalResults(0)
      }
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  // Initial load
  useEffect(() => {
    fetchMovies(initialQuery, 1)
  }, [initialQuery, fetchMovies])

  // Search with a new query (resets page)
  function search(newQuery) {
    setQuery(newQuery)
    setPage(1)
    fetchMovies(newQuery, 1, false)
  }

  // Load next page of results
  function loadMore() {
    const nextPage = page + 1
    setPage(nextPage)
    fetchMovies(query, nextPage, true)
  }

  const hasMore = movies.length < totalResults

  return {
    movies,
    loading,
    error,
    totalResults,
    hasMore,
    search,
    loadMore,
  }
}
