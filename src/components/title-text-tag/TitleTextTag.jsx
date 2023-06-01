import './TitleTextTag.scss'
import BtnLinkOrTag from '../btn-links-tags/BtnLinkOrTag';
import ProjectSmallDescription from '../project-small-description/ProjectSmallDescription';


const TitleTextTag = (props) => {
    return (
       
        <div className={props.type}>
            <div>
                <h4>{props.title}</h4>
                <h2 className={props.bigTitleClass}>{props.bigTitleText}</h2>
                <p>{props.description1}</p>
                <p className={props.showDescription2}>{props.description2}</p>
                
                <div className='location-date'>
                    <div className={props.showTag}>
                    <BtnLinkOrTag  type='btn btn__tag btn__tag__size-small ' text={props.tagText} />
                    </div>
                    <p>{props.fecha}</p>
                </div>
            </div>

            <div className={props.projectSmallDescriptionShow}>
                <ProjectSmallDescription
                category1={props.category1}
                categoryContent1={props.categoryContent1}
                category2={props.category2}
                categoryContent2={props.categoryContent2}
                btnText={props.btnText}
                to={props.to}
                />

            </div>
        </div>

        
        
    );
};

export default TitleTextTag;