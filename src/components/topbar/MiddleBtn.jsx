import './Topbar.scss';
import {Link} from "react-router-dom";


const MiddleBtn = (props) => {
    return (
        
          <Link className='nav__btn nav__btn__middle' to={props.route}>
       
             {props.text}
       
         </Link>
        
    );
};

export default MiddleBtn;
