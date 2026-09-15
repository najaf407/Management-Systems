import React from 'react'
import Login from './components/Auth/Login'
import Sidebar from './components/Layouts/Sidebar'
import StudentOverView from './Pages/Student/StudentOverView'
import Temperory from './Pages/Student/Temperory'
import TeacherOverView from './Pages/Teacher/TeacherOverView'


const App = () => {
  return (
    <div className="h-screen flex overflow-hidden">
       <Login/>
      
    </div>
  )
}

export default App