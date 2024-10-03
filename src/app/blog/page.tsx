import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <main className="w-full max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
        {/* Main Heading */}
        <h1 className="text-9xl font-extrabold text-indigo-800 mb-8 leading-tight">
          Devotion of Suspect X - Book Review
        </h1>

        {/* Subheading */}
        <h2 className="text-5xl font-semibold text-gray-800 mb-10 italic">
          A Gripping Mystery That Keeps You Hooked
        </h2>

        {/* Divider */}
        <hr className="w-1/3 mx-auto mb-8 border-gray-300" />

        {/* Full-width Book Cover Image */}
        <div className="w-full mb-8">
  <Image
    src="/image.jpeg"
    alt="Book Cover"
  layout="responsive"
    width={1200} 
    height={600}
    className="rounded shadow-lg "
  />
</div>

        {/* Review Content */}
<p className="text-lg text-gray-700 leading-relaxed mb-6">
  <strong>Devotion of Suspect X</strong> is at the moment my number 1 on the list of 
  jaw-dropping mystery.
</p>

<p className="text-lg text-gray-700 leading-relaxed mb-6">
  The book pacing is actually fast at first, but gets slow in the middle, and near the end it picks up again in a nerve-racking way as we journey together with Detective Galileo.
</p>

<p className="text-lg text-gray-700 leading-relaxed mb-6">
  At first, we considered the professor to be super creepy, but then we began to see his devotion to his neighbor was pure and how lonely he was. Then again, we began to feel uncomfortable because his actions became a little obsessive.
</p>

<p className="text-lg text-gray-700 leading-relaxed mb-6">
  The part that fascinated me the most was his love for Maths and how his friendship with Detective Galileo was weird and yet beautiful to observe. They were the only people in the world who could understand each other, making them perfect opponents. This gave us even more reason to see who would win in the end, as both of them were quite smart and engaged in their own mind game.
</p>

<p className="text-lg text-gray-700 leading-relaxed mb-6">
  The cat-and-mouse game reminded me a lot of Death Note—if you enjoyed that, you will definitely love this mystery. Here, <b>Ishigami</b> can be considered Light, while <b>Yukawa</b> can be considered L.
</p>

<p className="text-lg text-gray-700 leading-relaxed mb-6">
  Detective Kusangi's character is also interesting to observe, as he was the most suspicious one and wouldn't let the neighbor Miss Hanaoka go, constantly threatening to ruin Ishigami's plan.
</p>

<p className="text-lg text-gray-700 leading-relaxed mb-6">
  The writer, <b>Keigo Higashino</b>, has made the book smoothly paced, revealing things at just the right moment, ensuring the reader stays hooked without feeling overwhelmed or bored.
</p>

<p className="text-lg text-gray-700 leading-relaxed mb-6">
  The complicated characters, the nuanced writing, and the sense of melancholy will entice you to finish the book in one sitting.
</p>

{/* Call to Action */}
<Link href="/" className="text-indigo-600 hover:text-indigo-800 text-lg mt-4 block">
  Go Back to Home
</Link>
</main>
    </div>
  );
}