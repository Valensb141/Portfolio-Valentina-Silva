import './TextImgBlock.scss'


const ImgBlock = (props) => {
    return (
        <div className='project__img'>
            <img className='img' src={props.src} alt={props.alt} />
        </div>
    );
};

export default ImgBlock;