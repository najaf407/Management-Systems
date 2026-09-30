import React from 'react'
import LogoSvg from '../../../Assets/Svgs/Logo.svg'
import SignUpSideImage from '../../../Assets/Images/SignUpSideImage.png'
import { useState } from 'react'
import axios from 'axios'

const StudentSignUp = () => {

    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    const [FormData, setFormData] = useState({
        Name: '',
        Class: '',
        RollNo: '',
        Password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        });
        setError('');
        setMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!FormData.Name || !FormData.Class || !FormData.RollNo || !FormData.Password){
           return setError('! Please fill all input fields')
        }

        setError('');

        const classRegex = /^(7th|8th|9th|10th) [A-D]$/;

        if(!classRegex.test(FormData.Class)){
            return setError('! Plz enter valid class')
        }

        if(FormData.RollNo.length !== 6){
            return setError("! RollNo should have 6 digits")
        }

        if(FormData.Password.length < 8){
            return setError("! Password should be at least 8 characters long")
        }

        try {
            const response = await axios.post('http://localhost:3000/api/students/RegisterStudent', FormData);

            if (response.status >= 200 & response.status <= 300) {
                console.log("Student Registered", response.data)
                setMessage(response.data.message)
            } 
        }
        catch (error) {
            console.log("Unable to Register Student", error)
            setError('! Student already exists')
        }
        setFormData({
            Name: '',
            FatherName: '',
            Class: '',
            RollNo: '',
            Password: ''
        })
    }

    return (
        <div>
            <div className='min-h-screen w-full flex justify-center items-center p-4 sm:p-6'>
                <div className='w-full max-w-6xl min-h-[85vh] md:h-[600px] flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden'>

                    {/* Side image - hidden on mobile, visible from md up */}
                    <div className='relative hidden md:block md:h-full md:w-1/2'>
                        <img src={SignUpSideImage} alt="" className='absolute inset-0 h-full w-full object-cover' />
                        <div className='absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/30 to-slate-900/10'></div>
                        <div className='relative z-10 flex flex-col justify-between h-full w-full px-6 py-6'>
                            <img src={LogoSvg} alt="" className='h-16 w-40 lg:h-24 lg:w-60' />
                            <div>
                                <h1 className='text-white text-2xl lg:text-4xl font-bold'>Empowering Every Student</h1>
                                <p className='text-white text-sm mb-6 lg:mb-10 mt-3'>Create student accounts and give them easy access to the tools, resources, and opportunities they need to succeed.</p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile-only compact logo header */}
                    <div className='flex md:hidden items-center justify-center pt-6'>
                        <img src={LogoSvg} alt="" className='h-14 w-auto' />
                    </div>

                    {/* Form panel */}
                    <div className="flex-1 md:w-1/2 flex flex-col px-4 sm:px-6 md:px-0 md:mt-4 overflow-y-auto">
                        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mt-4 md:mt-7 md:mx-4 text-center md:text-left'>
                            SignUp As Student
                        </h1>
                        <p className='text-gray-700 text-sm mt-4 md:mx-4 text-center md:text-left'>
                            Set up an account for your student and help them get started with their school portal.
                        </p>
                        <form className='flex flex-col mx-4' onSubmit={handleSubmit}>
                            <input name='Name' onChange={handleChange} value={FormData.Name} type="text" placeholder='Full Name' className='mt-8 border-gray-300 border-2 rounded-xl p-2 bg-[#f2f2f2] hover:border-[#2359de] hover:bg-white focus:bg-white focus:border-[#2359de] focus:outline-none' />
                            <input name='Class' onChange={handleChange} value={FormData.Class} type="text" placeholder='Class' className='my-4 border-gray-300 border-2 rounded-xl p-2 bg-[#f2f2f2] hover:border-[#2359de] hover:bg-white focus:bg-white focus:border-[#2359de] focus:outline-none' />
                            <input name='RollNo' onChange={handleChange} value={FormData.RollNo} type="text" placeholder='Roll Number' className=' border-gray-300 border-2 rounded-xl p-2 bg-[#f2f2f2] hover:border-[#2359de] hover:bg-white focus:bg-white focus:border-[#2359de] focus:outline-none' />
                            <input name='Password' onChange={handleChange} value={FormData.Password} type="password" placeholder='Set Password' className='mt-4 border-gray-300 border-2 rounded-xl p-2 bg-[#f2f2f2] hover:border-[#2359de] hover:bg-white focus:bg-white focus:border-[#2359de] focus:outline-none' />
                            {error && <p className="mt-4 text-red-700">{error}</p>}
                            {message && <p className="mt-4 text-green-700">{message}</p>}
                            <button className='mt-4 mb-12 rounded-xl p-2 text-white font-medium bg-[#2359de] shadow-2xl hover:opacity-80'>Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentSignUp;