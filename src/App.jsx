//ESTA ES LA WEB (PORTAL PRINCIPAL)

//Importación de rutas
import { Link, Route, Routes, useLocation } from 'react-router-dom';

//importación de estilos generales
import './globalStyle/GlobalStyle.scss';

//Importación de views
import Home from './views/home/Home.jsx';
import About from './views/about/About.jsx';
import Portfolio from './views/Portfolio.jsx';
import Project from './views/project/Project';
import Topbar from './components/topbar/Topbar.jsx';
import ProjectDesignAvenue from './views/project-design-avenue/Project';
import ProjectWeatherApp from './views/project-weather-app/Project';
import ProjectToDoApp from './views/project-to-do/Project';
import { useEffect } from 'react';


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header>
        <Topbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/project' element={<Project />} />
          <Route path='/project-to-do' element={<ProjectToDoApp />} />
          <Route path='/project-weather-app' element={<ProjectWeatherApp />} />
          <Route path='/project-design-avenue' element={<ProjectDesignAvenue />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
