import React from 'react'
import Login from './components/Auth/Login/Login'
import Sidebar from './components/Layouts/Sidebar/Sidebar'
import StudentOverView from './Pages/Student/StudentOverView'
import TeacherOverView from './Pages/Teacher/TeacherOverView'
import StudentSignUp from './components/Auth/SignUp/StudentSignUp'
import TeacherSignUp from './components/Auth/SignUp/TeacherSignUp'


const App = () => {
  return (
    <>
     <TeacherSignUp/>
     <StudentSignUp/>
  
     <Login/>

     {/* <div className="h-screen flex overflow-hidden"> */}

      
     {/* <Sidebar /> */}

       {/* <main className="flex-1 min-w-0 overflow-y-auto"> */}
         {/* <StudentOverView/> */}
         {/* <TeacherOverView/> */}
       {/* </main> */}
      

    {/*  </div> */}
    </>
  )
}

export default App