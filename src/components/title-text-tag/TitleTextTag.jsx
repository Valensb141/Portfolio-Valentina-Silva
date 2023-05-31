import './TitleTextTag.scss'
import BtnLinkOrTag from '../btn-links-tags/BtnLinkOrTag';


const TitleTextTag = (props) => {
    return (
       
        <div className={props.type}>
                <h4>{props.title}</h4>
                <h2 className={props.bigTitle}>{props.bigTitleText}</h2>
                <p>{props.description1}</p>
                <p className={props.showParagraph}>{props.description2}</p>
                <div className='location-date'>
                    <div className={props.showTag}>
                    <BtnLinkOrTag  type='btn btn__tag btn__tag__size-small ' text={props.tagText} />
                    </div>
                    <p>{props.fecha}</p>
                </div>
        </div>
        
    );
};

export default TitleTextTag;