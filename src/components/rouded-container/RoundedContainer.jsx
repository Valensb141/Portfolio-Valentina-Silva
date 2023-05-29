import './RoundedContainer.scss'
import SpaceTextBlock from '../space-text-block/SpaceTextBlock';
import TitleTag from '../title-tag/TitleTag'
import BtnLinkOrTag from '../btn-links-tags/BtnLinkOrTag';
import IconArrow from '../icons/IconArrow';


const RoundedContainer = (props) => {
    return (
        <div className={props.borderRadius}>
            <div className='content'>
                <TitleTag title={props.title} tagtext={props.tagtext}/>
                <SpaceTextBlock  text={props.text}/>
                
            <div className={props.showPrinciples}>
                <div className='principles__subcontainer'>
                    <BtnLinkOrTag  type='btn btn__principles' text={props.principle}/>
                    <BtnLinkOrTag  type='btn btn__principles' text={props.principle2}/>
                </div>

                <div className='principles__subcontainer'>
                    <BtnLinkOrTag  type='btn btn__principles' text={props.principle3}/>
                    <BtnLinkOrTag  type='btn btn__principles' text={props.principle4}/>
                </div>
            </div>

            <div className={props.contactInfo}>
                <p>Valentinasilva141@gmail.com</p>

                <div className='social__btns'>
                    <BtnLinkOrTag type='btn btn__primary' text="Linkedin" route={`/about`} icon={<IconArrow />}/>
                    <BtnLinkOrTag type='btn btn__primary' text="GitHub" route={`/about`} icon={<IconArrow />}/>
                    <BtnLinkOrTag type='btn btn__primary' text="Instagram" route={`/about`} icon={<IconArrow />}/>
                </div>

            </div>
                
            </div>
        </div>
    );
};

export default RoundedContainer;