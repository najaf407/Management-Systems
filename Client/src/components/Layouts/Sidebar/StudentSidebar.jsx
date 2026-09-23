import React from 'react'
import { Clock, CalendarCheck, BookOpenCheck, FileText, ChartColumnIncreasing, GraduationCap } from 'lucide-react'


const StudentSidebar = () => {
  return (
    <>
      <div className="flex gap-3 mb-4 items-center ml-2">
        <span className="text-xs text-white uppercase">
          Academic
        </span>

        <span className="h-[0.5px] flex-1 bg-white"></span>
      </div>
      <p className='text-white font-medium text-lg flex my-4 gap-2 items-center py-1 px-3 rounded-lg'>
        <ChartColumnIncreasing />
        Overview</p>
      <p className='text-white font-medium text-lg my-4 flex gap-2 items-center py-1 px-3 rounded-lg'>
        <FileText />
        Assignments</p>
      <p className='text-white font-medium text-lg flex gap-2 items-center py-1 px-3 rounded-lg'>
        <BookOpenCheck />
        Tests & Exams</p>
      <p className='text-white font-medium text-lg my-4 flex gap-2 items-center py-1 px-3 rounded-lg'>
        <CalendarCheck />
        Attendance</p>
      <p className='text-white font-medium text-lg flex gap-2 items-center py-1 px-3 rounded-lg'>
        <GraduationCap />
        Teachers</p>
      <p className='text-white font-medium text-lg my-4 flex gap-2 items-center py-1 px-3 rounded-lg'>
        <Clock />
        Shedule</p>
    </>
  )
}


export default StudentSidebar