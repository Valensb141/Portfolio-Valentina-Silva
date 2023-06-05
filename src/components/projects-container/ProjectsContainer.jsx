import './ProjectsContainer.scss'
import TextImgBlock from './text-img-block/TextImgBlock';
import IconArrow from '../icons/IconArrow';
import me from '../../images/me.png'

const ProjectsContainer = () => {
    return (
        <section className='projects'>
            <TextImgBlock direction='project__container__imgToRight' src="" title="To Do List App" description="Esta es la descripción" icon={<IconArrow/>} to={`/project-to-do`}/>
            <TextImgBlock direction='project__container__imgToLeft' title="Calculator" description="Esta es la descripción" icon={<IconArrow/>} to={`/project-calculator`}/>
            <TextImgBlock direction='project__container__imgToRight' src="" title="Design Avenue" description="Esta es la descripción" icon={<IconArrow/>}
            to={`/project-design-avenue`}/>
        </section>

);
};

export default ProjectsContainer;