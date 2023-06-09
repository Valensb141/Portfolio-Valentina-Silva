import './Topbar.scss';
import BtnLinkOrTag from '../btn-links-tags/BtnLinkOrTag';
import { useState } from "react";
import { Link } from 'react-scroll';


function Topbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  
  

    return (
        <>
          <nav className={`topbar ${showMobileMenu ? "topbar__show" : ""}`}>
            <button className="topbar__close" onClick={handleShowMenuClick}>X</button>
            <Link to="test1" spy={true} smooth={true} offset={50} duration={500} />
            <BtnLinkOrTag type='btn btn__secondary btn__secondary__topbar__left' text="Home" to={`/`} />
            <BtnLinkOrTag  type='btn btn__secondary btn__secondary__topbar__middle' text="Diseño y desarrollo de producto" to={`#web-portfolio`}/>
            <BtnLinkOrTag type='btn btn__secondary btn__secondary__topbar__middle' text="Diseño Gráfico" to={`/about`}/>
            <BtnLinkOrTag type='btn btn__secondary btn__secondary__topbar__right' text="Sobre mi" to={`/About`}/>
            <BtnLinkOrTag type='btn btn__primary' text="Contacto" to={`/about`}/>
          </nav>

          <button className="show__menu" onClick={handleShowMenuClick}>X</button>
          <div className="show__menu">
          <BtnLinkOrTag type='btn btn__primary' text="Contacto" to={`/about`}/>
          </div>
        </>      
    )
}

export default Topbar;