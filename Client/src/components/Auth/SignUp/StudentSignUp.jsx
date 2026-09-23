import React from 'react'

const StudentSignUp = () => {
  return (
    <div>
        <form className='flex flex-col mx-4'>
                <input type="text" placeholder='Full Name' className='mt-8 border-gray-300 border-2 rounded-xl p-2 bg-[#f2f2f2] hover:border-[#2359de] hover:bg-white focus:bg-white focus:border-[#2359de] focus:outline-none' />
                <input type="text" placeholder='Father Name' className='my-4 border-gray-300 border-2 rounded-xl p-2 bg-[#f2f2f2] hover:border-[#2359de] hover:bg-white focus:bg-white focus:border-[#2359de] focus:outline-none' />
                <input type="text" placeholder='Class' className='mb-4 border-gray-300 border-2 rounded-xl p-2 bg-[#f2f2f2] hover:border-[#2359de] hover:bg-white focus:bg-white focus:border-[#2359de] focus:outline-none'/>
                <input type="text" placeholder='Roll Number' className=' border-gray-300 border-2 rounded-xl p-2 bg-[#f2f2f2] hover:border-[#2359de] hover:bg-white focus:bg-white focus:border-[#2359de] focus:outline-none' />
                <input type="password" placeholder='Set Password' className='mt-4 border-gray-300 border-2 rounded-xl p-2 bg-[#f2f2f2] hover:border-[#2359de] hover:bg-white focus:bg-white focus:border-[#2359de] focus:outline-none' />
                <button className='mt-6 rounded-xl p-2 text-white font-medium bg-[#2359de] shadow-2xl hover:opacity-80'>Create Account</button>
            </form>
    </div>
  )
}

export default StudentSignUp