 import './Btn.scss';
 import {Link} from "react-router-dom";
 

const PortfolioBtn = (props) => {
     return (
         
           <Link className='btn btn__portfolio' to={`/about`}>
        
              {props.text}{props.icon}
        
          </Link>
         
     );
 };

 export default PortfolioBtn;

