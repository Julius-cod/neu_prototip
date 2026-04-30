import CoffeHeader from "./Header";
import coffeImg from "../../assets/coffe.png";

export default function CoffeHero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col ">
            <img
            src={coffeImg}
            alt="COFFEE Hero Background"
            className="absolute inset-0 h-full w-full object-cover"
          />
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            <CoffeHeader />
            <main className="relative z-10 flex flex-1 flex-col justify-center px-10 md:px-20">
                <div className="max-w-2xl">
                    <span className="text-orange-500 uppercase tracking-[0.3em] text-sm mb-4 block">
                        The Best Coffee in Town
                    </span>
                    <h2 className="text-7xl md:text-9xl font-bold text-white uppercase leading-none mb-6">  
                        COFFEE
                    </h2>
                    <p className="text-gray-300 text-lg max-w-md border-l-2 border-orange-500 pl-4 mb-8">
                        Sinta o aroma, saboreie a excelência. 
                        O café que desperta seus sentidos.
                    </p>
                    <button className="border border-white/30 px-8 py-3 text-white uppercase hover:bg-white hover:text-black transition-all duration-300">
                        Shop Now
                    </button>
                </div>
            </main>
            <CoffeFooter/>
        </section>
    )
}

export function CoffeFooter() {
    return (
        <section className="relative z-10 grid grid-cols-2 gap-10 p-10 mt-auto border-t border-white/10 bg-black/20 backdrop-blur-sm">
            <div>
                <h4 className="text-xs uppercase text-orange-500 font-bold mb-2">Our Mission</h4>
                <p className="text-gray-400 text-sm">Bringing the best coffee experience to our customers.</p>
            </div>
            <div>
                <h4 className="text-xs uppercase text-orange-500 font-bold mb-2">Our Vision</h4>
                <p className="text-gray-400 text-sm">To be the go-to destination for coffee lovers worldwide.</p>
            </div>          
        </section>
    )
}