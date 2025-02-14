// Import the Link component from Next.js for client-side navigation
import Link from "next/link";

// Define the Experience component
export default function Experience() {
  return (
    // Body of the component
    <body>
      {/* Navigation bar */}
      <div class="flex justify-between text-2xl items-center p-4 bg-orange-200 underline decoration-green-900">
        {/* Left navigation link: Projects */}
        <div class="test-left">
          <Link href="projects">
            <span class="font-bold text-green-900">Projects</span>
          </Link>
        </div>

        {/* Center navigation link: Home */}
        <div class="test-center">
          <Link href=".">
            <span class="font-bold text-green-900">Home</span>
          </Link>
        </div>

        {/* Right navigation link: Experience */}
        <div class="test-right">
          <Link href="experience">
            <span class="font-bold text-green-900">Experience</span>
          </Link>
        </div>
      </div>

      {/* Main heading for the Experience page */}
      <h1 class="font-bold text-5xl m-10 text-center text-green-900">Experience</h1>

      {/* First experience section: Science Alive */}
      <a href="https://sciencealive.ca/" target="_blank" rel="noopener noreferrer">
        <div class="bg-orange-200 flex items-center m-10 rounded-md">
          {/* Image for Science Alive */}
          <img
            src="/ScienceAlive-logo.png"
            alt="Science Alive"
            class="w-60 rounded-md m-10"
          ></img>

          {/* Text content for Science Alive */}
          <div class="text-center md:text-left font">
            <h1 class="text-3xl font-bold text-green-900 ml-10 mr-10">
              Science Alive Coding Instructor
            </h1>
            <p class="text-green-900 text-2xl ml-10 mr-10">
              Working at SFU Surrey campus for SFU’s Outreach program. I teach App
              Development, Game Development, HTML, CSS, and JavaScript.
            </p>
            <p class="text-green-900 text-2xl ml-10 mr-10 font-bold">
              Summer 2024-Present
            </p>
          </div>
        </div>
      </a>

      {/* Second experience section: Big Brothers Big Sisters */}
      <a href="https://bigbrothersbigsisters.ca/" target="_blank" rel="noopener noreferrer">
        <div class="bg-orange-200 flex items-center m-10 rounded-md">
          {/* Image for Big Brothers Big Sisters */}
          <img
            src="/BBBS.png"
            alt="Big Brothers Big Sisters"
            class="w-60 rounded-md m-10"
          ></img>

          {/* Text content for Big Brothers Big Sisters */}
          <div class="text-center md:text-left font">
            <h1 class="text-3xl font-bold text-green-900 ml-10 mr-10">
              Big Brothers Big Sisters Mentor
            </h1>
            <p class="text-green-900 text-2xl ml-10 mr-10">
              Volunteered as a mentor for elementary school students. I engaged
              with students one-on-one to help them develop social skills, build
              confidence, and prompt curiosity.
            </p>
            <p class="text-green-900 text-2xl ml-10 mr-10 font-bold">
              2021-2023
            </p>
          </div>
        </div>
      </a>
    </body>
  );
}