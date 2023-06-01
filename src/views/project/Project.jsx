import './Project.scss'
//import ProjectSmallDescription from '../../components/project-small-description/ProjectSmallDescription'
import TextImgDuo from '../../components/text-img-duo/TextImgDuo'
import me from '../../images/me.png'
import TitleTextTag from '../../components/title-text-tag/TitleTextTag'
export default function Project() {
    return  (
        <>
        <div className="project__main">
            <section>
                <TextImgDuo
                imgContainer='img__halfpage'
                imgType='img__square'
                src={me}
                alt='Imágen principal de proyecto'
                type='header-block'
                //title="Hola"
                //bigTitleClass={props.bigTitleClass}
                bigTitleText="To do list"
                description1="Esta es la descripción del proyecto"
                showDescription2='p__dont-show'
                //description2={props.description2}
                showTag='tag__dont-show'
                //tagText={props.tagText}
                //fecha={props.fecha}
                
                //projectSmallDescriptionShow='project-small-description__dont-Show'
                category1="Lenguajes"
                categoryContent1="React | JavaScript"
                category2="Year"
                categoryContent2="2023"
                btnText="GitHub"
                //to={props.to}
                />
            </section>

            <section>
                <TitleTextTag
                    
                />
            </section>
        </div>
        </>
        
    )}