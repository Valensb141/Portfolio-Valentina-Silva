import '../project/Project.scss'
//import ProjectSmallDescription from '../../components/project-small-description/ProjectSmallDescription'
import TextImgDuo from '../../components/text-img-duo/TextImgDuo'
import designAvenueGif from '../../images/designAvenueGif.gif'
import designAvenue_2 from '../../images/designAvenue_2.png'
import designAvenue_3 from '../../images/designAvenue_3.png'
import designAvenue_4 from '../../images/designAvenue_4.png'
//import TitleTextTag from '../../components/title-text-tag/TitleTextTag'
import InfoBlock from '../../components/info__block/InfoBlock'

export default function ProjectDesignAvenue() {
    return  (
        <>
        <div className="project__main">
            <section>
                <TextImgDuo
                imgContainer='img__halfpage'
                imgType='img__square'
                src={designAvenueGif}
                alt='Imágen principal de proyecto'
                title="Design Avenue"
                text="Esat es la descripcion del proyetop que voy a mostar"
                category1="Lenguajes"
                categoryContent1="React | JavaScript"
                category2="Year"
                categoryContent2="2023"
                btnText="GitHub"
                to={'https://github.com/Valensb141'}
                />
            </section>

            <section className='trio__block'>
                <InfoBlock 
                title="PROBLEMA"
                mainText="Lorem Ipsum lorem ipsum"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nulla eleifend posuere feugiat."
                />

                <InfoBlock 
                title="PROBLEMA"
                mainText="Lorem Ipsum lorem ipsum"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nulla eleifend posuere feugiat."
                />

                <InfoBlock 
                title="PROBLEMA"
                mainText="Lorem Ipsum lorem ipsum"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nulla eleifend posuere feugiat."
                />
            </section>

            <section className="full-page-image-container">

                <h1>GALLERY</h1>
                
                <div className="full-page-image">
                    <img className="img_projects" src={designAvenue_2} alt="" />
                </div>

                <div className="full-page-image">
                    <img className="img_projects" src={designAvenue_4} alt="" />
                </div>

                <div className="full-page-image">
                    <img className="img_projects" src={designAvenue_3} alt="" />
                </div>
            </section>
        </div>
        </>
        
    )}