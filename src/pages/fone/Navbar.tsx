export default function Navbar() {
    return (
    <div className="flex items-center justify-between px-8 py-6 text-sm">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-red-400 rounded-full"></span>
        <span className="text-gray-400">Playing / Market</span>
      </div>
      <nav className="flex gap-6 text-gray-300">
        <a href="#">Inicio</a>
        <a href="#">Tienda</a>
        <a href="#">Categorias</a>
        <a href="#">Blog</a>
        <a href="#">Contacto</a>
      </nav>
      <div>🛒</div>
    </div>
  )
}