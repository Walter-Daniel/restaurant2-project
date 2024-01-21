
import './App.css'
import { Button, Container } from '@mui/material'
import { Navbar } from './shared/navbar/Navbar'

function App() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Button variant='contained'>Hola mundex</Button>
    </Container>
  )
}

export default App
