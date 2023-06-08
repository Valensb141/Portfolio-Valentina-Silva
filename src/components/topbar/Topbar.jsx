import './Topbar.scss';
import BtnLinkOrTag from '../btn-links-tags/BtnLinkOrTag';
import { useState } from "react";
import { useRef } from 'react'

function Topbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth'})
  };

    return (
        <>
          <nav className={`topbar ${showMobileMenu ? "topbar__show" : ""}`}>
            <button className="topbar__close" onClick={handleShowMenuClick}>X</button>
            <BtnLinkOrTag type='btn btn__secondary btn__secondary__topbar__left' text="Home" to={`/`}/>
            <BtnLinkOrTag onClic={handleClick} type='btn btn__secondary btn__secondary__topbar__middle' text="Diseño y desarrollo de producto" to={`/About`}/>
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