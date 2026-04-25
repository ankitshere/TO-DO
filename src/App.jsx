import React, { useState } from 'react'
import { nanoid } from 'nanoid'   
import { Delete, CheckCircle2, Circle } from 'lucide-react'                                                                    

const App = () => {
  const [task, settask] = useState([
    {id:1, title:"ha hai title", completed: false}
  ]);
  const [title, settitle] = useState("")


const submithandler=(e)=>{
  e.preventDefault()
console.log(title)
const newtask={
  id:nanoid(),
  title:title,
};

let copiedtask=[...task];
copiedtask.push(newtask);
settask(copiedtask);
settitle("")
} 
 const rendertask=task.map((e,idx)=>{
  return  <li key={idx} className='m-2 p-2 bg-zinc-700 rounded-lg relative '  >{e.title} <button className='ml-15 text-white    self-align-end max-w-max' onClick={() => {
    const updatedTasks = task.filter(task => task.id !== e.id);
    settask(updatedTasks);
  }}><Delete /></button></li> 
  

})





  return (
<div className="bg-yellow-700 min-h-screen px-4 sm:px-10 py-5">
  
  <h1 className="text-white text-3xl sm:text-5xl md:text-6xl text-center">
    Create Tasks
  </h1>

  <div className="w-full bg-white/30 backdrop-blur-sm mt-5 border border-white rounded-2xl flex flex-col md:flex-row p-4 sm:p-6 gap-4">
    
    {/* LEFT */}
    <div className="w-full md:w-2/3 flex flex-col gap-5 p-3 sm:p-5">
      <form onSubmit={submithandler}>
        <label className="text-xl sm:text-2xl text-white">Task</label>
        
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          placeholder="task title"
          className="w-full p-2 rounded-lg bg-white/50 mt-2"
        />

        <button className="bg-zinc-500 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg mt-3 transition-colors w-full sm:w-auto">
          Create
        </button>
      </form>
    </div>

    {/* RIGHT */}
    <div className="w-full md:w-1/3 bg-white/10 rounded-lg p-4 sm:p-5 flex flex-col gap-4">
      <h1 className="text-white text-xl sm:text-2xl">Pending Tasks</h1>

      <ol className="list-decimal pl-5 text-white bg-zinc-600 rounded-lg p-3 max-h-64 overflow-y-auto">
        {rendertask}
      </ol>
    </div>

  </div>
</div>
  )
}

export default App