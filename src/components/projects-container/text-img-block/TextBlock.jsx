import PortfolioBtn from '../../btn/PortfolioBtn';
import IconCircle from '../../icon-circle/IconCircle';
import './TextImgBlock.scss'
import IconArrow from '../../icons/IconArrow';


const TextBlock = (props) => {
    return (
        
            <div className='project__content'>
                <div className="project__description">
                    <h2>
                        {props.title}
                    </h2>

                    <p>
                        {props.description}
                    </p>

                    <div className='project__icons'>
                        <IconCircle icon={props.circleIcon}/>
                        <IconCircle icon={props.circleIcon}/>
                        <IconCircle icon={props.circleIcon}/>
                        <IconCircle icon={props.circleIcon}/>
                    </div>

                </div>

                <div className="project__btn">
                    <PortfolioBtn text="Ver proyecto" icon={<IconArrow />}/>
                </div>
            </div>
        
    );
};

export default TextBlock;