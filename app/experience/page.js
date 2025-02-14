import Link from "next/link"

export default function Experience(){
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

            <h1 class="font-bold text-5xl m-10 text-center text-green-900">Experience</h1>
            <a href="https://sciencealive.ca/" target="_blank" rel="noopener noreferrer">
            <div class="bg-orange-200 flex items-center m-10 rounded-md">
                
                    <img src="/ScienceAlive-logo.png" alt="Science Alive" class="w-60  rounded-md m-10"></img>
                    
                
                
                    
                    
                <div class="text-center md:text-left font">
                    <h1 class="text-3xl font-bold text-green-900 ml-10 mr-10">Science Alive Coding Instructor</h1>
                    <p class="text-green-900 text-2xl ml-10 mr-10">
                    Working at SFU Surrey campus for SFU’s Outreach program. I teach App Development, Game Development, HTML, CSS and JavaScript.
                        
                    </p>
                    
                </div>
                
            </div>
            </a>
            
        </body>
    )
}