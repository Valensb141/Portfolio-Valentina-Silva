import './TextImgDuo.scss'
import TitleTextTag from "../title-text-tag/TitleTextTag"

export default function TextImgDuo(props) {
    return  (
        <>
            <div className="text-img-duo">
                <div className={props.imgContainer}>
                    <img
                    className={props.imgType}
                    src={props.src}
                    alt={props.alt} />
                </div>

                
                    <TitleTextTag 
                        type={props.type}
                        title={props.title}
                        bigTitleClass={props.bigTitleClass}
                        bigTitleText={props.bigTitleText}
                        description1={props.description1}
                        showDescription2={props.showDescription2}
                        description2={props.description2}
                        showTag={props.showTag}
                        tagText={props.tagText}
                        fecha={props.fecha}

                        projectSmallDescriptionShow={props.projectSmallDescriptionShow}
                        category1={props.category1}
                        categoryContent1={props.categoryContent1}
                        category2={props.category2}
                        categoryContent2={props.categoryContent2}
                        btnText={props.btnText}
                        to={props.to}
                        />
                
            </div>
        </>
    )
}