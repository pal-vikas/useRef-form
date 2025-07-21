import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const [value, setValue] = useState("")
  const nameInput = useRef("")
   const emailInput = useRef()
    const ageInput = useRef()
     const genderInput = useRef()

     function submitHandler(e)
     {
          e.preventDefault();
              const formData = {
              name: nameInput.current.value,
              email: emailInput.current.value,
              age: ageInput.current.value,
              gender: genderInput.current.value,
            };

            console.log("Form Data : ", formData);
            setValue(formData);
     }

  return (
    <>
      <div className="w-[600px] border mx-auto mt-20 flex  box-border rounded-xl  p-5">

      <form action="" onSubmit={submitHandler} className='flex flex-col box-border rounded-xl gap-5 p-5'>
        <input type="text" ref={nameInput} className='border p-2 rounded-xl w-[200px] ' placeholder='Enter the Name' />
        <input type="email" ref={emailInput} className='border p-2 rounded-xl w-[200px] ' placeholder='Enter the Email' />
        <input type="number" ref={ageInput} placeholder='Age' className='border p-2 rounded-xl w-[200px] ' />
        <select ref={genderInput} className='border p-3 rounded-xl w-[200px]' placeholder="Select Gender">
          <option value="">--Select a Gender--</option>
          <option value="Male">Male</option>
          <option value="Femail">Female</option>
        </select>
      <button className='bg-black w-[100px] text-white px-4 py-2 rounded-2xl cursor-pointer'>Submit</button>
      </form>

        <div className=' flex flex-col gap-4 mt-10'>
              <h3>Submitted Data:</h3>
              <p>Name: {value.name}</p>
              <p>Email: {value.email}</p>
              <p>Age: {value.age}</p>
              <p>Gender: {value.gender}</p>
        </div>
        
      </div>
    </>
  )
}

export default App
