import Navbar from "./Navbar";

// Se a imagem está na pasta 'public', use apenas '/nome-da-imagem.jpg'
import samoraiImg from "../../assets/samorai.png";

export default function Samorai() {
    return (
         <section className="relative min-h-screen w-full flex flex-col ">
         <img
        src={samoraiImg}
        alt="smorai IMG Background"
        className="absolute inset-0 h-full w-full object-cover"
      />
           {/* Adicionei 'flex flex-col' aqui para o conteúdo interno alinhar */}
           <div className="min-h-screen w-full bg-black/40 backdrop-brightness-75 flex flex-col">

                <Navbar />

                {/* Agora o h1 vai ocupar o resto da tela e centralizar perfeitamente */}
                <main className="flex-1 flex flex-col items-center justify-center text-white">
                    <h1 className="text-9xl font-bold tracking-[0.2em] uppercase opacity-90">
                        Samurai
                    </h1>
                    <p className="mt-4 text-sm tracking-[0.5em] text-gray-400 uppercase">
                        Way of the holy sword
                    </p>
                    
                    <button className="mt-12 px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition duration-500 text-xs uppercase tracking-widest">
                        Read the story
                    </button>
                </main>

            </div>
        </section>
    );
}
