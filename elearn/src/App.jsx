import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NumberStrip from './components/NumberStrip'
import ClickSpark  from './components/animations/ClickSpark'
import Categories from './components/Categories'
import Courses from './components/Courses'
import Instructor from './components/Instructor'
import Comments from './components/Comments'

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
        <Navbar/>
            <Hero/>
            <NumberStrip/>
            <Categories/>
            <Courses/>
            <Instructor/>
            <Comments/>
      </ClickSpark>    
    </>
  )
}

export default App
