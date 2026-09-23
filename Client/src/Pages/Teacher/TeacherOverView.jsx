import React from 'react'
import { CalendarCheck, ArrowRight, BookOpenCheck, FileText, ShieldCheck, Clock, GraduationCap, BookOpen, MessageCircle, UsersRound } from 'lucide-react'


const TeacherOverView = () => {
    return (
        <div className='w-full max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-0 my-6 sm:my-10'>

            {/* Greeting */}
            <div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900'>Hello, Sir Alex!</h1>
                <p className='mt-2 mb-6 sm:mb-8 text-gray-500 text-sm sm:text-base'>Here's what's happening with your studies.</p>
            </div>

            {/* Stat cards */}
            <div className='min-w-0 w-full mb-6 sm:mb-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {[
                    { icon: CalendarCheck, label: "Classes Conducted", value: "95%", sub: "Conducted Classes : 55/60", bg: "bg-blue-50", iconColor: "text-blue-600" },
                    { icon: BookOpenCheck, label: "Test Evaluation / Exam Invigilation", value: "1 Upcomming", sub: "Gravtational Potentail (physics) 9th-B", bg: "bg-violet-50", iconColor: "text-violet-600" },
                    { icon: FileText, label: "Assignments Review", value: "2 Pending", sub: "3/5 Assignment Checked", bg: "bg-emerald-50", iconColor: "text-emerald-600" },
                ].map((card, i) => (
                    <div key={i} className={`${card.bg} border border-black/5 rounded-xl p-5 hover:shadow-md transition-shadow`}>
                        <div className={`inline-flex ${card.iconColor} bg-white size-10 rounded-lg items-center justify-center shadow-sm`}>
                            <card.icon className='size-5' strokeWidth={2} />
                        </div>
                        <h4 className='text-gray-600 text-sm mt-4'>{card.label}</h4>
                        <h2 className='text-2xl sm:text-3xl font-semibold text-gray-900 mt-1'>{card.value}</h2>
                        <p className='text-xs text-gray-500 mt-1'>{card.sub}</p>
                        <p className={`${card.iconColor} text-sm font-medium flex gap-1 items-center mt-4`}>
                            View Details<ArrowRight className='size-3.5' />
                        </p>
                    </div>
                ))}
            </div>

            {/* Upcoming schedule */}
            <div className='mb-6 sm:mb-8 w-full bg-emerald-50 border border-black/5 rounded-xl'>
                <div className='p-4 sm:p-6'>
                    <div className="flex items-center justify-between mb-5">
                        <h1 className='text-lg sm:text-xl font-semibold text-gray-900 flex gap-2.5 items-center'>
                            <div className="bg-emerald-600 text-white size-9 rounded-full flex items-center justify-center shrink-0">
                                <Clock className='size-5' strokeWidth={2} />
                            </div>
                            Upcoming Schedule
                        </h1>
                        <button className='hidden sm:flex text-sm text-emerald-700 font-medium gap-1 items-center'>
                            View All <ArrowRight className='size-3.5' />
                        </button>
                    </div>

                    <div className="hidden sm:grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 px-4 pb-2 text-emerald-700 text-xs font-semibold uppercase tracking-wide">
                        <span>Date</span>
                        <span>Subject</span>
                        <span>Activity</span>
                        <span>Class</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        {[
                            { date: "12/12/2024", subject: "Maths", activity: "Test", cls: "10-A" },
                            { date: "12/12/2024", subject: "English", activity: "Assignment", cls: "9-C" },
                            { date: "13/12/2024", subject: "English", activity: "Examiner", cls: "Room-3" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white/80 hover:bg-white transition-colors rounded-lg
                                   p-3.5 sm:px-4 sm:py-3
                                   flex items-center justify-between
                                   sm:grid sm:grid-cols-[1fr_1fr_1fr_1fr] sm:gap-4"
                            >
                                <div className="sm:hidden">
                                    <p className="font-medium text-gray-900 text-sm">{item.subject}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{item.activity} · {item.cls}</p>
                                </div>

                                <span className="hidden sm:block text-sm text-gray-600">{item.date}</span>
                                <span className="hidden sm:block text-sm font-medium text-gray-900">{item.subject}</span>
                                <span className="hidden sm:block text-sm text-gray-600">{item.activity}</span>
                                <span className="hidden sm:block text-sm text-gray-600">{item.cls}</span>

                                <p className="sm:hidden text-xs font-medium text-emerald-700 shrink-0 ml-3">{item.date}</p>
                            </div>
                        ))}
                    </div>

                    <button className='sm:hidden text-sm text-emerald-700 font-medium flex gap-1 items-center mt-4 mx-auto'>
                        View Full Schedule <ArrowRight className='size-3.5' />
                    </button>
                </div>
            </div>

            {/* Students */}
            <div className='mb-6 sm:mb-8 w-full bg-blue-50 border border-black/5 rounded-xl'>
                <div className='p-4 sm:p-6'>
                    <div className="flex items-center justify-between mb-5">
                        <h1 className='text-lg sm:text-xl font-semibold text-gray-900 flex gap-2.5 items-center'>
                            <div className="bg-[#2359de] text-white size-9 rounded-full flex items-center justify-center shrink-0">
                                <UsersRound className='size-5' strokeWidth={2} />
                            </div>
                            Students
                        </h1>
                        <button className='hidden sm:flex text-sm text-[#2359de] font-medium gap-1 items-center'>
                            View All <ArrowRight className='size-3.5' />
                        </button>
                    </div>

                    <div className="hidden sm:grid grid-cols-[1fr_2fr_1fr_1fr] gap-4 px-4 pb-2 text-[#2359de] text-xs font-semibold uppercase tracking-wide">
                        <span>Roll No.</span>
                        <span>Name</span>
                        <span>Attendance</span>
                        <span>Academic Progress</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        {[
                            { roll: "88756", name: "Ali Raza", attendance: "17/22", progress: "90%" },
                            { roll: "80664", name: "Farhan Yousaf", attendance: "16/22", progress: "79%" },
                            { roll: "80647", name: "Ali Usman", attendance: "20/22", progress: "93%" },
                        ].map((s, i) => (
                            <div
                                key={i}
                                className="bg-white/80 hover:bg-white transition-colors rounded-lg
                                   p-3.5 sm:px-4 sm:py-3
                                   flex items-center justify-between
                                   sm:grid sm:grid-cols-[1fr_2fr_1fr_1fr] sm:gap-4"
                            >
                                <div className="sm:hidden">
                                    <p className="font-medium text-gray-900 text-sm">{s.name}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">Roll {s.roll} · Attendance {s.attendance}</p>
                                </div>

                                <span className="hidden sm:block text-sm text-gray-600">{s.roll}</span>
                                <span className="hidden sm:block text-sm font-medium text-gray-900">{s.name}</span>
                                <span className="hidden sm:block text-sm text-gray-600">{s.attendance}</span>
                                <span className="hidden sm:block text-sm text-gray-600">{s.progress}</span>

                                <p className="sm:hidden text-xs font-medium text-[#2359de] shrink-0 ml-3">{s.progress}</p>
                            </div>
                        ))}
                    </div>

                    <button className='sm:hidden text-sm text-[#2359de] font-medium flex gap-1 items-center mt-4 mx-auto'>
                        View All <ArrowRight className='size-3.5' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TeacherOverView