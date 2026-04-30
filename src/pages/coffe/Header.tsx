export default function CoffeHeader() {

    return (
        <header className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-6 bg-transparent text-white z-50">
            
            {/* Logo com espaçamento de letras (tracking) para o look futurista */}
            <h1 className="text-2xl font-bold tracking-[0.4em] uppercase">
                COFFEE
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
            <button className="items-center justify-center cursor-pointer bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                SHop
            </button>
        
        <div className="backdrop-blur-sm">
            <i className="fa fa-search"></i>
        </div>
        </header>
          
    )
}