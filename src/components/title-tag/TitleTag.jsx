import './Title-tag.scss'
import Tag from '../btn/Tag';

const TitleTag = (props) => {
    return (
        
        <div className='title-tag'>
            <h2>{props.title}</h2>
            <Tag text={props.tagtext}/>
            {/* Se le pone un nuevo prop ya que los props solo perteneces a u padre */}
        </div>
        
    );
};

export default TitleTag;

