import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";


// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <div className={`${geistSans.variable} ${geistMono.variable} relative w-screen h-screen`}>
        <Image
          src="/kittens.jpg" 
          alt="Kittens"
          layout="fill"
          objectFit="cover"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Cat App!</h1>
          <a 
          href="/about" 
          className="mt-4 px-6 py-3 bg-white text-black rounded-md shadow-lg hover:bg-gray-200" > 
          Click Me To Get Started! 
          </a>
        </div>
      </div>
    </>
  );
}
