import './App.css'
import ClickSpark  from './components/animations/ClickSpark'
import Page2 from './components/pages/Page2'
import Page3 from './components/pages/Page3'
import Page1 from './components/pages/page1'
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
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

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
        <Page14/>
      </ClickSpark>    
    </>
  )
}

export default App
