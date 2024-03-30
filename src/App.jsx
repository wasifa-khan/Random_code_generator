import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
 

  return (
    <>
    <div className='flex justify-center items-center flex-col' id='bg'>
      <h1 className='my-10 font-bold text-4xl'>Random Code Generator</h1>
      <Card/>
      <h1 className='my-8 text-2xl'>Made By Wasfa Khan</h1>
    </div>

    </>
  )
}

export default App
