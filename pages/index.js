import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../img/IMG_4104.JPG'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'


export default function Home() {
  const router = useRouter();

  return (
    <div className="md:container md:mx-auto">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-16 flex-col items-center justify-center text-center">
        {/* min-h-screen p-16 flex flex-col align-middle justify-items-center */}
        <h1 className="text-title sm:text-left lg:text-center">Hi, I am JeongHyun Heo</h1>
        <div className={"p-[40px]"}>
          <Link href={"/about"}><Image src={profilePic} className="rounded-[40%]" height={300} width={300} alt="profile"/></Link>
        </div>
        <h2>
          If you want to know more about me, click the button!
        </h2>
        <p className="m-16 text-[24px]">
          or
        </p>
        <h2>
          click one of these cards:
        </h2>
        <div className="grid gap-4 grid-cols-2 p-4">
          <button className="bg-orange-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => {
            router.push('/about');
          }}>
            About Me &rarr;
          </button>
          <button className="bg-orange-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => {
            router.push('/interests');}}>
              My interests &rarr;
          </button>
        </div>
      </main>

      <footer className="flex-1 text-center p-8">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="h-1 ml-0.5">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
        </a>
      </footer>
    </div>

  )
}
