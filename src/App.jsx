import Navbar from './components/Navbar'
import Modal from './components/Modal'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [watchlist, setWatchList] = useState(() => {
    const savedList = localStorage.getItem('watchlist')

    return savedList ? JSON.parse(savedList) : []
  })

  // --> Toggle watchlist
  function toggleWatchlist(movie) {
    setWatchList(prev => {
      const exists = prev.find(m => m.id === movie.id);

      const updated = exists
        ? prev.filter(m => m.id !== movie.id)
        : [...prev, movie];

      return updated;
    })
  }

  // // --> Add movie to the watchList
  // function addToWatchList(movie) {
  //   setWatchList(prevWatchList => {
  //     if (prevWatchList.find(m => m.id === movie.id)) {
  //       console.log('la pelicula ya existe')
  //       return prevWatchList
  //     }

  //     // --> return the previous watchlist with the new movie item
  //     return [...prevWatchList, movie]
  //   })
  // }

  // --> Remove movie from watchlist
  function removeFromWatchList(id) {
    console.log('Borrando pelicula con id:', id)
    setWatchList(prevWatchList => prevWatchList.filter((movie) => movie.id !== id))
  }

  // --> Save watchlist to LocalStorage
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
  }, [watchlist])


  return (
    <>
      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className='main-content w-full max-w-7xl mx-auto px-5'>
        <MovieList
          watchlist={watchlist}
          toggleWatchlist={toggleWatchlist} />
      </div>

      {isOpen ?
        <Modal
          setIsOpen={setIsOpen}
          watchlist={watchlist}
          removeFromWatchList={removeFromWatchList}
        /> : null}

      <Footer />
    </>
  )
}

export default App
