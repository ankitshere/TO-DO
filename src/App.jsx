import React, { useState } from 'react'

const App = () => {

  const [data, setdata] = useState([
    { id: 1, title: '' },
   
  ])



  const [Tasktitle, setTasktitle] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()

}

const handleInputChange = (e) => {
  setTasktitle(e.target.value)
}                          

  return (
    <div className='bg-yellow-600 w-screen h-screen px-10 py-5'>
      <h1 className='text-white text-6xl text-center'>Create Tasks</h1>
      <div className='w-full  bg-white/30 backdrop-blur-sm  h-8/10 mt-2 bordered border-white rounded-2xl flex flex-row  p-5 gap-1.5 justify-between '>
        <div className='bg-blue-600 w-7/10 flex flex-col gap-5 p-5 rounded-lg'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="taskInput" className='text-2xl text-white '>Task</label>
            <input
     
              onChange={handleInputChange}
              value={Tasktitle}
            
              id="taskInput" type="text" placeholder='task tittle ' className='w-full p-2 rounded-lg bg-white/50' />
            <button   
              
              className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Create</button>
          </form>
          <p className='text-white text-lg mt-3 p-2 bg-white/20 rounded-lg'>{Tasktitle}</p>
        </div>
        <div className='bg-red-600 w-3/10 rounded-lg p-5 flex flex-col gap-5'>
          <h1 className='text-white text-2xl '>Panding Tasks</h1>
          <div className='bg-white/50 rounded-lg p-3 flex flex-col gap-2'>
            {data.map((task) => (
              task.title && (
                <div key={task.id} className='bg-white/80 p-2 rounded-lg'>
                  <p>{task.title}</p>
                </div>
              )
            ))}      
          </div>
        </div>
      </div>
    </div>
  )
}

export default App