import '../project/Project.scss'
//import ProjectSmallDescription from '../../components/project-small-description/ProjectSmallDescription'
import TextImgDuo from '../../components/text-img-duo/TextImgDuo'
//import me from '../../images/me.png'
import weatherApp_1 from '/images/weatherApp_1.png'
import weatherApp_2 from '/images/weatherApp_2.png'
import weatherApp_3 from '/images/weatherApp_3.png'
import weatherAppGif from '/images/weatherAppGif.gif'
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
                src={weatherAppGif}
                alt='Imágen principal de proyecto'
                title="Weather App"
                text="The weather app I developed is a user-friendly web application that provides weather information for any location around the world. It allows users to quickly access weather data, including temperature, humidity, real feel... The app's intuitive design and seamless user experience make it a valuable tool for anyone who wants to stay informed about the weather conditions."
                category1="Languajes"
                categoryContent1="React | JavaScript"
                category2="Year"
                categoryContent2="2023"
                btnText="GitHub"
                to={'https://github.com/Valensb141/Weather-app'}
                />
            </section>

            <section className='trio__block'>
                <InfoBlock 
                title="CHALLENGE"
                mainText="Integrating and retrieving data from an API"
                text="I had to research and select a weather API that provided the information I needed. Additionally, parsing and displaying the retrieved data in a visually appealing and easily understandable format."
                />

                <InfoBlock 
                title="GOAL"
                mainText="Create a weather app using React and JavaScript that seamlessly delivers weather information"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus nulla eleifend posuere feugiat."
                />

                <InfoBlock 
                title="RESULT"
                mainText="By successfully integrating a weather API..."
                text="The weather app I developed using React and JavaScript provides users with weather data for any location."
                />
            </section>

            <section className="full-page-image-container">

                <h1>GALLERY</h1>
                
                <div className="full-page-image">
                    <img className="img_projects" src={weatherApp_3} alt="" />
                </div>

                <div className="full-page-image">
                    <img className="img_projects" src={weatherApp_2} alt="" />
                </div>

                <div className="full-page-image">
                    <img className="img_projects" src={weatherApp_1} alt="" />
                </div>
            </section>
        </div>
        </>
        
    )}