import Link from "next/link"
import Image from "next/image"

export default function CartDropdown() {
  return (
    <div className=" bg-white p-4">
      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
        <button className="text-sm">&times;</button>
      </div>

      <div className="py-4">
        {/* Cart Item */}
        <div className="flex gap-4 border-b pb-4 mb-28">
          <div className="relative h-20 w-20">  
            <Image
              src="/Asgaardsofa4.png"
              alt="Asgaard sofa"
              fill
              className="object-cover bg-lightyellow"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex justify-between">
              <div>
                <h3 className="text-sm font-medium">Asgaard sofa</h3>
                <p className="text-sm text-darkyellow">Rs. 250,000.00</p>
              </div>
              <button className="text-sm">&times;</button>
            </div>
            <div className="flex items-center gap-2">
              <button className="h-6 w-6 border">-</button>
              <span className="text-sm">1</span>
              <button className="h-6 w-6 border">+</button>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Total */}
      <div className="space-y-4 border-t pt-4">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span className="text-darkyellow">Rs. 250,000.00</span>
        </div>
        <div className="grid gap-2">
          <Link
            href="/cart"
            className="block border text-center px-4 py-2 text-sm"
          >
            View Cart
          </Link>
          <Link
            href="/checkout"
            className="block border text-center px-4 py-2 text-sm"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}
