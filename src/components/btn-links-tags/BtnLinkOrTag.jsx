import { Children } from 'react';
import './Btns-links-tags.scss';
import {Link} from "react-router-dom";
 

const BtnLinkOrTag = (props) => {
     return (
         
           <Link  className={props.type} to={props.to} target={props.target} >
        
              {props.text}{props.icon}
        
          </Link>
         
         
     );
 };

 export default BtnLinkOrTag;

