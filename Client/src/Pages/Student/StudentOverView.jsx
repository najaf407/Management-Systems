import React from 'react'
import { CalendarCheck, ArrowRight, BookOpenCheck, FileText, ShieldCheck, Clock, GraduationCap, BookOpen, MessageCircle, UserRound } from 'lucide-react'

const StudentOverView = () => {
    return (
       <div className='w-full max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-0'>

    {/* Greeting */}
    <div className='mt-6 sm:mt-10'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900'>Hello, Abdul Ahad!</h1>
        <p className='mt-2 mb-6 sm:mb-8 text-gray-500 text-sm sm:text-base'>Here's what's happening with your studies.</p>
    </div>

    {/* Stat cards */}
    <div className='min-w-0 w-full mb-6 sm:mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {[
            { icon: CalendarCheck, label: "Attendance", value: "92%", sub: "Present Days: 23/25", bg: "bg-blue-50", iconColor: "text-blue-600" },
            { icon: BookOpenCheck, label: "Tests & Exams", value: "3 Upcoming", sub: "76% Performance", bg: "bg-violet-50", iconColor: "text-violet-600" },
            { icon: FileText, label: "Assignments", value: "2 Pending", sub: "This Week: 2 Completed", bg: "bg-emerald-50", iconColor: "text-emerald-600" },
            { icon: ShieldCheck, label: "Discipline", value: "Excellent", sub: "No Issues", bg: "bg-orange-50", iconColor: "text-orange-600" },
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
                <span>Teacher</span>
            </div>

            <div className="flex flex-col gap-2">
                {[
                    { date: "12/12/2024", subject: "Maths", activity: "Test", teacher: "Mr. John" },
                    { date: "12/12/2024", subject: "English", activity: "Assignment", teacher: "Mr. Alex" },
                    { date: "13/12/2024", subject: "English", activity: "Re Paper", teacher: "IT Office" },
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
                            <p className="text-xs text-gray-500 mt-0.5">{item.activity} · {item.teacher}</p>
                        </div>

                        <span className="hidden sm:block text-sm text-gray-600">{item.date}</span>
                        <span className="hidden sm:block text-sm font-medium text-gray-900">{item.subject}</span>
                        <span className="hidden sm:block text-sm text-gray-600">{item.activity}</span>
                        <span className="hidden sm:block text-sm text-gray-600">{item.teacher}</span>

                        <p className="sm:hidden text-xs font-medium text-emerald-700 shrink-0 ml-3">{item.date}</p>
                    </div>
                ))}
            </div>

            <button className='sm:hidden text-sm text-emerald-700 font-medium flex gap-1 items-center mt-4 mx-auto'>
                View Full Schedule <ArrowRight className='size-3.5' />
            </button>
        </div>
    </div>

    {/* Teachers */}
    <div className='mb-6 sm:mb-8 w-full bg-blue-50 border border-black/5 rounded-xl'>
        <div className='p-4 sm:p-6'>
            <h1 className='text-lg sm:text-xl font-semibold text-gray-900 flex gap-2.5 items-center mb-5'>
                <div className="bg-[#2359de] text-white size-9 rounded-full flex items-center justify-center shrink-0">
                    <GraduationCap className='size-5' strokeWidth={2} />
                </div>
                Teachers
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4'>
                {[
                    { name: "Mr. John", subject: "Mathematics / Stats", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VlYn2zD-DTDtmWkoWkADPxtU0VvbiCF_bxlln-hOiw&s=10" },
                    { name: "Mr. Alex", subject: "English", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoWp5mOOFqWCTNd69vTSh4TDcFThleFbAlGKFCHb21w&s=10" },
                    { name: "Madam Sarah", subject: "Chemistry", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOO8Bsa6_OfoXCDOiAbE9HEiD_oQJXxbDf1uhoI4Xlww&s=10" },
                ].map((teacher, i) => (
                    <div
                        key={i}
                        className="w-full bg-white border border-black/5 rounded-xl hover:shadow-md transition-shadow
                                   p-3 sm:p-4 flex items-center gap-3 sm:block"
                    >
                        <div className="h-11 w-11 sm:h-14 sm:w-14 rounded-full overflow-hidden shrink-0 ring-2 ring-blue-100">
                            <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1 min-w-0 sm:mt-3">
                            <h2 className="text-sm sm:text-base font-semibold text-gray-900 truncate">{teacher.name}</h2>
                            <h4 className="mt-0.5 flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm">
                                <BookOpen className="hidden sm:block w-3.5 h-3.5 shrink-0 text-[#2359de]" strokeWidth={2} />
                                <span className="truncate">{teacher.subject}</span>
                            </h4>
                        </div>

                        <div className="flex sm:hidden gap-1.5 shrink-0">
                            <button className="p-2 bg-[#2359de] text-white rounded-lg">
                                <MessageCircle className="w-3.5 h-3.5" />
                            </button>
                            <button className="p-2 border border-gray-300 text-gray-600 rounded-lg">
                                <UserRound className="w-3.5 h-3.5" />
                            </button>
                        </div>

                        <div className="hidden sm:flex gap-2 mt-4">
                            <button className="flex-1 flex items-center justify-center gap-1.5 bg-[#2359de] text-white px-2 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap">
                                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                                Message
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-1.5 border border-gray-300 text-gray-600 px-2 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap">
                                <UserRound className="w-3.5 h-3.5 shrink-0" />
                                Profile
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>
    )
}

export default StudentOverView