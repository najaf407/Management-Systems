import React from 'react'
import { CalendarCheck, ArrowRight, BookOpenCheck, FileText, ShieldCheck, Clock, GraduationCap, BookOpen, MessageCircle, UsersRound } from 'lucide-react'


const TeacherOverView = () => {
    return (
        <div className='w-290 mx-auto my-10'>
            <div className=''>
                <h1 className='text-4xl font-semibold'>Hello, Sir Alex!</h1>
                <p className='my-4 text-gray-700'>Here's what's happening with your studies.</p>
            </div>
            <div className='min-w-0 w-full my-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='h-70 bg-[#d9e4ff]/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-xl'>
                    <div className='w-full h-full flex flex-col justify-evenly ml-4'>
                        <CalendarCheck className='text-white size-12 bg-[#3f6fe7] p-2 rounded-[50%]' />
                        <h1 className='text-xl font-medium'>Classes Conducted</h1>
                        <h2 className='text-5xl font-medium'>95%</h2>
                        <h4 className='text-sm text-gray-700'>Conducted Classes : 55/60</h4>
                        <h6 className='text-blue-600 text-[16px] font-medium flex gap-2 items-center'>View Details<ArrowRight className='size-4 mt-1' /></h6>
                    </div>
                </div>
                <div className='h-full bg-[#ecd9fc]/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-xl'>
                    <div className='w-full h-full flex flex-col justify-evenly ml-4'>
                        <BookOpenCheck className='text-white size-12 bg-purple-500 p-2 rounded-[50%]' />
                        <h1 className='text-xl font-medium'>Test Evaluation / Exam Invigilation</h1>
                        <h2 className='text-3xl font-medium'>1 Upcomming</h2>
                        <h4 className='text-sm text-gray-700'>Gravtational Potentail (physics) 9th-B</h4>
                        <h6 className='text-purple-500 text-[16px] font-medium flex gap-2 items-center'>View Details<ArrowRight className='size-4 mt-1' /></h6>
                    </div>
                </div>
                <div className='h-full bg-[#e7ffe6]/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-xl'>
                    <div className='w-full h-full flex flex-col justify-evenly ml-4'>
                        <FileText className='text-white size-12 bg-green-500 p-2 rounded-[50%]' />
                        <h1 className='text-xl font-medium'>Assignments Review</h1>
                        <h2 className='text-3xl font-medium'>2 Pending</h2>
                        <h4 className='text-sm text-gray-700'>3/5 Assignment Checked</h4>
                        <h6 className='text-green-500 text-[16px] font-medium flex gap-2 items-center'>View Details<ArrowRight className='size-4 mt-1' /></h6>
                    </div>
                </div>
            </div>
            <div className='h-fit my-8 min-w-40 w-full bg-[#72fcca]/60 backdrop-blur-lg border border-white/30 shadow-sm rounded-xl'>
                <div className='p-6'>
                    <h1 className='text-3xl font-semibold flex gap-2 items-center mb-4'><Clock className='text-white size-12 bg-[#00d688] p-2 rounded-[50%]' />Upcomming Shedule</h1>
                    <table className="w-full text-left border-collapse" table='1'>

                        <thead>
                            <tr className="text-[#2359de]">
                                <th className="px-4 py-2 font-medium">Date</th>
                                <th className="px-4 py-2 font-medium">Subject</th>
                                <th className="px-4 py-2 font-medium">Activity</th>
                                <th className="px-4 py-2 font-medium">Class</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <td className="px-4 py-2">12/12/2024</td>
                                <td className="px-4 py-2">Maths</td>
                                <td className="px-4 py-2">Test</td>
                                <td className="px-4 py-2">10-A</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2">12/12/2024</td>
                                <td className="px-4 py-2">English</td>
                                <td className="px-4 py-2">Assignment</td>
                                <td className="px-4 py-2">9-C</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2">13/12/2024</td>
                                <td className="px-4 py-2">English</td>
                                <td className="px-4 py-2">Examiner</td>
                                <td className="px-4 py-2">Room-3</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className='text-[16px] text-blue-500 cursor-pointer flex gap-1 items-center w-fit px-3 py-1 ml-auto mr-4 mt-4 '>View Full Shedule <ArrowRight className='size-4 mt-1' /></button>
                </div>
            </div>
            <div className='h-fit my-8 min-w-40 w-full bg-[#d9e4ff]/80 backdrop-blur-lg border border-white/30 shadow-sm rounded-xl'>
                <div className='p-5'>
                    <h1 className='text-3xl font-semibold flex gap-2 items-center mb-4'><UsersRound className='text-white size-12 bg-[#3f6fe7] p-2 rounded-[50%]' />Students</h1>
                    <table className="w-full text-left border-collapse" table='1'>
                        <thead>
                            <tr className="text-[#2359de]">
                                <th className="px-4 py-2 font-medium">Roll No.</th>
                                <th className="px-4 py-2 font-medium">Name</th>
                                <th className="px-4 py-2 font-medium">Attendance</th>
                                <th className="px-4 py-2 font-medium">Academic Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="">
                                <td className="px-4 py-2">88756</td>
                                <td className="px-4 py-2">Ali Raza</td>
                                <td className="px-4 py-2">17/22</td>
                                <td className="px-4 py-2">90%</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2">80664</td>
                                <td className="px-4 py-2">Farhan Yousaf</td>
                                <td className="px-4 py-2">16/22</td>
                                <td className="px-4 py-2">79%</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2">80647</td>
                                <td className="px-4 py-2">Ali Usman</td>
                                <td className="px-4 py-2">20/22</td>
                                <td className="px-4 py-2">93%</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className='text-[16px] text-blue-500 cursor-pointer flex gap-1 items-center w-fit px-3 py-1 ml-auto mr-4 mt-4 '>View All<ArrowRight className='size-4 mt-1' /></button>
                </div>
            </div>
        </div>
    )
}

export default TeacherOverView