import './Btns-links-tags.scss';
import {Link} from "react-router-dom";
 

const BtnLinkOrTag = (props) => {
     return (
         
           <Link className={props.type} to={props.route}>
        
              {props.text}{props.icon}
        
          </Link>
         
     );
 };

 export default BtnLinkOrTag;

