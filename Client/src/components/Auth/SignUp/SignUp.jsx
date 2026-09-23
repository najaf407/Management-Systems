import React from 'react'
import LogoSvg from '../../../Assets/Svgs/Logo.svg'
import SignUpSideImage from '../../../Assets/Images/SignUpSideImage.png'
import StudentSignUp from './StudentSignUp'

const SignUp = () => {
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
                            Add a Student
                        </h1>
                        <p className='text-gray-700 text-sm mt-2 md:mx-4 text-center md:text-left'>
                            Set up an account for your student and help them get started with their school portal.
                        </p>
                        <StudentSignUp/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp