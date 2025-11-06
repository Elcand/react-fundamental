import './App.css'
import Homepage from './pages/Index';
import {GlobalContext} from './context';

function App() {
  const user = {
    username: 'ikel',
  };
  
  return (
    <GlobalContext.Provider value={user}>
      <div className='App'>
        <Homepage />
      </div>
    </GlobalContext.Provider>
  )
}

export default App;
