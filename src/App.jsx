//ESTA ES LA WEB (PORTAL PRINCIPAL)

//Importación de rutas
import { Link, Route, Routes } from 'react-router-dom'

//importación de estilos generales
import './globalStyle/GlobalStyle.scss'

//Importación de views
import Home from './views/Home/Home.jsx'
import About from './views/about/About.jsx'
import Portfolio from './views/Portfolio.jsx'
import Topbar from './components/topbar/Topbar.jsx'

function App() {

  return (
    <>
    <header>
      <Topbar/>  
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </main>
    </>
  )
}

export default App
