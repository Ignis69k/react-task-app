import React from 'react'
import Footer from '../components/Footer'
import task from '../assets/lunol2d.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../libs/supabaseClient.js'

function ShowAlltask() {
  const [tasks, setTasks] = useState([])
  //run everytime when page is rendered 
  useEffect(() => {
    //Pull data from supabase
    try {
      const fetchData = async () => {
        const { data, error } = await supabase
          .from('nczDB1') //Database name
          .select("*") //Select all columns
          .order('created_at', { ascending: false })
        if (error) {
          alert("Failed to fetch data from supabase")
          throw error
        } else {
          setTasks(data)
        }
      }
      fetchData()
    } catch (error) {
      alert("Failed to fetch data from supabase")
      console.log("Failed to fetch data from supabase", error)
    }
  }, []
  )

  return (
    <>
      <div className="w-8/12 border border-amber-500 shadow-md rounded p-6 mx-auto mt-20 flex flex-col items-center">
        <img src={task} alt="task" className='w-20 mb-4' />
        <h1 className="text-2xl font-bold text-fuchsia-400 text-center">
          Task APP
          <br />
          -- All Task --
        </h1>

        {/* Button to go to /add page */}

        <div className="w-full flex justify-end mt-6">
          <Link to="/add" className="bg-indigo-600 hover:bg-sky-600 text-white cursor-pointer p-3 rounded transition duration-200 ease-in-out">Add Task</Link>
        </div>

        {/* Supabse Section */}
        <div className="w-full mt-8">
          <table className="w-full border border-emerald-600 text-md">
            <thead>
              <tr>
                <th className="p-2 border-teal-600">Image</th>
                <th className="p-2 border-teal-600">Task Name</th>
                <th className="p-2 border-teal-600">Task Detail</th>
                <th className="p-2 border-teal-600">Status</th>
                <th className="p-2 border-teal-600">Create date</th>
                <th className="p-2 border-teal-600">Lasted edit</th>
                <th className="p-2 border-teal-600">Manage</th>
              </tr>
            </thead>
            <tbody>
              {
                tasks.map((task) => (
                  <tr key={task.id}>
                    <th className="p-2 border-teal-600"></th>
                    <th className="p-2 border-teal-600">{task.Title}</th>
                    <th className="p-2 border-teal-600">{task.Detail}</th>
                    <th className="p-2 border-teal-600">{task.completed}</th>
                    <th className="p-2 border-teal-600">{task.created_at}</th>
                    <th className="p-2 border-teal-600">{task.lasted_update}</th>
                    <th className="p-2 border-teal-600">Manage</th>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ShowAlltask