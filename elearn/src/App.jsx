import './App.css'
import ClickSpark  from './components/animations/ClickSpark'
import Page2 from './components/pages/Page2'
import Page3 from './components/pages/Page3'
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
        <Page2/>
      </ClickSpark>    
    </>
  )
}

export default App
