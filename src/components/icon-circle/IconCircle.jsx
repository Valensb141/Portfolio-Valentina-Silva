import './IconCircle.scss'


const IconCircle = (props) => {
    return (
       
        <div className={props.showIcon}>
            {props.icon}
        </div>
        
    );
};

export default IconCircle;