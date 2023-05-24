//ESTA ES LA WEB (PORTAL PRINCIPAL)

//Importación de rutas
import { Link, Route, Routes } from 'react-router-dom'

//importación de estilos generales
import './globalStyle/GlobalStyle.scss'

//Importación de views
import Home from './views/Home'
import About from './views/About'
import Portfolio from './views/Portfolio'
import Topbar from './components/topbar/Topbar'

function App() {

  return (
    <>
    <header>
      
      <Topbar/>
      
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </main>
    </>
  )
}

export default App
