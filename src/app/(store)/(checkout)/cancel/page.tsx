export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-6">Payment Canceled</h1>
        <p className="text-gray-700 text-lg mb-8">
          Your payment has been canceled.If this was a mistake, you can try again.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="/"
            className="bg-lightyellow hover:bg-darkyellow text-black px-6 py-3 rounded font-semibold transition duration-300"
          >
            Go to Home
          </a>
          <a
            href="/cart"
            className="bg-lightyellow hover:bg-darkyellow text-black px-6 py-3 rounded font-semibold transition duration-300"
          >
            Try Again
          </a>
        </div>
      </div>
    </div>
  );
}
