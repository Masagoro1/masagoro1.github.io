import Image from "next/image"; // Import the Image component from Next.js for optimized images
import Link from "next/link"; // Import the Link component from Next.js for client-side navigation

export default function Home() {
  return (
    <body>
      {/* Navigation Bar */}
      <div class="flex justify-between text-2xl items-center p-4 bg-orange-200 underline decoration-green-900">
        {/* Left Navigation Link: Projects */}
        <div class="test-left">
          <Link href="projects">
            <span class="font-bold text-green-900">Projects</span>
          </Link>
        </div>

        {/* Center Navigation Link: Home */}
        <div class="test-center">
          <Link href=".">
            <span class="font-bold text-green-900">Home</span>
          </Link>
        </div>

        {/* Right Navigation Link: Experience */}
        <div class="test-right">
          <Link href="experience">
            <span class="font-bold text-green-900">Experience</span>
          </Link>
        </div>
      </div>

      {/* Page Title */}
      <h1 class="font-bold text-5xl m-10 text-center text-green-900">Cole McKee</h1>

      {/* Main Content Section */}
      <div class="bg-orange-200 flex items-center m-10 rounded-md">
        {/* Left Column: Profile Photo and Social Links */}
        <div class="m-10 w-1/2">
          {/* Profile Photo */}
          <img src="/Green-Cole.jpg" alt="Photo of Cole with green background" class="w-96 rounded-md"></img>

          {/* Social Links */}
          <div class="justify-between flex pt-5">
            {/* GitHub Link */}
            <a href="https://github.com/Masagoro1" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="github profile" class="w-12"></img>
            </a>

            {/* Archidekt Link (Magic: The Gathering Decks) */}
            <a href="https://archidekt.com/search/decks?ownerUsername=SkyCole" target="_blank" rel="noopener noreferrer">
              <img src="/archidekt.svg" alt="Magic Decks" class="w-12"></img>
            </a>

            {/* LinkedIn Link */}
            <a href="https://www.linkedin.com/in/cole-mckee-618677256/" target="_blank" rel="noopener noreferrer">
              <img src="Linkedin.png" alt="linkedin" class="w-12"></img>
            </a>

            {/* Resume Link */}
            <a href="/ColeMcKeeResume.pdf" target="_blank" rel="noopener noreferrer">
              <img src="resume.png" alt="resume" class="w-12"></img>
            </a>
          </div>
        </div>

        {/* Right Column: About Me and Skills Section */}
        <div class="text-center md:text-left font">
          {/* About Me Section */}
          <h1 class="text-3xl font-bold text-green-900">About Me</h1>
          <p class="text-green-900 text-2xl">
            Hi, my name is Cole McKee. I am a second-year CS student at Simon Fraser University. 
            I work as a Coding Instructor for Science Alive. I love doing game development as a hobby. 
            I love to compete in hackathons. I also find teaching very fulfilling. My other interests 
            include trading card games like Magic: The Gathering, Dungeons and Dragons, and Video Games.
          </p>

          {/* Skills Section */}
          <h1 class="text-3xl font-bold text-green-900 mt-10">Skills</h1>
          <p class="text-green-900 text-2xl">
            The languages I know are C, C++, C#, HTML, CSS, JavaScript, and Python.
          </p>
          <p class="text-green-900 text-2xl">
            I am comfortable using React, Tailwind, and Unity.
          </p>
        </div>
      </div>
    </body>
  );
}