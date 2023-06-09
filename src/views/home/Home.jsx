
import ProjectsContainer from '../../components/projects-container/ProjectsContainer';
import RoundedContainer from '../../components/rouded-container/RoundedContainer';
import Header from '../../components/header/header';
import './home.scss'
import me from '../../images/me.png'
import coffeeMe from '../../images/coffeeMe.png'
import { Link } from 'react-router-dom';


export default function Home() {
 return (
    
     <>
        <Header
        tagtext="Diseñadora y desarrolladora de producto"
        />


        <RoundedContainer 
            borderRadius='rouded-container rouded-container__top'
            title="Hola, hello! I'm Valentina" 
            tagtext="Or Tini, or Valen" 
            text="
            I am a Valencia-based Industrial Design Engineer graduate with three years of experience in the graphic design industry. Additionally, I hold a postgraduate degree in Frontend Development, UX/UI Design, and Digital Marketing."
            text2="My life has afforded me the opportunity to reside in various countries across two continents, providing me with a multicultural background and a unique perspective on life. Furthermore, I have a deep appreciation for coffee and really enjoy playing paddle and basketball."
            showPrinciples="principles__container__dont-show"
            contactInfo='contact__dont-show'
            btn='btn__show'
            to={`/About`}
        />

        <div className="img__duo">
            <img className='img__one' src={me} alt="Valentina dressed in black clothing, smiling with a colourfull background" />
            <img className='img__two' src={coffeeMe} alt="Valentina smiling with a yellow coffee cup in her hands" />
        </div>

        <a href="#section1"></a> 
        <h2 className='seccion__title' id="section-1">UX/UI Design - Frontend Development</h2>

        <ProjectsContainer />

        <RoundedContainer 
            borderRadius='rouded-container rouded-container__middle'
            title="Key Principles" 
            tagtext="I follow and believe in" 
            text="I firmly believe that with dedication and perseverance, you can accomplish whatever you set your mind to. Additionally, I value the importance of fostering a positive work environment and cultivating strong relationships within a team, as it leads to better outcomes and results."
            principle="People matter most."
            principle2="Flexibility and adaptability are superpowers."
            principle3="Give it your all in everything you do."
            principle4="Communication is key"
            showPrinciples="principles__container"
            contactInfo='contact__dont-show'
            to={`/About`}
        />

        <h2 className='seccion__title' id='web-portfolio'>Graphic Design</h2>

        <ProjectsContainer />

        <RoundedContainer 
            borderRadius='rouded-container rouded-container__bottom'
            title="Contáctame" 
            tagtext="Me encantaría formar parte de tu equipo" 
            showPrinciples="principles__container__dont-show"
            contactInfo='contact__show'
            textAndBtn='text-btn__dontshow'
        />

    </>
 )
}

