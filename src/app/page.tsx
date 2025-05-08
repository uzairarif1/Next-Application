import Image from "next/image";
import "@/app/globals.css";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-purple-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl text-purple-700 font-bold mb-4">Welcome</h1>
            <p className="text-lg text-gray-700 mb-4">
              Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.
            </p>
            <a href="/blogs/posts" className="outline-1 outline-offset-2 border-purple-700 text-purple-700 hover:text-white py-2 px-4 rounded hover:bg-purple-800 md:w-fit">
              Go to Blog Posts
            </a>
          </div>
          <div>
        <Image 
        className="hidden md:block z-10 relative  justify-center items-center rounded-xl"
        src="/image-desktop.jpeg"
        width={1000}
        height={400}
        alt="Picture of the Home Page"
      />
        </div>
        <div>
        <Image 
        className="md:hidden z-10 relative  justify-center items-center "
        src="/image-mobile.jpeg"
        width={1000}
        height={500}
        alt="Picture of the Home Page"
      />
        </div>
        </div>
        
      </div>
      
      <div className="bg-purple-800 hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0"></div>
    </main>
  );
}
