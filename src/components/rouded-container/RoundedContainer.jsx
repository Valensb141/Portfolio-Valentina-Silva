import './RoundedContainer.scss'
import SpaceTextBlock from '../space-text-block/SpaceTextBlock';
import TitleTag from '../title-tag/TitleTag'


const RoundedContainer = (props) => {
    return (
        <div className={props.borderRadius}>
            <div className='content'>
                <TitleTag title={props.title} tagtext={props.tagtext}/>
                <SpaceTextBlock  text={props.text}/>
            </div>
        </div>
    );
};

export default RoundedContainer;