import React from 'react'
import { Banknote, Settings, LogOut } from 'lucide-react'
import StudentSidebar from './StudentSidebar'
import LogoSvg from '../../Assets/Svgs/Logo.svg'
import TeacherSideBar from './TeacherSideBar'

const Sidebar = () => {
    return (
        <>
            <div className='w-2/11 flex overflow-y-auto hide-scrollbar'>
                <div className='h-fit w-full bg-gradient-to-b from-[#5f83ed] via-[#3f6fe7] to-[#2359de]'>
                    <div className='pt-8'><img src={LogoSvg} alt="" className='h-20 w-85 pl-4' /></div>
                    <div className='pl-5 pr-6 mt-6'>
                        <StudentSidebar />
                        <TeacherSideBar/>
                        <div className="flex gap-3 items-center mb-4 ml-2">
                            <span className="text-xs text-white uppercase">
                                Other
                            </span>
                            <span className="h-[0.5px] flex-1 bg-white"></span>
                        </div>
                        <p className='text-white font-medium text-lg my-4 flex gap-2 items-center py-1 px-3 rounded-lg'>
                           <Banknote />
                            Payments</p>
                        <p className='text-white font-medium text-lg flex gap-2 items-center py-1 px-3 rounded-lg'>
                            <Settings />
                            Settings</p>
                        <p className='text-white font-medium text-lg my-4 flex gap-2 items-center py-1 px-3 rounded-lg'>
                            <LogOut />
                            Logout</p>
                        <div className="flex gap-3 items-center">
                            <span className="h-[0.5px] flex-1 bg-white"></span>
                        </div>

                        <div className='flex gap-3 items-center mt-6'>
                            <div className='border-4 border-white rounded-[50%] overflow-hidden'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtweFXDyUlujHniG78jcoPatftwjAGJw_i6evqPG5jg&s" alt="" className='h-15 w-15' />
                            </div>
                            <div>
                                <h2 className='text-white font-bold text-xl'>Abdul Ahad</h2>
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