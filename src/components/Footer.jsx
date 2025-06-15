export default function Footer() {
    return (
        <footer className="w-full bg-[#111827] text-white py-8 mt-10">
            <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row justify-between items-center gap-4">

                {/* Left - Signature */}
                <p className="text-white/60 text-sm text-center sm:text-left">
                    Created by <span className="text-white font-semibold">José Reynoso</span>
                </p>

                {/* Right - Social Icons */}
                <div className="flex gap-4">
                    {/* GitHub */}
                    <a
                        href="https://github.com/joreynoso" // <-- reemplazá con tu URL real
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-white/60 hover:text-white/90 transition-colors" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.204.084 1.838 1.237 1.838 1.237 1.07 1.835 2.806 1.305 3.492.998.108-.775.418-1.305.76-1.604-2.665-.305-5.467-1.335-5.467-5.933 0-1.31.468-2.382 1.236-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.12 3.176.77.84 1.235 1.913 1.235 3.222 0 4.61-2.807 5.625-5.479 5.922.43.372.823 1.104.823 2.222 0 1.604-.015 2.897-.015 3.293 0 .32.19.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}
