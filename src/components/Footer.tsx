import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row  gap-8">
          {/* Address Section */}
          <div className="md:w-1/3 flex flex-col justify-center">
            <p className="font-extralight">400 University Drive Suite 200 Coral Gables,</p>
            <p> FL 33134, USA</p>
          </div>

          {/* Links and Help Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-2/3 justify-between">
            {/* Links Section */}
            <div>
              <p className="font-bold text-lg mb-4">Links</p>
              <ul className="space-y-6">
                <li>
                  <Link href="/" className="hover:text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-black">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-black">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <p className="font-bold text-lg mb-4">Help</p>
              <ul className="space-y-6">
                <li>
                  <Link href="/payment-options" className="hover:text-black">
                    Payment Options
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-black">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-black">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              <p className="font-bold text-lg mb-4">Newsletter</p>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-start">
          <p className="text-sm">
            &copy; 2022 Meubel House. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
