import React from 'react'
import Footer from '../components/Footer'
import taskluno from '../assets/lunol2d.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../libs/supabaseClient.js'

function AddTask() {
  return (
    <>
      <div className="w-8/12 border border-amber-500 shadow-md rounded p-6 mx-auto mt-20 flex flex-col items-center">
        <img src={taskluno} alt="task" className='w-20 mb-4' />
        <h1 className="text-2xl font-bold text-fuchsia-400 text-center">
          Task APP
          <br />
          -- Add New Task --
        </h1>
        <form className='w-full'>
          <div>
            <label className='mt-10'>Task Name</label>
            <input type="text" placeholder='Input Task Name' className='w-full border border-gray-400 p-2 rounded' />
          </div>
          <div className='mt-5'>
            <label className='mt-10'>Task Detail</label>
            <input type="text" placeholder='Input Task Detail' className='w-full border border-gray-400 p-2 rounded' />
          </div>
          <div className='mt-10'>
            <label className='mt-10'>Task Picture</label>
            <input type="file" placeholder='Input Task Picture' className='hidden' id="ImageSE" accept='image/' />
            <label htmlFor="ImageSE" className='w-full bg-cyan-400 text-white p-2 rounded cursor-pointer ml-5'>Select Picture</label>
          </div>
          <div className='mt-10'>
            <button className='w-full bg-sky-400 hover:bg-emerald-500 p-2 text-white rounded cursor-pointer text-xl'>Save/AddItem</button>
          </div>
          <div className='mt-10 text-center'>
            <Link to={'/showall'} className='text-sky-400 hover:text-emerald-500 cursor-pointer text-2xl'>Back to All Task</Link>
          </div>
          
        </form>
      </div>
      <Footer />
    </>
  )
}

export default AddTask