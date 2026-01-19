import './App.css'
import Page2 from './components/pages/Page2'
import Page3 from './components/pages/Page3'
import Page1 from './components/pages/Page1'
import Page4 from './components/pages/Page4'
import Page5 from './components/pages/Page5'
import Page6 from './components/pages/Page6'
import Page7 from './components/pages/Page7'
import Page8 from './components/pages/Page8'
import Page9 from './components/pages/Page9'
import Page10 from './components/pages/Page10'
import Page11 from './components/pages/Page11'
import Page12 from './components/pages/Page12'
import Page13 from './components/pages/Page13'
import Page14 from './components/pages/Page14'
import Layout from './components/admin/pages/Layout'
import {Routes, Route } from "react-router-dom";
import Dashboard from './components/admin/pages/Dashboard'
import Courses from './components/admin/pages/Courses'
import Revenue from './components/admin/pages/Revenue'
import Communication from './components/admin/pages/Communication'
import Settings from './components/admin/pages/Settings'
import Error_404 from'./components/reusables/Error_404.jsx'
import Page0 from './components/pages/Page0.jsx'
import PageS from './components/pages/PageS.jsx'
import { Toaster } from "react-hot-toast";
import CourseAddition from './components/admin/dashboard/CourseAddition.jsx'

function App() {

  
  return (
    <>
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path='/login' element={<Page0/>} />
          <Route path='/signup' element={<PageS/>}/>
          <Route path='/' element={<Page1/>}/>
          <Route path='/page2' element={<Page2/>}/>
          <Route path='/page3' element={<Page3/>}/>
          <Route path='/page4' element={<Page4/>}/>
          <Route path='/page5' element={<Page5/>}/>
          <Route path='/page6' element={<Page6/>}/>
          <Route path='/page7' element={<Page7/>}/>
          <Route path='/page8' element={<Page8/>}/>
          <Route path='/page9' element={<Page9/>}/>
          <Route path='/page10' element={<Page10/>}/>
          <Route path='/page11' element={<Page11/>}/>
          <Route path='/page12' element={<Page12/>}/>
          <Route path='/page13' element={<Page13/>}/>
          <Route path='/page14' element={<Page14/>}/>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="dashboard/course_add" element={<CourseAddition/>}/>
            <Route path="courses" element={<Courses />} />
            <Route path="revenue" element={<Revenue />} />
            <Route path="communication" element={<Communication />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Error_404 />} />
        </Routes> 
    </>
  )
}

export default App
