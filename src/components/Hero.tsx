import  Button  from "./Button"
import Container  from "./Container"

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#e7d8d3] to-white py-16">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
           {/* Texto */}
          <div>
            <p className="text-sm text-gray-500 mb-4">
              — Berlin, Germany
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              All for the sake of your <span className="text-gray-400">beauty</span>
            </h2>

            <div className="flex items-center gap-4 mt-8">
              <Button>Booking Now</Button>

              <button className="flex items-center gap-2 text-sm">
                ▶ See the workflow
              </button>
            </div>
          </div>
          
          {/* Imagem */}
          <div className="relative">
            <div className="absolute inset-0 bg-gray-200 rounded-full blur-2xl opacity-50"></div>
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="model"
              className="relative z-10 rounded-xl"
            />
          </div>

        </div>
      </Container>
    </section>
  )
}