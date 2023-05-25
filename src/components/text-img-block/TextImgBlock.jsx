import './TextImgBlock.scss'

const TextImgBlock = (props) => {
    return (
        <div className='project__container'>
            <ImgBlock alt="este es el alt"/>
            <TextBlock title="Nombre del proyecto" description="Descripción del proyecto" circleIcon={<IconArrow />}/>
        </div>

);
};

export default TextImgBlock;