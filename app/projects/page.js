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
        </body>
    )
}