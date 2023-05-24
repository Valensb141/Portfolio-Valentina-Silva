 import './Btn.scss';
 import {Link} from "react-router-dom";
 

const PrimaryBtn = (props) => {
     return (
         
           <Link className='btn btn__primary' to={props.route}>
        
              {props.text}{props.icon}
        
          </Link>
         
     );
 };

 export default PrimaryBtn;

