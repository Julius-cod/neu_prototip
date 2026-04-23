import  Container from "./Container"

export default function About() {
  return (
    <section className="bg-black text-white py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Texto */}
          <div>
            <h3 className="text-4xl font-semibold mb-6">
              <span className="text-gray-500">02/</span> About Us
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>

            <div className="flex gap-6 mt-10">
              <div className="bg-white text-black px-6 py-4 rounded-xl">
                <p className="text-2xl font-bold">+105k</p>
              </div>
              <div className="bg-white text-black px-6 py-4 rounded-xl">
                <p className="text-2xl font-bold">+10k</p>
              </div>
            </div>
          </div>

          {/* Imagens */}
          <div className="flex gap-4 items-end">
            <img className="rounded-t-full h-40 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb" />
            <img className="rounded-t-full h-56 object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9" />
            <img className="rounded-t-full h-72 object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" />
          </div>

        </div>
      </Container>
    </section>
  )
}