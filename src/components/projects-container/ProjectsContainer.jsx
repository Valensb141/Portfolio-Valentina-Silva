import './ProjectsContainer.scss'
import TextImgBlock from './text-img-block/TextImgBlock';
//import IconArrow from '../icons/IconArrow';
//import me from '../../images/me.png'
import Js from '../icons/JavaScrips';
import Html from '../icons/Html';
import Css from '../icons/Css';
import Scss from '../icons/Scss';
import Wp from '../icons/Wp';

const ProjectsContainer = () => {
    return (
        <section className='projects'>
            <TextImgBlock direction='project__container__imgToRight' src="" title="To Do List App" description="Esta es la descripción" icon={<Js/>} icon1={<Html/>} icon2={<Css/>} showIcon='icon-circle' to={`/project-to-do`}/>
            <TextImgBlock direction='project__container__imgToLeft' title="Calculator" description="Esta es la descripción" icon={<Js/>} icon1={<Html/>} icon2={<Scss/>} showIcon='icon-circle' to={`/project-calculator`}/>
            <TextImgBlock direction='project__container__imgToRight' src="" title="Design Avenue" description="Esta es la descripción" icon={<Wp/>} icon1={<Css/>} showIcon='icon-circle'
            to={`/project-design-avenue`}/>
        </section>

);
};

export default ProjectsContainer;