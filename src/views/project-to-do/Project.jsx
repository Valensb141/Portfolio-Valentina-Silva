import '../project/Project.scss'
//import ProjectSmallDescription from '../../components/project-small-description/ProjectSmallDescription'
import TextImgDuo from '../../components/text-img-duo/TextImgDuo'
import toDoApp_1 from '/images/toDoApp_1.png'
import toDoApp_3 from '/images/toDoApp_3.png'
import toDoApp_2 from '/images/toDoApp_2.png'
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
                text="This app helps you make a list of tasks you need to do. You can add tasks, see the ones you're working on, and the ones you've completed. If you no longer need a task, you can remove it from the list."
                category1="Lenguajes"
                categoryContent1="HTML | JavaScript | CSS"
                category2="Year"
                categoryContent2="2023"
                btnText="GitHub"
                to={'https://github.com/Valensb141/to-do-app'}
                />
            </section>

            <section className='trio__block'>
                <InfoBlock 
                title="CHALLENGE"
                mainText="Implement functionality"
                text="The task at hand is to incorporate the functionality of adding tasks, marking tasks as complete, and removing tasks from the list using JavaScript, HTML, and CSS for the layout and presentation."
                />

                <InfoBlock 
                title="GOAL"
                mainText="Functional and practical tool"
                text="The goal is to empower users to efficiently create, organize, and manage their tasks, ultimately enhancing their productivity and aiding them in maintaining a sense of organization."
                />

                <InfoBlock 
                title="RESULT"
                mainText="Interactive application"
                text="An interactive app for efficient time management and organization."
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