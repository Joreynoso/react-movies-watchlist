import Navbar from './components/Navbar'
import Modal from './components/Modal'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import { useState } from 'react'
import useWatchlist from './hooks/useWatchList'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  // --> Destructuring de cada función dentro de mi watchList.js
  const { watchlist, toggleWatchlist, removeFromWatchList, removeAllMovies } = useWatchlist()

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
          removeAllMovies={removeAllMovies}
          removeFromWatchList={removeFromWatchList}
        /> : null}

      <Footer />
    </>
  )
}

export default App
