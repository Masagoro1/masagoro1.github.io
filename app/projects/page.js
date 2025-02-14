import Link from "next/link"; // Import the Link component from Next.js for client-side navigation

export default function Projects() {
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
      <h1 class="font-bold text-5xl m-10 text-center text-green-900">Projects</h1>

      {/* Project 1: Birge Adventure */}
      <a href="https://github.com/Masagoro1/FallHacks23" target="_blank" rel="noopener noreferrer">
        <div class="bg-orange-200 flex items-center m-10 rounded-md">
          {/* Project Image */}
          <img src="/birge.png" alt="Birge Adventure" class="w-60 rounded-md m-10"></img>

          {/* Project Description */}
          <div class="text-center md:text-left font">
            <h1 class="text-3xl font-bold text-green-900 ml-10 mr-10">Birge Adventure</h1>
            <p class="text-green-900 text-2xl ml-10 mr-10">
              This was a game that I made with my team during FallHacks23. 
              I was in charge of all the code for the game and used Unity to construct the game. 
              This project won 3rd place.
            </p>
          </div>
        </div>
      </a>

      {/* Project 2: Productivity Pets */}
      <a href="https://github.com/jakekyee/StormHacks-2024" target="_blank" rel="noopener noreferrer">
        <div class="bg-orange-200 flex items-center m-10 rounded-md">
          {/* Project Image */}
          <img src="/productivityPet.png" alt="Productivity pet" class="w-60 rounded-md m-10"></img>

          {/* Project Description */}
          <div class="text-center md:text-left font">
            <h1 class="text-3xl font-bold text-green-900 ml-10 mr-10">Productivity Pets</h1>
            <p class="text-green-900 text-2xl ml-10 mr-10">
              An add-on for Adobe Express that I made with my team for StormHacks 2024 v2.0. 
              This project won the award for most creative add-on.
            </p>
          </div>
        </div>
      </a>
    </body>
  );
}