import './Topbar.scss';
import {Link} from "react-router-dom";


const LeftBtn = (props) => {
    return (
        
          <Link className='nav__btn nav__btn__left' to={props.route}>
       
             {props.text}
       
         </Link>
        
    );
};

export default LeftBtn;
