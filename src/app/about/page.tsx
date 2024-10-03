
import Link from "next/link";
export default function About() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
      <p className="text-lg text-gray-700 mb-6 text-center " >
        Hi, my name is Zarnam Izhar. I have been reading books for as long as I can remember. Growing up I realized, I love crime, suspense and psychological thrillers.
 <p>A good plot is necessary for the reader to stay on the edge of their bed. Twists and turns of the story is needed to make the reader miss sleep, binge reading the whole thing</p>
      </p>
   <p>This is just my first time writing a blog and as I'm quite new to it, I request you all to support me in this journey</p>
      

      <Link href="/" className="text-indigo-600 hover:text-indigo-800 text-lg mt-4 block">
          Go Back to Home
        </Link>
    </div>
  );
}
