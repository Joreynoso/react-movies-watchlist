import { useState, useEffect } from 'react'

export default function useWatchlist() {
  const [watchlist, setWatchList] = useState(() => {
    const savedList = localStorage.getItem('watchlist')
    return savedList ? JSON.parse(savedList) : []
  })

  // Guarda la lista en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
  }, [watchlist])

  // Agrega o quita una película
  function toggleWatchlist(movie) {
    setWatchList(prev => {
      const exists = prev.find(m => m.id === movie.id)
      return exists
        ? prev.filter(m => m.id !== movie.id)
        : [...prev, movie]
    })
  }

  // Elimina una película por ID
  function removeFromWatchList(id) {
    setWatchList(prev => prev.filter(movie => movie.id !== id))
  }

  // Elimina todas las películas
  function removeAllMovies() {
    setWatchList([])
  }

  return {
    watchlist,
    toggleWatchlist,
    removeFromWatchList,
    removeAllMovies
  }
}
