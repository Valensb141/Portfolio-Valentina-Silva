import BtnLinkOrTag from '../../btn-links-tags/BtnLinkOrTag';
import IconCircle from '../../icon-circle/IconCircle';
import './TextImgBlock.scss'
import IconArrowGreen from '../../icons/IconArrowGreen';


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
                        <IconCircle icon={props.circleIcon}/>
                        <IconCircle icon={props.circleIcon}/>
                        <IconCircle icon={props.circleIcon}/>
                        <IconCircle icon={props.circleIcon}/>
                    </div>

                </div>

                <div className="project__btn">
                    <BtnLinkOrTag type='btn btn__portfolio' text="Ver proyecto" icon={<IconArrowGreen />}/>
                </div>
            </div>
        
    );
};

export default TextBlock;