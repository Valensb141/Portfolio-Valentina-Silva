 import './Btn.scss';
 import {Link} from "react-router-dom";
 

const PortfolioBtn = (props) => {
     return (
         
           <Link className='btn btn__portfolio' to={props.route}>
        
              {props.text}{props.icon}
        
          </Link>
         
     );
 };

 export default PortfolioBtn;

