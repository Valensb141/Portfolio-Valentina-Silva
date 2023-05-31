import './TitleTextTag.scss'
import BtnLinkOrTag from '../btn-links-tags/BtnLinkOrTag';


const TitleTextTag = (props) => {
    return (
       
        <div className={props.type}>
                <h3>{props.title}</h3>
                <p>{props.description1}</p>
                <p>{props.description2}</p>
                <div>
                    <BtnLinkOrTag  type='btn btn__tag' text={props.tagtext}/>
                    <p>{props.fecha}</p>
                </div>
        </div>
        
    );
};

export default TitleTextTag;