import ProjectSmallDescription from '../project-small-description/ProjectSmallDescription'
import './TextImgDuo.scss'


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

                <div className="title-description">
                <div className="title__description__container">
                    <h1 className="main__title">{props.title}</h1>
                    <p>{props.text}</p>
                </div>

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
        </>
    )
}