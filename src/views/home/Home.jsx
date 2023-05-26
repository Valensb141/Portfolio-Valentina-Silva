
import ProjectsContainer from '../../components/projects-container/ProjectsContainer';
import RoundedContainer from '../../components/rouded-container/RoundedContainer';
import SpaceTextBlock from '../../components/space-text-block/SpaceTextBlock';
import './home.scss'


export default function Home() {
 return (
    <>
    

    <RoundedContainer 
        borderRadius='top'
        title="Hola! Soy Valentina" 
        tagtext="O Tini o Valen" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non maximus magna. Aenean consectetur felis id risus blandit, id sollicitudin dolor tristique. Nunc nec volutpat enim, in tincidunt metus. Donec vulputate ligula eu dui egestas ornare. Praesent eu sodales mi."
    />

    <ProjectsContainer />

    <RoundedContainer 
        borderRadius='bottom'
        title="Hola! Soy Valentina" 
        tagtext="O Tini o Valen" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non maximus magna. Aenean consectetur felis id risus blandit, id sollicitudin dolor tristique. Nunc nec volutpat enim, in tincidunt metus. Donec vulputate ligula eu dui egestas ornare. Praesent eu sodales mi."
    />

    </>
 )
}

