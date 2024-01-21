
import './App.css'
import { Button, Container } from '@mui/material'
import { Navbar } from './shared/navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes/Router'

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
