import Link from "next/link"
import Service from "@/components/Service"
import BreadCrumb from "@/components/BreadCrumb"

export default function MyAccount() {
  return (
    <div>
        <BreadCrumb title="Account" url="myaccount"/>
        <div className="flex justify-center items-center mx-auto px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="container mx-auto px-4 py-8">
      <div className="grid gap-12 md:grid-cols-2">
        {/* Login Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Log In</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Username or email address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 border rounded"
              />
              <label htmlFor="remember" className="text-sm">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-4 py-2 border rounded-md"
            >
              Log In
            </button>
            <div className="text-sm">
              <Link href="/" className="underline">
                Lost Your Password?
              </Link>
            </div>
          </form>
        </div>

        {/* Register Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Register</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="register-email" className="block text-sm">
                Email address
              </label>
              <input
                id="register-email"
                type="email"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="text-sm">
              <p>A link to set a new password will be sent to your email address.</p>
              <p className="mt-4">
                Your personal data will be used to support your experience throughout this website, to manage access
                to your account, and for other purposes described in our{" "}
                <Link href="/" className="underline">
                  privacy policy
                </Link>
                .
              </p>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-4 py-2 border rounded-md"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
        </div>
        <Service/>
    </div>
  )
}