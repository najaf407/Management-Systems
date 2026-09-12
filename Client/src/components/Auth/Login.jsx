import React, {useState} from 'react'
import StudentLogin from './StudentLogin';
import TeacherLogin from './TeacherLogin';
import '../../Styles/form.css'
import LoginSideImage from '../../Assets/Images/LoginSideImage.png';
import LogoSvg from '../../Assets/Svgs/Logo.svg'

const Login = () => {
    
const [loginType, setLoginType] = useState('student')

    return (
        <>
            <div className='h-screen w-screen flex justify-center items-center'>
                <div className='h-150 w-250 flex bg-white rounded-2xl shadow-2xl overflow-hidden mx-6'>
                    <div className='relative h-full w-1/2 object-cover'>
                        <img src={LoginSideImage} alt="" className='absolute inset-0 h-full w-full object-cover' />
                        <div className='absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/30 to-slate-900/10'></div>
                        <div className='relative z-10 flex flex-col justify-between h-full w-full mx-6'>
                            <img src={LogoSvg} alt="" className='h-30 w-40' />
                            <div>
                                <h1 className='text-white text-4xl font-bold'>Your School, Your Digital Hub</h1>
                                <p className='text-white text-sm mb-10 mt-3'>Everything you need to stay connected, organized, and engaged with your school community—all in one place.</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-5/6 w-1/2 flex flex-col mt-4">
                        <h1 className='font-bold text-4xl mt-7 mx-4'>Welcome to EduPortal</h1>
                        <p className='text-gray-700 text-sm mx-4 mt-2'>Your centralized hub for academic performance, classes, and records.</p>
                            <div className='relative bg-gray-200 w-fit self-center p-1 rounded-full flex items-center my-8'>
                                <div className={`absolute bg-[#2359de] w-24 h-10 rounded-full ${ loginType ==="student" ? "translate-x-0" : "translate-x-24"} transition-transform duration-300 ease-in-out`}></div>
                                <button onClick={() => { setLoginType("student") }} className={`px-5 py-2 font-medium z-10 flex gap-1 ${loginType === "student" ? "text-white" : "text-gray-500"} transition duration-300`}>Student</button>
                                <button onClick={() => { setLoginType("teacher") }} className={`px-5 py-2 font-medium z-10 flex gap-1 ${loginType === "teacher" ? "text-white" : "text-gray-500"} transition duration-300`}>Teacher</button>
                            </div>
                            {loginType === "student" ? <StudentLogin/> : <TeacherLogin/>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;