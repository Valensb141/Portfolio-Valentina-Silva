 import './Btns-links-tags.scss';
//  import {Link} from "react-router-dom";
 

const BtnLinkOrTag = (props) => {
     return (
         
           <div className={props.type} to={props.route}>
        
              {props.text}{props.icon}
        
          </div>
         
     );
 };

 export default BtnLinkOrTag;

