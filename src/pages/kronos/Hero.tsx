import KronosHeader from "./Header";
import heroImg from "../../assets/kronos.png";

export default function Hero() {
  return (
    // 1. CONTAINER PAI (Ocupa a tela toda e define o fundo)
    <section className="relative min-h-screen w-full flex flex-col ">
        <img
        src={heroImg}
        alt="KRONOS Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      {/* 2. OVERLAY (Escurece a imagem para dar leitura ao texto) */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* 3. HEADER (Fica no topo, mas dentro do pai relativo) */}
      <KronosHeader /> 

      {/* 4. CONTAINER DE CONTEÚDO (Centraliza o texto na tela) */}
      <main className="relative z-10 flex flex-1 flex-col justify-center px-10 md:px-20">
        
        <div className="max-w-2xl">
          <span className="text-orange-500 uppercase tracking-[0.3em] text-sm mb-4 block">
            The Future is Now
          </span>
          
          <h2 className="text-7xl md:text-9xl font-bold text-white uppercase leading-none mb-6">
            KRONOS
          </h2>
          
          <p className="text-gray-300 text-lg max-w-md border-l-2 border-orange-500 pl-4 mb-8">
            Controlando o tempo e a tecnologia para criar o amanhã. 
            Sua visão, nossa missão.
          </p>

          <button className="border border-white/30 px-8 py-3 text-white uppercase hover:bg-white hover:text-black transition-all duration-300">
            Let's Go
          </button>
        </div>

      </main>

      {/* 5. FOOTER DA HERO (As informações de Missão/Visão da imagem) */}
      <div className="relative z-10 grid grid-cols-2 gap-10 p-10 mt-auto border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div>
              <h4 className="text-xs uppercase text-orange-500 font-bold mb-2">Our Mission</h4>
              <p className="text-gray-400 text-sm">Making the world united to its fullest with technology.</p>
          </div>
          <div>
              <h4 className="text-xs uppercase text-orange-500 font-bold mb-2">Our Vision</h4>
              <p className="text-gray-400 text-sm">To make the world use its resources to the fullest.</p>
          </div>
      </div>
    </section>
  );
}
