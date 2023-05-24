import './Topbar.scss';
import {Link} from "react-router-dom";


const RightBtn = (props) => {
    return (
        
          <Link className='nav__btn nav__btn__right' to={props.route}>
       
             {props.text}
       
         </Link>
        
    );
};

export default RightBtn;