import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='bg-black'>
      <p className='text-3xl font-bold text-white'>Hola mundo</p>
   </div>
  )
}

export default App
