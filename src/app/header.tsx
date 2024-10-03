import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-lg py-4">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-1">My Book Blog</h1>
        <p className="text-lg text-gray-600 italic mb-4">A space to explore and discuss literature</p>
        <nav className="flex space-x-6">
          <Link href="/">
            <span className="text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition duration-200 cursor-pointer">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition duration-200 cursor-pointer">About</span>
          </Link>
          <Link href="/blog">
            <span className="text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition duration-200 cursor-pointer">Blog</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
