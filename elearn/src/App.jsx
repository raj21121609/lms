import './App.css'
import Navbar from './components/page1/Navbar'
import Hero from './components/page1/Hero'
import NumberStrip from './components/page1/NumberStrip'
import ClickSpark  from './components/animations/ClickSpark'
import Categories from './components/page1/Categories'
import Courses from './components/page1/Courses'
import Instructor from './components/page1/Instructor'
import Comments from './components/page1/Comments'
import Become from './components/page1/Become'
import Become2 from './components/page1/Become2'
import Page1 from './components/pages/page1'

function App() {
  
  return (
    <>
      <ClickSpark
        sparkColor='#4A90E2'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Page1/>

      </ClickSpark>    
    </>
  )
}

export default App
