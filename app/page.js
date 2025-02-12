import Image from "next/image";

export default function Home() {
  return (
    <body className="bg-orange-100">
      <div class="flex justify-between text-2xl items-center p-4 bg-orange-200 underline decoration-green-900">
        <div class="test-left">
          <span class="font-bold text-green-900">Projects</span>
        </div>
        <div class="test-center">
          <span class="font-bold text-green-900">Home</span>
        </div>
        <div class="test-right">
          <span class="font-bold text-green-900">Experience</span>
        </div>
      </div>
      <h1 class="font-bold text-5xl m-10 text-center text-green-900">Cole McKee</h1>
      <div class="bg-orange-200 flex items-center m-10 rounded-md">
        <div class="m-10 w-1/2">
          <img src="/Green-Cole.jpg" alt="Photo of Cole with green background" class="w-96  rounded-md"></img>
          <div class="justify-between flex pt-5">
            <a href="https://github.com/Masagoro1" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" class="w-12"></img>
            </a>
            <a href="https://archidekt.com/search/decks?ownerUsername=SkyCole" target="_blank" rel="noopener noreferrer">
              <img src="/archidekt.svg" class="w-12"></img>
            </a>
            <a href="https://www.linkedin.com/in/cole-mckee-618677256/" target="_blank" rel="noopener noreferrer">
              <img src="Linkedin.png" class="w-12"></img>
            </a>
          </div>
          
        </div>
        
        
        <div class="text-center md:text-left font">
          <h1 class="text-3xl font-bold text-green-900">About Me</h1>
          <p class="text-green-900 text-2xl">Hi my name is Cole McKee. I am a second year CS student at Simon Fraser University. I work as a Coding Instructor for Science Alive. I love doing game development as a hobby. I love to compete in hackathons. I also find teaching very fufilling. My other interests include trading card games like Magic the Gathering, Dungeons and Dragons and Video Games.</p>
        </div>
        
      </div>
      
    </body>
  );
}
