import '../project/Project.scss'
//import ProjectSmallDescription from '../../components/project-small-description/ProjectSmallDescription'
import TextImgDuo from '../../components/text-img-duo/TextImgDuo'
//import me from '../../images/me.png'
import weatherApp_1 from '../../images/weatherApp_1.png'
import weatherApp_2 from '../../images/weatherApp_2.png'
import weatherApp_3 from '../../images/weatherApp_3.png'
//import TitleTextTag from '../../components/title-text-tag/TitleTextTag'
import InfoBlock from '../../components/info__block/InfoBlock'

export default function ProjectWeatherApp() {
    return  (
        <>
        <div className="project__main">
            <section>
                <TextImgDuo
                imgContainer='img__halfpage'
                imgType='img__square'
                src={weatherApp_2}
                alt='Imágen principal de proyecto'
                title="Weather App"
                text="Esat es la descripciondel proyetop que voy a mostar"
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
                    <img className="img_projects" src={weatherApp_3} alt="" />
                </div>

                <div className="full-page-image">
                    <img className="img_projects" src={weatherApp_1} alt="" />
                </div>

                <div className="full-page-image">
                    <img src="" alt="" />
                </div>
            </section>
        </div>
        </>
        
    )}