import PrimaryBtn from '../btn/PrimaryBtn';
import MiddleBtn from './MiddleBtn';
import LeftBtn from './LeftBtn';
import RightBtn from './RightBtn';
import './Topbar.scss';

function Topbar() {
    return (
        <>
          <nav className='topbar'>
            <LeftBtn text="Diseño y desarrollo de producto" route={`/about`}/>
            <MiddleBtn text="Diseño Gráfico" route={`/portfolio`}/>
            <RightBtn text="Sobre mi" route={`/about`}/>
            <PrimaryBtn text="Contactar"/>
          </nav>
        </>
    )
}

export default Topbar;