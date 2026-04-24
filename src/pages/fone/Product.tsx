type Props = {
  img: string
  price: string
  color: string
}

export default function Product({ img, price, color }: Props) {
   return (
    <div className="flex items-center gap-3">
      <img src={img} className="w-12 h-12 object-cover rounded" />
      <div>
        <p className="text-sm">{price}</p>
        <p className="text-xs text-gray-500">{color}</p>
      </div>
    </div>
  )
}