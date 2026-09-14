import React from 'react'
import { CalendarCheck, ArrowRight, BookOpenCheck, FileText, ShieldCheck, Clock, GraduationCap, BookOpen, MessageCircle, UserRound } from 'lucide-react'

const StudentOverView = () => {
    return (
        <div className='w-290 mx-auto'>
            <div className='mt-10'>
                <h1 className='text-4xl font-semibold'>Hello, Abdul Ahad!</h1>
                <p className='my-4 text-gray-700'>Here's what's happening with your studies.</p>
            </div>
            <div className='min-w-0 w-full my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='h-70 bg-[#d9e4ff]/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-xl'>
                    <div className='w-full h-full flex flex-col justify-evenly ml-4'>
                        <CalendarCheck className='text-white size-12 bg-[#3f6fe7] p-2 rounded-[50%]' />
                        <h1 className='text-xl font-medium'>Attendance</h1>
                        <h2 className='text-5xl font-medium'>92%</h2>
                        <h4 className='text-sm text-gray-700'>Present Days : 23/25</h4>
                        <h6 className='text-blue-600 text-[16px] font-medium flex gap-2 items-center'>View Details<ArrowRight className='size-4 mt-1' /></h6>
                    </div>
                </div>
                <div className='h-full bg-[#ecd9fc]/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-xl'>
                    <div className='w-full h-full flex flex-col justify-evenly ml-4'>
                        <BookOpenCheck className='text-white size-12 bg-purple-500 p-2 rounded-[50%]' />
                        <h1 className='text-xl font-medium'>Tests & Exams</h1>
                        <h2 className='text-3xl font-medium'>3 Upcomming</h2>
                        <h4 className='text-sm text-gray-700'>76% Performance</h4>
                        <h6 className='text-purple-500 text-[16px] font-medium flex gap-2 items-center'>View Details<ArrowRight className='size-4 mt-1' /></h6>
                    </div>
                </div>
                <div className='h-full bg-[#e7ffe6]/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-xl'>
                    <div className='w-full h-full flex flex-col justify-evenly ml-4'>
                        <FileText className='text-white size-12 bg-green-500 p-2 rounded-[50%]' />
                        <h1 className='text-xl font-medium'>Assignments</h1>
                        <h2 className='text-3xl font-medium'>2 Pending</h2>
                        <h4 className='text-sm text-gray-700'>This Week 2 Completed</h4>
                        <h6 className='text-green-500 text-[16px] font-medium flex gap-2 items-center'>View Details<ArrowRight className='size-4 mt-1' /></h6>
                    </div>
                </div>
                <div className='h-full bg-[#ffd9d9]/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-xl'>
                    <div className='w-full h-full flex flex-col justify-evenly ml-4'>
                        <ShieldCheck className='text-white size-12 bg-[#fc6621] p-2 rounded-[50%]' />
                        <h1 className='text-xl font-medium'>Discipline</h1>
                        <h2 className='text-3xl font-medium'>Excellent</h2>
                        <h4 className='text-sm text-gray-700'>No Issues</h4>
                        <h6 className='text-[#fc6621] text-[16px] font-medium flex gap-2 items-center'>View Details<ArrowRight className='size-4 mt-1' /></h6>
                    </div>
                </div>
            </div>
            <div className='h-fit my-8 min-w-40 w-full bg-[#72fcca]/60 backdrop-blur-lg border border-white/30 shadow-sm rounded-xl'>
                <div className='p-6'>
                    <h1 className='text-3xl font-semibold flex gap-2 items-center mb-4'><Clock className='text-white size-12 bg-[#00d688] p-2 rounded-[50%]' />Upcomming Shedule</h1>
                    <table className="w-full text-left border-collapse" table='1'>

                        <thead>
                            <tr className="text-[#2359de] bg-[#5cffc3]">
                                <th className="px-4 py-2 font-medium">Date</th>
                                <th className="px-4 py-2 font-medium">Subject</th>
                                <th className="px-4 py-2 font-medium">Activity</th>
                                <th className="px-4 py-2 font-medium">Teacher</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="">
                                <td className="px-4 py-2">12/12/2024</td>
                                <td className="px-4 py-2">Maths</td>
                                <td className="px-4 py-2">Test</td>
                                <td className="px-4 py-2">Mr. John</td>
                            </tr>

                            <tr className="">
                                <td className="px-4 py-2">12/12/2024</td>
                                <td className="px-4 py-2">English</td>
                                <td className="px-4 py-2">Assignment</td>
                                <td className="px-4 py-2">Mr. Alex</td>
                            </tr>

                            <tr className="">
                                <td className="px-4 py-2">13/12/2024</td>
                                <td className="px-4 py-2">English</td>
                                <td className="px-4 py-2">Re Paper</td>
                                <td className="px-4 py-2">IT Office</td>
                            </tr>
                        </tbody>

                    </table>
                    <button className='text-[16px] text-blue-500 cursor-pointer flex gap-1 items-center w-fit px-3 py-1 ml-auto mr-4 mt-4 '>View Full Shedule <ArrowRight className='size-4 mt-1' /></button>
                </div>
            </div>
            <div className='h-fit my-8 min-w-40 w-full bg-[#d9e4ff]/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-xl'>
                <div className='p-5'>
                    <h1 className='text-3xl font-semibold flex gap-2 items-center mb-4'><GraduationCap className='text-white size-12 bg-[#3f6fe7] p-2 rounded-[50%]' />Teachers</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <div className="h-fit max-w-sm bg-white border border-gray-200 shadow-sm rounded-xl p-5">
                            <div>
                                <div className="h-20 w-20 rounded-full border-2 border-[#3f6fe7] overflow-hidden">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VlYn2zD-DTDtmWkoWkADPxtU0VvbiCF_bxlln-hOiw&s=10"
                                        alt="Mr. John"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h2 className="mt-4 text-2xl font-semibold text-gray-900">
                                    Mr. John
                                </h2>
                                <h4 className="mt-2 flex items-center gap-2 text-gray-500 text-base">
                                    <BookOpen className="w-5 h-5 text-[#3f6fe7]" />
                                    Mathematics / Stats
                                </h4>
                                <div className="w-full h-px bg-gray-200 my-5"></div>
                                <div className="flex gap-2">
                                    <button className="flex-1 flex items-center justify-center gap-2 bg-[#3f6fe7] text-white px-4 py-2.5 rounded-lg text-sm font-medium">
                                        <MessageCircle className="w-4 h-4" />
                                        Message
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 border border-[#3f6fe7] text-[#3f6fe7] px-4 py-2.5 rounded-lg text-sm font-medium ">
                                        <UserRound className="w-4 h-4" />
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="h-fit max-w-sm bg-white border border-gray-200 shadow-sm rounded-xl p-5">
                            <div>
                                <div className="h-20 w-20 rounded-full border-2 border-[#3f6fe7] overflow-hidden">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoWp5mOOFqWCTNd69vTSh4TDcFThleFbAlGKFCHb21w&s=10"
                                        alt="Mr. John"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h2 className="mt-4 text-2xl font-semibold text-gray-900">
                                    Mr. Alex
                                </h2>
                                <h4 className="mt-2 flex items-center gap-2 text-gray-500 text-base">
                                    <BookOpen className="w-5 h-5 text-[#3f6fe7]" />
                                    English
                                </h4>
                                <div className="w-full h-px bg-gray-200 my-5"></div>
                                <div className="flex gap-2">
                                    <button className="flex-1 flex items-center justify-center gap-2 bg-[#3f6fe7] text-white px-4 py-2.5 rounded-lg text-sm font-medium">
                                        <MessageCircle className="w-4 h-4" />
                                        Message
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 border border-[#3f6fe7] text-[#3f6fe7] px-4 py-2.5 rounded-lg text-sm font-medium ">
                                        <UserRound className="w-4 h-4" />
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="h-fit max-w-sm bg-white border border-gray-200 shadow-sm rounded-xl p-5">
                            <div>
                                <div className="h-20 w-20 rounded-full border-2 border-[#3f6fe7] overflow-hidden">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOO8Bsa6_OfoXCDOiAbE9HEiD_oQJXxbDf1uhoI4Xlww&s=10"
                                        alt="Mr. John"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h2 className="mt-4 text-2xl font-semibold text-gray-900">
                                    Madam Sarah
                                </h2>
                                <h4 className="mt-2 flex items-center gap-2 text-gray-500 text-base">
                                    <BookOpen className="w-5 h-5 text-[#3f6fe7]" />
                                    Chemistry
                                </h4>
                                <div className="w-full h-px bg-gray-200 my-5"></div>
                                <div className="flex gap-2">
                                    <button className="flex-1 flex items-center justify-center gap-2 bg-[#3f6fe7] text-white px-4 py-2.5 rounded-lg text-sm font-medium">
                                        <MessageCircle className="w-4 h-4" />
                                        Message
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 border border-[#3f6fe7] text-[#3f6fe7] px-4 py-2.5 rounded-lg text-sm font-medium ">
                                        <UserRound className="w-4 h-4" />
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentOverView