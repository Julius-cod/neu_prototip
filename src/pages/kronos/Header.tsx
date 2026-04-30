export default function KronosHeader() {
    return (
        // Mudança 1: bg-transparent e absolute para flutuar sobre a imagem
        // Mudança 2: z-50 para garantir que ele fique acima de todos os efeitos
        <header className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-6 bg-transparent text-white z-50">
            
            {/* Logo com espaçamento de letras (tracking) para o look futurista */}
            <h1 className="text-2xl font-bold tracking-[0.4em] uppercase">
                KRONOS
            </h1>
            
            {/* Mudança 3: Centralização real usando gap e fontes menores (mais elegante) */}
            <nav className="hidden md:flex items-center gap-20 uppercase text-[12px] tracking-widest font-medium">
                <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
                <a href="#" className="hover:text-orange-500 transition-colors">About</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Service</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Works</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
            </nav>

            {/* Mudança 4: Ícone de Menu (conforme a imagem que você enviou) */}
            <button className="flex flex-col gap-1 items-end group cursor-pointer">
                <div className="w-6 h-[2px] bg-white group-hover:bg-orange-500 transition-all"></div>
                <div className="w-6 h-[2px] bg-white group-hover:bg-orange-500 transition-all"></div>
                <div className="w-6 h-[2px] bg-white group-hover:bg-orange-500 transition-all"></div>
            </button>
        </header>
    )
}
