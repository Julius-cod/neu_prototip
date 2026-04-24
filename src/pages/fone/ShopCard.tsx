import Hero from "./Hero"
import Navbar from "./Navbar"
import FeaturedProducts from "./FeaturedProducts"   

export default function ShopCard() {
  return (
    <div className="min-h-screen bg-[#b46a6a] flex items-center justify-center p-10">
      
      <div className="relative w-full max-w-6xl bg-black text-white rounded-xl shadow-2xl overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* Featured Products */}
        <FeaturedProducts />
      </div>
    </div>
  )
}