import React from 'react'
import Login from './components/Auth/Login'
import Sidebar from './components/Layouts/Sidebar'
import StudentOverView from './Pages/Student/StudentOverView'


const App = () => {
  return (
   <div className='h-screen flex overflow-hidden'>
     <Sidebar/>
      <StudentOverView/>
    </div>
  )
}

export default App