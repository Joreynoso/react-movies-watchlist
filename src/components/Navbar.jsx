

export default function Navbar({ setIsOpen }) {

    // --> handleModal Open or Not
    function handleModal() {
        setIsOpen(prev => !prev)
    }

    return (
        <>
            <div className='bg-[#111827] w-full'>
                <div className='navbar w-full max-w-7xl mx-auto flex justify-between items-center h-20 px-5 py-12'>

                    <div className="welcome space-y-1">
                        <p className="text-white font-medium text-xl leading-tight">
                            Hello, <span className="font-normal">José!</span>
                        </p>
                        <p className="text-white/60 font-normal text-sm leading-none">
                            Save your favorite movie
                        </p>
                    </div>

                    <div className='flex'>
                        <button
                            onClick={handleModal}
                            className='rounded-xl bg-[#2B2A3A]/70 overflow-hidden border border-[#383A4D] px-4 py-3
          hover:bg-[#373549] transition-colors duration-200 flex justify-center items-center text-white/60'>
                            My Watchlist
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}