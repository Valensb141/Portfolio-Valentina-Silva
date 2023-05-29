import './Title-tag.scss'
import BtnLinkOrTag from '../btn-links-tags/BtnLinkOrTag';

const TitleTag = (props) => {
    return (
        
        <div className='title-tag'>
            <h2>{props.title}</h2>
            <BtnLinkOrTag  type='btn btn__tag' text={props.tagtext}/>
            {/* Se le pone un nuevo prop ya que los props solo perteneces a u padre */}
        </div>
        
    );
};

export default TitleTag;

