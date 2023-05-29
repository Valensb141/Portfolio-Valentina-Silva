
import ProjectsContainer from '../../components/projects-container/ProjectsContainer';
import RoundedContainer from '../../components/rouded-container/RoundedContainer';
import Header from '../../components/header/header';
import './home.scss'


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
    />

    <div>
        <h3>Diseño de Producto</h3>
        <ProjectsContainer />
    </div>

    <RoundedContainer 
        borderRadius='rouded-container rouded-container__bottom'
        title="Mis principios" 
        tagtext="En lo que creo" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non maximus magna. Aenean consectetur felis id risus blandit, id sollicitudin dolor tristique. Nunc nec volutpat enim, in tincidunt metus. Donec vulputate ligula eu dui egestas ornare. Praesent eu sodales mi."
        principle="Principiokjsfhkas"
        principle2="Principixzcfsdfdfo1"
        principle3="Principsdfdsfdfdfdfdio1"
        principle4="Principdfdfdfdfdfdfdfdfsfio1"
    />

    </>
 )
}

