import './InfoBlock.scss'

const InfoBlock = (props) => {
    return (
        <>
        <div className="main__container">
            <p className="title">{props.title}</p>
            <h2 className="main__text">{props.mainText}</h2>
            <p>{props.text}</p>
        </div>
        </>
    )
}

export default InfoBlock;