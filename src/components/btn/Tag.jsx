 import './Btn.scss';
//  import {Link} from "react-router-dom";
 

const Tag = (props) => {
     return (
         
           <div className='btn btn__tag' to={props.route}>
        
              {props.text}{props.icon}
        
          </div>
         
     );
 };

 export default Tag;

