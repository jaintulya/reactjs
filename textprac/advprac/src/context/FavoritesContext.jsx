import { createContext, useState, useEffect, useContext } from "react"

const FavoritesContext = createContext()

const STORAGE_KEY = "movie_favorites"

/**
 * Read favorites from localStorage
 */
function loadFavorites() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

/**
 * Save favorites to localStorage
 */
function saveFavorites(favorites) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
}

/**
 * Provider component that wraps the app and provides favorites state
 */
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(loadFavorites)

  // Sync to localStorage whenever favorites change
  useEffect(() => {
    saveFavorites(favorites)
  }, [favorites])

  function addFavorite(id) {
    setFavorites((prev) => {
      if (prev.includes(id)) return prev
      return [...prev, id]
    })
  }

  function removeFavorite(id) {
    setFavorites((prev) => prev.filter((favId) => favId !== id))
  }

  function isFavorite(id) {
    return favorites.includes(id)
  }

  function toggleFavorite(id) {
    if (isFavorite(id)) {
      removeFavorite(id)
    } else {
      addFavorite(id)
    }
  }

  const value = {
    favorites,
    favCount: favorites.length,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

/**
 * Custom hook to consume FavoritesContext
 */
export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}

export default FavoritesContext
