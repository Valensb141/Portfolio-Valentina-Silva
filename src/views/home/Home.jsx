
import ProjectsContainer from '../../components/projects-container/ProjectsContainer';
import RoundedContainer from '../../components/rouded-container/RoundedContainer';
import Header from '../../components/header/header';
import './home.scss'
import me from '../../images/me.png'


export default function Home() {
 return (
    <>
    
    <Header
    tagtext="Diseñadora y desarrolladora de producto"
    />

    
    <RoundedContainer 
        borderRadius='rouded-container rouded-container__top'
        title="Hola! Soy Valentina" 
        tagtext="O Tini o Valen" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non maximus magna. Aenean consectetur felis id risus blandit, id sollicitudin dolor tristique. Nunc nec volutpat enim, in tincidunt metus. Donec vulputate ligula eu dui egestas ornare. Praesent eu sodales mi."
        showPrinciples="principles__container__dont-show"
        contactInfo='contact__dont-show'
        btn='btn__show'
    />

    <div className="img__duo">
        <img className='img__one' src={me} alt="" />
        <img className='img__two' src={me} alt="" />
    </div>

    <h2 className='seccion__title'>Diseño y Desarrollo de Producto</h2>

    <ProjectsContainer />

    <RoundedContainer 
        borderRadius='rouded-container rouded-container__middle'
        title="Mis principios" 
        tagtext="En lo que creo" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non maximus magna. Aenean consectetur felis id risus blandit, id sollicitudin dolor tristique. Nunc nec volutpat enim, in tincidunt metus. Donec vulputate ligula eu dui egestas ornare. Praesent eu sodales mi."
        principle="Principiokjsfhkas"
        principle2="Principixzcfsdfdfo1"
        principle3="Principsdfdsfdfdfdfdio1"
        principle4="Principdfdfdfdfdfdfdfdfsfio1"
        showPrinciples="principles__container"
        contactInfo='contact__dont-show'
    />

    <h2 className='seccion__title'>Diseño Gráfico</h2>

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

