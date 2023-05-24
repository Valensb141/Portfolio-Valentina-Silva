import PrimaryBtn from '../btn/PrimaryBtn';
import MiddleBtn from './MiddleBtn';
import LeftBtn from './LeftBtn';
import RightBtn from './RightBtn';
import './Topbar.scss';

function Topbar() {
    return (
        <>
          <nav className='topbar'>
            <LeftBtn text="Sobre mi"/>
            <MiddleBtn text="Portfolio Diseño Gráfico"/>
            <RightBtn text="Sobre mi"/>
            <PrimaryBtn text="Contactar"/>
          </nav>
        </>
    )
}

export default Topbar;