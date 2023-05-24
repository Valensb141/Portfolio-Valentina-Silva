 import './Btn.scss';
 import {Link} from "react-router-dom";
 

const SecondaryBtn = (props) => {
     return (
         
           <Link className='btn btn__secondary' to={`/about`}>
        
              {props.text}{props.icon}
        
          </Link>
         
     );
 };

 export default SecondaryBtn;

