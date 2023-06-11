import '../project/Project.scss'
//import ProjectSmallDescription from '../../components/project-small-description/ProjectSmallDescription'
import TextImgDuo from '../../components/text-img-duo/TextImgDuo'
import toDoApp_1 from '../../images/toDoApp_1.png'
import toDoApp_3 from '../../images/toDoApp_3.png'
import toDoApp_2 from '../../images/toDoApp_2.png'
//import TitleTextTag from '../../components/title-text-tag/TitleTextTag'
import InfoBlock from '../../components/info__block/InfoBlock'

export default function ProjectToDoApp() {
    return  (
        <>
        <div className="project__main">
            <section>
                <TextImgDuo
                imgContainer='img__halfpage'
                imgType='img__square'
                src={toDoApp_1}
                alt='Imágen principal de proyecto'
                title="To Do List"
                text="Esat es la descripciondel proyetop que voy a mostar"
                category1="Lenguajes"
                categoryContent1="React | JavaScript"
                category2="Year"
                categoryContent2="2023"
                btnText="GitHub"
                to={'https://github.com/Valensb141/to-do-app'}
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
                    <img className="img_projects" src={toDoApp_3} alt="" />
                </div>

                <div className="full-page-image">
                    <img className="img_projects" src={toDoApp_2} alt="" />
                </div>

                <div className="full-page-image">
                    <img className="img_projects" src={toDoApp_1} alt="" />
                </div>
            </section>
        </div>
        </>
        
    )}