import './ProjectsContainer.scss'
import TextImgBlock from './text-img-block/TextImgBlock';
//import IconArrow from '../icons/IconArrow';
//import me from '../../images/me.png'
import Js from '../icons/JavaScrips';
import Html from '../icons/Html';
import Css from '../icons/Css';
import Scss from '../icons/Scss';
import React from '../icons/React';
import Wp from '../icons/Wp';
import toDoGif from '/images/toDoGif.gif'
import Figma from '../icons/Figma';
import weatherAppGif from '/images/weatherAppGif.gif'
import designAvenueGif from '/images/designAvenueGif.gif'

const ProjectsContainer = () => {
    return (
        <section className='projects'>
            <TextImgBlock direction='project__container__imgToRight' src={toDoGif} title="To Do List App" description="This app helps you make a list of tasks you need to do. You can add tasks, see the ones you're working on, and the ones you've completed. If you no longer need a task, you can remove it from the list." icon={<Js/>} icon1={<Html/>} icon2={<Css/>} showIcon='icon-circle' to={`/project-to-do`}/>
            <TextImgBlock direction='project__container__imgToLeft' src={weatherAppGif} title="Weather App" description="The weather app I developed is a user-friendly web application that provides weather information for any location around the world. It allows users to quickly access weather data, including temperature, humidity, real feel... The app's intuitive design and seamless user experience make it a valuable tool for anyone who wants to stay informed about the weather conditions" icon={<React/>} icon1={<Js/>} icon2={<Css/>} showIcon='icon-circle' to={`/project-weather-app`}/>
            <TextImgBlock direction='project__container__imgToRight' src={designAvenueGif} title="Design Avenue" description="Design Avenue is an online graphic design studio that specializes in helping new businesses or startups create their visual identity. We provide guidance and support to ensure your brand has a strong and appealing visual presence." icon={<Wp/>} icon1={<Css/>} icon2={<Figma/>} showIcon='icon-circle'
            to={`/project-design-avenue`}/>
        </section>

);
};

export default ProjectsContainer;