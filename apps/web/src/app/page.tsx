import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-indigo-600">English Learning AI</h1>
        <p className="mt-4 text-gray-600">Understand in Hindi. Speak in English.</p>
        <div className="mt-8 space-x-4">
          <Link
            href="/auth/login"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="inline-block px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
