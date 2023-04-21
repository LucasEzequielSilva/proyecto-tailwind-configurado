import { useState, Fragment } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Fragment>
      <header className='h-[10vh] bg-black flex justify-between items-center px-8  '>
          <svg className="w-6 h-6 text-white cursor-pointer relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <img src="./src/assets/logo.png" alt="logo" className='w-14 object-cover relative z-10' />
      </header>
      <main className='min-h-[90vh] w-full bg-black flex justify-center items-center'>
        <div className='w-36 h-36 border rounded-full bg-gradient-to-r from-[#4338CA] to-[#5E52F3] blur-[50rem]  absolute right-0 top-0'>
          {/* circulo */}
        </div>
        <img className="w-full h-fit" src="./src/assets/hero.png" alt="hero" />
        {/* capa superpuesta */}
        <div className='w-full h-screen absolute bg-capa top-0'>
        </div>
        <section className='flex flex-col absolute items-center justify-center gap-2 w-9/12'>
          <h1 className='flex flex-col items-center justify-center text-3xl font-bold text-white text-center gap-2'>Your favourite manga reader <img className="w-16 h-16" src="https://em-content.zobj.net/thumbs/160/apple/354/smirking-face_1f60f.png" alt="cara picara" /></h1>
          <p className='text-center text-white text-xs'>is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
          <button className='grow w-full py-4 rounded-md border text-white backdrop-blur-md flex justify-center relative'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="left-4 absolute w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

            Search mangas
          </button>
        </section>
      </main>
   </Fragment>
  )
}

export default App
