import './RoundedContainer.scss'
import SpaceTextBlock from '../space-text-block/SpaceTextBlock';
import TitleTag from '../title-tag/TitleTag'
import BtnLinkOrTag from '../btn-links-tags/BtnLinkOrTag';


const RoundedContainer = (props) => {
    return (
        <div className={props.borderRadius}>
            <div className='content'>
                <TitleTag title={props.title} tagtext={props.tagtext}/>
                <SpaceTextBlock  text={props.text}/>

            <div className='principles__container'>
                <div className='principles__subcontainer'>
                    <BtnLinkOrTag  type='btn btn__principles' text={props.principle}/>
                    <BtnLinkOrTag  type='btn btn__principles' text={props.principle2}/>
                </div>

                <div className='principles__subcontainer'>
                    <BtnLinkOrTag  type='btn btn__principles' text={props.principle3}/>
                    <BtnLinkOrTag  type='btn btn__principles' text={props.principle4}/>
                </div>
            </div>
                
            </div>
        </div>
    );
};

export default RoundedContainer;