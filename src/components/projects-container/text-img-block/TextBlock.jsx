import BtnLinkOrTag from '../../btn-links-tags/BtnLinkOrTag';
import IconCircle from '../../icon-circle/IconCircle';
import './TextImgBlock.scss'
import IconArrowGreen from '../../icons/IconArrowGreen';
import IconArrow from '../../icons/IconArrow';


const TextBlock = (props) => {
    return (
        
            <div className='project__content'>
                <div className="project__description">
                    <h3>
                        {props.title}
                    </h3>

                    <p>
                        {props.description}
                    </p>

                    <div className='project__icons'>
                        <IconCircle icon={props.icon} showIcon={props.showIcon}/>
                        <IconCircle icon={props.icon1} showIcon={props.showIcon}/>
                        <IconCircle icon={props.icon2} showIcon={props.showIcon}/>
                        
                        
                    </div>

                </div>

                <div className="project__btn">
                    <BtnLinkOrTag type='btn btn__portfolio' text="Ver proyecto" icon={<IconArrowGreen />} to={props.to}/>
                </div>
            </div>
        
    );
};

export default TextBlock;