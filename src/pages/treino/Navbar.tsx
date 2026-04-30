export default function Navbar() {
    return (
         <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-10 py-6 z-50 bg-transparent">
            
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm cursor-pointer hover:bg-black/40 transition">
                <span className="text-white text-xs">⚔️</span>
            </div>


           <div className="flex gap-8 bg-white/10 backdrop-blur-md px-10 py-3 rounded-full border border-white/10 shadow-xl">
                <a href="#" className="text-gray-300 hover:text-white text-xs uppercase tracking-widest transition">About</a>
                <a href="#" className="text-gray-300 hover:text-white text-xs uppercase tracking-widest transition">Menu</a>
                <a href="#" className="text-gray-300 hover:text-white text-xs uppercase tracking-widest transition">History</a>
                <a href="#" className="text-gray-300 hover:text-white text-xs uppercase tracking-widest transition">Contact</a>
            </div>
            <div className="flex gap-6 items-center">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center cursor-pointer">
                    <span className="text-white text-[10px]">👤</span>
                </div>
                <div className="space-y-1 cursor-pointer group">
                    <div className="w-6 h-0.5 bg-white"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                </div>
            </div>
        </nav>
    )
}