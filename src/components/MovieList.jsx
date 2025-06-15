
import movies from '../movies/movies.json'
import Moviecard from './MovieCard'

export default function WatchList({ watchlist, toggleWatchlist }) {

    const moviesList = movies.map((movie) => (
        <Moviecard
            key={movie.id}
            id={movie.id} // --> needed for find matchs
            title={movie.title}
            genre={movie.genre}
            path={movie.poster_path}
            watchlist={watchlist}
            toggleWatchlist={() => toggleWatchlist(movie)}
        />
    ))

    return (
        <>
            {/* movie list */}
            < div className='watchlist w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 py-7' >
                {moviesList}
            </div >
        </>
    )
}