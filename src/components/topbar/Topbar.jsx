// import PrimaryBtn from '../btn/PrimaryBtn';
// import MiddleBtn from './MiddleBtn';
// import LeftBtn from './LeftBtn';
// import RightBtn from './RightBtn';
import './Topbar.scss';
import BtnLinkOrTag from '../btn-links-tags/BtnLinkOrTag';

function Topbar() {
    return (
        <>
          <nav className='topbar'>
          <BtnLinkOrTag type='btn btn__secondary btn__secondary__topbar__left' text="Home" to={`/`}/>
          <BtnLinkOrTag type='btn btn__secondary btn__secondary__topbar__middle' text="Diseño y desarrollo de producto" to={`/About`}/>
          <BtnLinkOrTag type='btn btn__secondary btn__secondary__topbar__middle' text="Diseño Gráfico" to={`/about`}/>
          <BtnLinkOrTag type='btn btn__secondary btn__secondary__topbar__right' text="Sobre mi" to={`/About`}/>
          <BtnLinkOrTag type='btn btn__primary' text="Contacto" to={`/about`}/>

          </nav>
        </>
    )
}

export default Topbar;