import React from 'react'
import Login from './components/Auth/Login'
import Sidebar from './components/Layouts/Sidebar'
import StudentOverView from './Pages/Student/StudentOverView'
import Temperory from './Pages/Student/Temperory'


const App = () => {
  return (
    <div className="h-screen flex overflow-hidden">

      <Sidebar />

      <main className="flex-1 min-w-0 overflow-y-auto">
        <StudentOverView/>
      </main>
      

    </div>
  )
}

export default App