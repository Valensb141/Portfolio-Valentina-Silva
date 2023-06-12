import './Topbar.scss';
import BtnLinkOrTag from '../btn-links-tags/BtnLinkOrTag';
import { useState } from 'react';
import Hamburguesa from '../icons/Hamburguesa';
function Topbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <nav className={`topbar ${showMobileMenu ? 'topbar__show' : ''}`}>
        <button className='topbar__close' onClick={handleShowMenuClick}>
          X
        </button>
        <BtnLinkOrTag type='btn btn__secondary btn__secondary__topbar__left' text='Home' to={'/#home'} />
        <BtnLinkOrTag
          type='btn btn__secondary btn__secondary__topbar__middle'
          text='UX/UI Design - Frontend Development'
          to='/#web-portfolio'
        />
        <BtnLinkOrTag type='btn btn__secondary btn__secondary__topbar__middle' text='Graphic Design' to='/#graphic-portfolio' />
        <BtnLinkOrTag type='btn btn__secondary btn__secondary__topbar__right' text='Sobre mi' to={`/About`} />
        <BtnLinkOrTag type='btn btn__primary' text='Contacto' to={`/#contact`} />
      </nav>

      <button className='show__menu hamburger__menu' onClick={handleShowMenuClick}>
        <Hamburguesa />
      </button>
      <div className='show__menu'>
        <BtnLinkOrTag type='btn btn__primary' text='Contact' to={`/#contact`} />
      </div>
    </>
  );
}

export default Topbar;