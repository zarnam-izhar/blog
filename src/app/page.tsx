import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <main className="relative flex flex-col items-center">
        {/* Image Container */}
        <div className="image-container mb-8">
          <Image
            src="/book.jpeg"  
            alt="Book Cover"
         
            width={1200}
            height={600}
            className="w-full h-auto rounded shadow-lg" // Adjusted classes for full width and auto height
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center mb-2">Welcome to My Book Blog</h1>
            <p className="text-5xl font-bold text-indigo-200 text-center mb-4">
              A place to discuss and explore literature</p>

             

              <p className="text-lg text-gray-300 text-center">
          
               starting with a review of the book <em>"Devotion of Suspect X"</em>.
            </p>
            <hr className="w-3/4 border-t-2 border-indigo-400 mb-6" />
          </div>
        </div>
         {/* Review Content */}
         <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong>Devotion of Suspect X</strong> is a masterful work by Keigo
          Higashino that blends a classic mystery with deep psychological
          intrigue. The novel tells the story of a mathematician, Ishigami, who
          finds himself involved in a murder cover-up for the woman he secretly
          loves. The plot twists and turns, with every page pulling you deeper
          into the moral dilemmas and unexpected revelations.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Higashino's writing is clean and sharp, delivering a sense of
          foreboding as the investigation unravels. What makes this book stand
          out is the way it explores human relationships, guilt, and the lengths
          one would go for love. The climax of the book is unforgettable, a true
          testament to Higashino's storytelling brilliance.
        </p>
      </main>
    </div>
  );
}

