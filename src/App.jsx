import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const Img1Ref = useRef(null)
  const Img2Ref = useRef(null)


  const SwapHandler = ()=>{
      
        const copy1 = Img1Ref.current.getAttribute('src') 
        const copy2 = Img2Ref.current.getAttribute('src') 
        Img2Ref.current.setAttribute('src',copy1)
        Img1Ref.current.setAttribute('src',copy2)
   
  }


  return (
    <>
    
       <div className='h-screen w-screen flex flex-col items-center gap-10 p-2   bg-zinc-800' >
        <div className='flex gap-10 w-1/2 h-1/2 items-center'>
          <div className='h-1/2 w-1/2 bg-red-400 rounded-md overflow-hidden ' >
          <img ref={Img1Ref} className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
          <div className='h-1/2 w-1/2 bg-green-400 rounded-md overflow-hidden' >
          <img ref={Img2Ref} className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
        </div >
          
      <button onClick={SwapHandler} className='px-3 py-2 bg-blue-600 rounded-md text-white font-semibold ' >Click to Swap</button>

    </div>
    </>
  )
}

export default App
