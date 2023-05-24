 import './Btn.scss';
 import {Link} from "react-router-dom";
 

const TertiaryBtn = (props) => {
     return (
         
           <Link className='btn btn__tertiary' to={`/about`}>
        
              {props.text}{props.icon}
        
          </Link>
         
     );
 };

 export default TertiaryBtn;

