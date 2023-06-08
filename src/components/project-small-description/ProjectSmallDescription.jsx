import './ProjectSmallDescription.scss'
import BtnLinkOrTag from '../btn-links-tags/BtnLinkOrTag';
import IconArrow from '../icons/IconArrow'

const ProjectSmallDescription = (props) => {
    return (
        <>
        <div className="description">
            <div className="subdescription">
                <p className="subdescription__category">{props.category1}</p>
                <p className="subdescription__category subdescription__category__content">{props.categoryContent1}</p>
            </div>

            <div className="subdescription">
                <p className="subdescription__category">{props.category2}</p>
                <p className="subdescription__category subdescription__category__content">{props.categoryContent2}</p>
            </div>

            <BtnLinkOrTag target="_blanc" type='btn btn__primary' text={props.btnText} to={props.to} icon={<IconArrow />}/>
        </div>
        </>
    )
}

    
export default ProjectSmallDescription;