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
          <BtnLinkOrTag type='btn btn__secondary btn__secondary__topbar__left' text="Home" route={`/about`}/>
          <BtnLinkOrTag type='btn btn__secondary btn__secondary__topbar__middle' text="Diseño y desarrollo de producto" route={`/about`}/>
          <BtnLinkOrTag type='btn btn__secondary btn__secondary__topbar__middle' text="Diseño Gráfico" route={`/about`}/>
          <BtnLinkOrTag type='btn btn__secondary btn__secondary__topbar__right' text="Sobre mi" route={`/about`}/>
          <BtnLinkOrTag type='btn btn__primary' text="Contacto" route={`/about`}/>

            {/* <LeftBtn text="Diseño y desarrollo de producto" route={`/about`}/>
            <MiddleBtn text="Diseño Gráfico" route={`/portfolio`}/>
            <RightBtn text="Sobre mi" route={`/about`}/>
            <PrimaryBtn text="Contactar"/> */}
          </nav>
        </>
    )
}

export default Topbar;