import MovieCardModal from '../components/MovieCardModal'
import ModalMessage from '../components/ModalMessage'


export default function Modal({ setIsOpen, watchlist, removeFromWatchList, removeAllMovies }) {

  const movieListModal = watchlist.map(movie => (
    <MovieCardModal
      key={movie.id}
      title={movie.title}
      genre={movie.genre}
      path={movie.poster_path}
      handleClick={() => removeFromWatchList(movie.id)}
    />
  ))

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4 overflow-y-auto ">
      <div className="w-full max-w-md bg-[#1F1F2B] border border-[#383A4D] rounded-3xl p-6 shadow-md text-white flex flex-col items-center gap-4 my-10">
        <h1 className="text-xl font-semibold">My Movie Watchlist</h1>

        <div className="w-full flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-2">
          {watchlist.length === 0 ? <ModalMessage /> : movieListModal}
        </div>


        <div className="flex gap-3 mt-4">
          <button
            onClick={closeModal}
            className="rounded-xl bg-[#2B2A3A]/70 border border-[#383A4D] px-4 py-3 hover:bg-[#373549] transition-colors duration-200 text-white/60"
          >
            Close Modal
          </button>

          { watchlist.length > 0 && <button
            onClick={removeAllMovies}
            className="rounded-xl bg-[#2B2A3A]/70 border border-[#383A4D] px-4 py-3 hover:bg-[#373549] transition-colors duration-200 text-white/60"
          >
            Borrar todas las peliculas
          </button>}

        </div>
      </div>
    </div>
  )
}
