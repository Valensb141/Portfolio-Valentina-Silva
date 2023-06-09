import './TextImgBlock.scss'
import TextBlock from './TextBlock';
import ImgBlock from './ImgBlock';


const TextImgBlock = (props) => {
    return (
        <div className={props.direction}>
            <ImgBlock  src={props.src} alt={props.alt}/>
            <TextBlock title={props.title} description={props.description} icon={props.icon} icon1={props.icon1} icon2={props.icon2} icon3={props.icon3} showIcon={props.showIcon} to={props.to}/>
        </div>
);
};

export default TextImgBlock;