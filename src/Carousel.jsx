import React from 'react'
import { motion } from 'framer-motion';
import { useEffect, useState, Fragment } from 'react'


const Carousel = () => {
    let carousel = ["card-1.png", "card-2.png", "card-3.png", "card-4.png", "card-5.png", "card-6.png", "card-7.png", "card-8.png", "card-9.png", "card-10.png"]
    
    let [index, setIndex] = useState(0)
    let [medio, setMedio] = useState(1)
    let [final, setFinal] = useState(2)

    useEffect(() => {
        // Función para manejar el evento de presionar una tecla
        const manejarTecla = (evento) => {
          // Comprobar si la tecla presionada es la derecha (código de tecla 39)
          if (evento.keyCode === 39) {
            setIndex((prevIndex) => (prevIndex - 2 + carousel.length) % carousel.length);
            setMedio((prevMedio) => (prevMedio - 2 + carousel.length) % carousel.length);
            setFinal((prevFinal) => (prevFinal - 2 + carousel.length) % carousel.length);
            // Aquí puedes agregar el código que deseas que se ejecute cuando se presiona la tecla derecha
          }
          // Comprobar si la tecla presionada es la izquierda (código de tecla 37)
          else if (evento.keyCode === 37) {
            setIndex((prevIndex) => (prevIndex + 2) % carousel.length);
            setMedio((prevMedio) => (prevMedio + 2) % carousel.length);
            setFinal((prevFinal) => (prevFinal + 2) % carousel.length);
            // Aquí puedes agregar el código que deseas que se ejecute cuando se presiona la tecla izquierda
          }
        };
    
        // Agregar un event listener al evento de presionar una tecla en el documento
        document.addEventListener("keydown", manejarTecla);
    
        // Remover el event listener al desmontar el componente
        return () => {
          document.removeEventListener("keydown", manejarTecla);
        };
      }, [index]);

  return (
    <Fragment>
    <header className='h-[10vh] bg-black flex justify-between items-center px-8  '>
        <svg className="w-6 h-6 text-white cursor-pointer relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <img src="./src/assets/logo.png" alt="logo" className='w-14 object-cover relative z-10' />
    </header>
    <main className='h-[90vh] w-full bg-black flex flex-col justify-between items-center overflow-hidden'>
      {/* bolita */}
      <h1 className='text-white font-bold text-6xl relative z-10'>Best Manga Reader</h1>
      <div
      className="box overflow-hidden w-36 h-36 md:w-1/2 md:h-1/2 border rounded-full bg-gradient-to-r from-[#4338CA] to-[#5E52F3] blur-[50rem]  absolute right-0 top-0 md:top-[30vh]"
    />
      {/* capa superpuesta */}
      <div className='w-full h-screen absolute bg-capa top-0'>
      </div>
      <motion.div className='w-full h-[50vh] flex justify-center items-center gap-8'
      initial={{ opacity: 0 }} // Animación inicial de opacidad
      animate={{ opacity: 1 }} // Animación de opacidad al estado actual
      transition={{ duration: 1.5 }} // Duración de la animación en segundos
      >
{/*           <img src={`./src/assets/${carousel[index]}`} className='w-40 relative z-10 -rotate-45' alt="img" />
          <img src={`./src/assets/${carousel[medio]}`} className='w-40 relative z-10 mb-28' alt="img" />
          <img src={`./src/assets/${carousel[final]}`} className='w-40 relative z-10 rotate-45' alt="img" />
 */}
          <motion.img
            className="w-40 relative z-10 transform -rotate-45"
            style={{transform:"rotate"}}
            src={"./src/assets/"+carousel[index]}
            alt="Card"
            key={index} // Asegurarse de usar una clave única para forzar la actualización de la imagen en cada cambio de estado
            initial={{ opacity: 0, x: -100 }} // Animación inicial de opacidad y posición en el eje X
            animate={{ opacity: 1, x: 0, transform: "rotate(-50deg)" }} // Animación de opacidad y posición en el eje X al estado actual
            transition={{ duration: 0.5 }} // Duración de la animación en segundos
          />
      <motion.img
        className="w-40 relative z-10 mb-28"
        src={"./src/assets/"+carousel[medio]}
        alt="Card"
        key={medio} // Asegurarse de usar una clave única para forzar la actualización de la imagen en cada cambio de estado
        initial={{ opacity: 0, x: -100,  }} // Animación inicial de opacidad y posición en el eje X
        animate={{ opacity: 1, x: 0, transform:"none" }} // Animación de opacidad y posición en el eje X al estado actual
        transition={{ duration: 0.5 }} // Duración de la animación en segundos
      />
      <motion.img
        className="w-40 relative z-10 transform rotate-45"
        src={"./src/assets/"+carousel[final]}
        alt="Card"
        key={final} // Asegurarse de usar una clave única para forzar la actualización de la imagen en cada cambio de estado
        initial={{ opacity: 0, x: -100 }} // Animación inicial de opacidad y posición en el eje X
        animate={{ opacity: 1, x: 0, transform: "rotate(50deg)" }} // Animación de opacidad y posición en el eje X al estado actual
        transition={{ duration: 0.5 }} // Duración de la animación en segundos
      />
      </motion.div>
    </main>
 </Fragment>
  )
}

export default Carousel