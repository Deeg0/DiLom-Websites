import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-[#008080] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-[#008080] text-white rounded-xl font-semibold text-lg hover:bg-[#006666] transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

