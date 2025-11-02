import React from 'react'
import Footer from '../components/Footer'
import task from '../assets/lunol2d.png'
import { useState } from 'react'

function Home() {
  const [secretcode, setSecretcode] = useState('')

  const handletaskclick = () => {

    if (secretcode === '') {
      alert('Please input your secret code')
      return;
    }
    if (secretcode.toLowerCase() === 'sau') {
      window.location.href = '/showall'
    }
    else { 
      alert('Wrong secret code')
    }
  }



  return (
    <>
      <div className="w-8/12 border border-amber-500 shadow-md rounded p-6 mx-auto mt-20 flex flex-col items-center">
        <img src={task} alt="task" className='w-40 mb-4' />
        <h1 className='text-2xl font-bold text-shadow-orange-600'>Task App</h1>
        <input type="text" placeholder='Secret Code' value={secretcode} onChange={(e) => setSecretcode(e.target.value)} className='p-2 border border-b-fuchsia-600 mt-6 rounded w-100' />
        <button className="bg-indigo-600 hover:bg-sky-600 text-white cursor-pointer px-5 py-4 rounded mt-6 transition duration-200 ease-in-out" onClick={handletaskclick}>Sign in</button>

      </div>
      <Footer />
    </>
  )
}

export default Home