import React from 'react'
import { CalendarCheck, ArrowRight, BookOpenCheck, FileText, ShieldCheck } from 'lucide-react'

const StudentOverView = () => {
    return (
        <div className='h-screen w-full'>
            <div className='mt-10 mx-7'>
                <h1 className='text-4xl font-semibold'>Hello, Abdul Ahad!</h1>
                <p className='my-4 text-gray-700'>Here's what's happening with your studies.</p>
            </div>
            <div className='h-70 w-300 mt-8 mx-7 flex gap-6'>
                <div className='w-1/4 h-full bg-[#d9e4ff]/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-xl'>
                    <div className='w-full h-full flex flex-col justify-evenly ml-4'>
                        <CalendarCheck className='text-white size-12 bg-[#3f6fe7] p-2 rounded-[50%]' />
                        <h1 className='text-xl font-medium'>Attendance</h1>
                        <h2 className='text-5xl font-medium'>92%</h2>
                        <h4 className='text-sm text-gray-700'>Present Days : 23/25</h4>
                        <h6 className='text-blue-600 text-[16px] font-medium flex gap-2 items-center'>View Details<ArrowRight className='size-4 mt-1' /></h6>
                    </div>
                </div>
                <div className='w-1/4 h-full bg-[#ecd9fc]/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-xl'>
                    <div className='w-full h-full flex flex-col justify-evenly ml-4'>
                        <BookOpenCheck className='text-white size-12 bg-purple-500 p-2 rounded-[50%]' />
                        <h1 className='text-xl font-medium'>Tests & Exams</h1>
                        <h2 className='text-3xl font-medium'>3 Upcomming</h2>
                        <h4 className='text-sm text-gray-700'>76% Performance</h4>
                        <h6 className='text-purple-500 text-[16px] font-medium flex gap-2 items-center'>View Details<ArrowRight className='size-4 mt-1' /></h6>
                    </div>
                </div>
                <div className='w-1/4 h-full bg-[#e7ffe6]/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-xl'>
                    <div className='w-full h-full flex flex-col justify-evenly ml-4'>
                        <FileText className='text-white size-12 bg-green-500 p-2 rounded-[50%]' />
                        <h1 className='text-xl font-medium'>Assignments</h1>
                        <h2 className='text-3xl font-medium'>2 Pending</h2>
                        <h4 className='text-sm text-gray-700'>This Week 2 Completed</h4>
                        <h6 className='text-green-500 text-[16px] font-medium flex gap-2 items-center'>View Details<ArrowRight className='size-4 mt-1' /></h6>
                    </div>
                </div>
                <div className='w-1/4 h-full bg-[#ffd9d9]/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-xl'>
                    <div className='w-full h-full flex flex-col justify-evenly ml-4'>
                        <ShieldCheck className='text-white size-12 bg-[#fc6621] p-2 rounded-[50%]' />
                        <h1 className='text-xl font-medium'>Discipline</h1>
                        <h2 className='text-3xl font-medium'>Excellent</h2>
                        <h4 className='text-sm text-gray-700'>No Issues</h4>
                        <h6 className='text-[#fc6621] text-[16px] font-medium flex gap-2 items-center'>View Details<ArrowRight className='size-4 mt-1' /></h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentOverView