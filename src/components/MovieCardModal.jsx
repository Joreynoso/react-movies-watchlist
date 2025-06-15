export default function MovieCardModal({ title, genre, path, handleClick }) {
    return (
        <>
            <div className="flex flex-row items-center gap-3 mb-3 p-2 rounded-2xl bg-[#1F2937] opacity-80 hover:opacity-100 transition-opacity duration-300">

                <div className="w-20 overflow-hidden rounded-xl">
                    <img
                        className="w-full aspect-[2/3] object-cover bg-neutral-400"
                        src={path}
                        alt={title}
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-white text-sm font-medium leading-tight">{title}</p>
                    <p className="text-white/50 text-xs">{genre}</p>
                </div>

                <button
                    onClick={handleClick}
                    className="ml-auto w-8 h-8 bg-[#111827]/80 flex justify-center items-center rounded-lg hover:bg-[#373549] transition-colors duration-200 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white/60"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </>
    )
}