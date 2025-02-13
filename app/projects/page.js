import Link from "next/link"

export default function Projects(){
    return(
        <body>
            <div class="flex justify-between text-2xl items-center p-4 bg-orange-200 underline decoration-green-900">
                <div class="test-left">
                    <Link href="projects">
                        <span class="font-bold text-green-900">Projects</span>
                    </Link>
                </div>
                <div class="test-center">
                    <Link href=".">
                        <span class="font-bold text-green-900">Home</span>
                    </Link>
                    
                </div>
                <div class="test-right">
                    <Link href="experience">
                        <span class="font-bold text-green-900">Experience</span>
                    </Link>
                
                </div>
            </div>
            <h1 class="font-bold text-5xl m-10 text-center text-green-900">Projects</h1>
            <div class="bg-orange-200 flex items-center m-10 rounded-md">
                
                    <img src="/birge.png" alt="Photo of Cole with green background" class="w-60  rounded-md m-10"></img>
                    
                
                
                    
                    
                <div class="text-center md:text-left font">
                    <h1 class="text-3xl font-bold text-green-900 ml-10 mr-10">Birge Adventure</h1>
                    <p class="text-green-900 text-2xl ml-10 mr-10">
                        This was a game that I made with my team during FallHacks23.
                        I was in charge for all the code for the game and using Unity to construct the game. This project won 3rd place.
                        https://github.com/Masagoro1/FallHacks23
                    </p>
                </div>
                
            </div>

        </body>
    )
}