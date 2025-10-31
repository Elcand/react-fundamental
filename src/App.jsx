import './App.css'
import Article from './components/Article'

function App() {
  return (
    <div className='App'>
      <Article name="IKEL" titles={["Tutor Pence", "Tutor Zing Zing"]}/>
      <br />
      <Article  name="Yanto" titles={["Tutor dirot", "Tutor pristel"]}/>
    </div>
  )
}

export default App
