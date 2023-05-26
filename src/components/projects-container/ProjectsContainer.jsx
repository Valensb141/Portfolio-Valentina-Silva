import './ProjectsContainer.scss'
import TextImgBlock from './text-img-block/TextImgBlock';
import IconArrow from '../icons/IconArrow';

const ProjectsContainer = () => {
    return (
        <section className='projects'>
            <TextImgBlock direction='project__container__imgToRight' title="Este es el proyecto" description="Esta es la descripción" icon={<IconArrow/>}/>
            <TextImgBlock direction='project__container__imgToLeft' title="Este es el proyecto" description="Esta es la descripción" icon={<IconArrow/>}/>
        </section>

);
};

export default ProjectsContainer;