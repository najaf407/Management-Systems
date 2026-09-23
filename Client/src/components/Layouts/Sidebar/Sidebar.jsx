import React from 'react'
import { Banknote, Settings, LogOut, Menu, X } from 'lucide-react'
import StudentSidebar from './StudentSidebar'
import LogoSvg from '../../Assets/Svgs/Logo.svg'
import TeacherSidebar from './TeacherSideBar'
import {useState} from 'react'

const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState('false');

    return (
        <>
            <button
                onClick={() => setIsSidebarOpen(true)}
                className='lg:hidden p-2 text-[#2359de]'
            >
                <Menu size={28} />
            </button>

            {isSidebarOpen && (
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className='fixed inset-0 bg-black/40 z-40 lg:hidden'
                ></div>
            )}

            <div className={`
         fixed lg:static top-0 left-0 h-screen z-50
         max-w-75 w-64 sm:w-72 lg:w-full
         flex overflow-y-auto hide-scrollbar
        transition-transform duration-300 ease-in-out
         ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
        `}>
                <div className='h-fit min-h-full w-full bg-gradient-to-b from-[#7c9aef] via-[#5f83ed] to-[#3f6fe7]'>
                    <div className='flex justify-end pt-4 pr-4 lg:hidden'>
                        <button onClick={() => setIsSidebarOpen(false)} className='text-white'>
                            <X size={26} />
                        </button>
                    </div>

                    <div className='pt-2 lg:pt-8'>
                        <img src={LogoSvg} alt="" className='h-16 w-64 lg:h-20 lg:w-85 pl-4' />
                    </div>

                    <div className='pl-5 pr-6 mt-6'>
                        <StudentSidebar />

                        <div className="flex gap-3 items-center mb-4 ml-2">
                            <span className="text-xs text-white uppercase">Other</span>
                            <span className="h-[0.5px] flex-1 bg-white"></span>
                        </div>

                        <p className='text-white font-medium text-base lg:text-lg my-4 flex gap-2 items-center py-1 px-3 rounded-lg'>
                            <Banknote />
                            Payments
                        </p>
                        <p className='text-white font-medium text-base lg:text-lg flex gap-2 items-center py-1 px-3 rounded-lg'>
                            <Settings />
                            Settings
                        </p>
                        <p className='text-white font-medium text-base lg:text-lg my-4 flex gap-2 items-center py-1 px-3 rounded-lg'>
                            <LogOut />
                            Logout
                        </p>

                        <div className="flex gap-3 items-center">
                            <span className="h-[0.5px] flex-1 bg-white"></span>
                        </div>

                        <div className='flex gap-3 items-center mt-6 pb-6'>
                            <div className='border-4 border-white rounded-[50%] overflow-hidden shrink-0'>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtweFXDyUlujHniG78jcoPatftwjAGJw_i6evqPG5jg&s"
                                    alt=""
                                    className='h-12 w-12 lg:h-15 lg:w-15'
                                />
                            </div>
                            <div>
                                <h2 className='text-white font-bold text-lg lg:text-xl'>Abdul Ahad</h2>
                                <p className='text-[12px] text-white'>Student profile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar