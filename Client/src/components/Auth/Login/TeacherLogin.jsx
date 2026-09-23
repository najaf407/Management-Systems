import React from 'react'

const TeacherLogin = () => {
  return (
    <div>
         <form className='flex flex-col mx-4'>
                <input type="text" placeholder='Email' className='border-gray-300 border-2 rounded-xl p-2 bg-[#f2f2f2] hover:border-[#2359de] hover:bg-white focus:bg-white focus:border-[#2359de] focus:outline-none' />
                <input type="text" placeholder='Registered Phone no.' className='my-4 border-gray-300 border-2 rounded-xl p-2 bg-[#f2f2f2] hover:border-[#2359de] hover:bg-white focus:bg-white focus:border-[#2359de] focus:outline-none'/>
                <input type="text" placeholder='Password' className=' border-gray-300 border-2 rounded-xl p-2 bg-[#f2f2f2] hover:border-[#2359de] hover:bg-white focus:bg-white focus:border-[#2359de] focus:outline-none' />
                <p className='text-right mr-4 text-blue-700 cursor-pointer'>Forgot Password?</p>
                <button className='mt-6 rounded-xl p-2 text-white font-medium bg-[#2359de] shadow-2xl hover:opacity-80'>Login</button>
            </form>
    </div>
  )
}

export default TeacherLogin