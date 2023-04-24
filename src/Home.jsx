import React, {Fragment, useEffect, useState} from 'react'

const Home = () => {
  let [index, setIndex] = useState(0)
  let images = ["hero.png", "hero2.png", "hero3.png"]
  const nextSlide = () => {
    (index === images.length) ? setIndex(0) : setIndex(index++)
  }
  useEffect(() => {
        let interval = setInterval(() => {
            nextSlide()
        }, 3000)
        return () => clearInterval(interval)
    })

  return (
    <Fragment>
    <header className='h-[10vh] bg-black flex justify-between items-center px-8  '>
        <svg className="w-6 h-6 text-white cursor-pointer relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <img src="./src/assets/logo.png" alt="logo" className='w-14 object-cover relative z-10' />
    </header>
    <main className='h-[90vh] w-full bg-black flex justify-center items-center md:px-8'>
      {/* bolita */}
      <div className='w-36 h-36 md:w-1/2 md:h-1/2 border rounded-full bg-gradient-to-r from-[#4338CA] to-[#5E52F3] blur-[50rem]  absolute right-0 top-0 md:top-[30vh]'>
        {/* circulo */}
      </div>
      {/* IMAGEN DE HERO */}
      <img className="overflow-y-hidden absolute bottom-0 md:relative  md:w-1/2 md:max-h-fit md:object-contain lg:h-[90vh]" src="./src/assets/hero2.png" alt="hero" />
      {/* capa superpuesta */}
      <div className='w-full h-screen absolute bg-capa top-0'>
      </div>
      <section className='flex flex-col absolute items-center justify-center gap-2 w-1/2 md:relative md:grow md:px-4 lg:justify-start lg:items-start lg:px-28 md:gap-4 z-10'>
        <h1 className='flex flex-col items-center justify-center lg:flex-row lg:gap-2 lg:justify-start lg:items-start text-3xl font-bold text-white text-center gap-2 lg:text-4xl lg:w-10/12  lg:text-left lg:inline-block '>Your favourite manga reader   <img className="w-16 h-16 lg:text-left lg:hidden" src="https://em-content.zobj.net/thumbs/160/apple/354/smirking-face_1f60f.png" alt="cara picara" />
        </h1>
        <img className="w-16 h-16 hidden lg:text-left lg:inline-block" src="https://em-content.zobj.net/thumbs/160/apple/354/smirking-face_1f60f.png" alt="cara picara" />
        <p className='lg:w-10/12  lg:text-left text-center text-white text-xs md:text-base'>is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
        <button className='grow w-full py-4 rounded-md border border-[#999] bg-[rgba(255,255,255,0.1)] text-white backdrop-blur-md  flex justify-center relative'>
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

export default Home