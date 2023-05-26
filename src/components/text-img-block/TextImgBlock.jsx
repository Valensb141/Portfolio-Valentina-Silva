import './TextImgBlock.scss'

const TextImgBlock = (props) => {
    return (
        <div className={props.direction}>
            <ImgBlock alt={props.alt}/>
            <TextBlock title={props.title} description={props.description} circleIcon={props.icon}/>
        </div>

);
};

export default TextImgBlock;