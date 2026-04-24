export default function Hero() {

   return (
    <div className="relative grid md:grid-cols-2 items-center px-8 pb-10">
      {/* TEXTO */}
      <div className="space-y-6">
        <h1 className="text-5xl font-semibold leading-tight">
          Wireless <br /> Headphones
        </h1>
        <p className="text-gray-400 text-sm max-w-sm">
          High quality sound experience with multiple equalization modes.
        </p>
        <button className="bg-[#b46a6a] px-6 py-3 text-sm rounded">
          Shop Now
        </button>
      </div>

      {/* IMAGEM + REFLEXO */}
      <div className="relative flex justify-center">
        {/* Imagem do fone */}
        <img
          src="https://images.unsplash.com/photo-1546435770-a3e426bf472b"
          alt="headphones"
          className="w-[400px] object-contain drop-shadow-2xl z-10"
        />

        {/* Reflexo da imagem */}
        <div className="relative w-[400px] -mt-10">
          <img
            src="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd"
            className="scale-y-[-1] opacity-40 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        </div>

        {/* Efeito de brilho no piso */}
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white/30 to-transparent blur-xl"></div>
      </div>
    </div>
  )
}