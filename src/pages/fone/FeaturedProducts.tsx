import Product from "./Product"

export default function FeaturedProducts() {
 return (
    <div className="border-t border-gray-800 px-8 py-6">
      <p className="text-xs text-gray-500 mb-4">Featured Products</p>
      <div className="flex gap-8">
        <Product
          img="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd"
          price="$55"
          color="Rose"
        />
        <Product
          img="https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
          price="$65"
          color="Blue"
        />
        <Product
          img="https://images.unsplash.com/photo-1546435770-a3e426bf472b"
          price="$55"
          color="Purple"
        />
      </div>
    </div>
  )
}