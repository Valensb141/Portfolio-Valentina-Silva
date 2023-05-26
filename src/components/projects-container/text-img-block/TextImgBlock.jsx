import './TextImgBlock.scss'
import TextBlock from './TextBlock';
import ImgBlock from './ImgBlock';


const TextImgBlock = (props) => {
    return (
        <div className={props.direction}>
            <ImgBlock  src={props.src} alt={props.alt}/>
            <TextBlock title={props.title} description={props.description} circleIcon={props.icon}/>
        </div>

);
};

export default TextImgBlock;