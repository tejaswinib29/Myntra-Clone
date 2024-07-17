
import './App.css'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'

function App() {

  const isuserLoggedIn = true
  
  return (
    <div>
      {
        isuserLoggedIn ?
        < HomePage /> : < LoginPage />
      }
    
      </div>
        
  )
}

export default App
