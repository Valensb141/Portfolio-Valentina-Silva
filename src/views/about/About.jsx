import './About.scss'
import me from '/images/me.png'
import BtnLinkOrTag from '../../components/btn-links-tags/BtnLinkOrTag'
import TitleTextTag from '../../components/title-text-tag/TitleTextTag'
//import IconArrow from '../../components/icons/IconArrow'
import IconCircle from '../../components/icon-circle/IconCircle'
import Js from '../../components/icons/JavaScrips'
import Html from '../../components/icons/Html'
import Css from '../../components/icons/Css'
import Scss from '../../components/icons/Scss'
import Wp from '../../components/icons/Wp'
import React from '../../components/icons/React'
import Illustrator from '../../components/icons/illustrator'
import Photoshop from '../../components/icons/Photoshop'
import Indesign from '../../components/icons/Indesign'
import Figma from '../../components/icons/Figma'

export default function About() {
    return <>
    <div className="about__display">
        <div className="left__div">
            <img src={me} alt="hola" className="img" />

            <div className='name__location'>
                <h3 className='name'>Valentina Silva</h3>
                <p>Valencia, Spain</p>
                {/* <BtnLinkOrTag  type='btn btn__tag' text="Valencia, Spain"/> */}
            </div>

            

            <div className='idiomas__container'>
                {/* <p className='text__cv__border'><strong>IDIOMAS</strong></p> */}
                <p className='text__cv__border'><strong>Inglés: </strong>fluido</p>
                <p className='text__cv__border'><strong>Castellano: </strong>nativo</p>
                <p className='text__cv__border'><strong>Italiano: </strong>básico</p>

                {/* <div className='idiomas'>
                    <p><strong>Inglés: </strong>fluido</p>
                    <p><strong>Castellano: </strong>nativo</p>
                    <p><strong>Italiano: </strong>básico</p>
                </div> */}
            </div>

            <div className='idiomas__container'>
                {/* <p className='text__highlighted'>CONTACTO</p> */}
                <div className='idiomas'>
                    <p><strong>valentinasilva141@gmail.com</strong></p>
                    <p>+34 684 39 65 69</p>
                    <div className='btn__linkedin'>
                        <BtnLinkOrTag  type='btn btn__primary' text="LinkedIn" />
                    </div>
                </div>
            </div>

        </div>

        <div className="right__div">
            <div className="img-hello-decription">
                <div className="img">
                    <img className="img__round" src={me} alt="Imagen de Valentina con fondo degradado de colores" />
                </div>
                <div className="hello-description">
                    <TitleTextTag 
                        title="¡Hey, holaa!"
                        bigTitleText="I'm Valentina"
                        description1="Apart from my studies and professional experience, I am a genuinely joyful person. I embrace optimism and view setbacks and challenges as opportunities for personal growth and learning."
                        description2="Interesting fact: I have lived in three different countries—Venezuela, Panama, and Spain—each offering unique realities and cultures. Additionally, I had the privilege of spending a few months in vibrant cities like New York City, Boston, and Milan. Life has taken my family and me to various places, and I make sure to make the most of these experiences."
                        tagText="Valencia, Spain"
                        //fecha="Oct 22 – Jun 23"
                        type='header-block'
                        //showTag='tag__dont-show'
                        //showDescription2='p__dont-show'
                        projectSmallDescriptionShow='project-small-description__dont-Show'
                        upperBlockClass='hello-description hello-description__inner'
                        />
                </div>
            </div>

            <div className="languajes__trio">
                <div className="languajes__spanish"><div className='padding'><strong className='secondary__typography__large'>Spanish: </strong><br></br>native</div></div>
                <div className="languajes__english"><div className='padding'><strong className='secondary__typography__large'>English: </strong><br></br>fluid</div></div>
                <div className="languajes__italian"><div className='padding'><strong className='secondary__typography__large'>Italian: </strong><br></br>basic knowledge</div></div>                                             
            </div>


            <div className='studies'>
                <h3>My studies</h3>
                <TitleTextTag 
                title="ESCUELA SUPERIOR DE ARTE Y TECNOLOGÍA"
                description1="Postgraduate program in UX/UI Design, Frontend Development and Digital Marketing."
                tagText="Valencia, Spain"
                fecha="Oct 22 – Jun 23"
                type='studies-block'
                // showTag='tag__dont-show'
                showDescription2='p__dont-show'
                projectSmallDescriptionShow='project-small-description__dont-Show'
                upperBlockClass='studies-block'
                />

                <TitleTextTag 
                title="POLITECNICO DI MILANO (ERASMUS)"
                description1="Bachelor's degree in Industrial Design and Product Development Engineering."
                tagText="Milan, Italy"
                fecha="Feb 22 - Jun 22"
                type='studies-block'
                // showTag='tag__dont-show'
                showDescription2='p__dont-show'
                projectSmallDescriptionShow='project-small-description__dont-Show'
                upperBlockClass='studies-block'
                />

                <TitleTextTag 
                title="UNIVERSIDAD POLITÉCNICA DE VALENCIA (UPV)"
                description1="Bachelor's degree in Industrial Design and Product Development Engineering."
                tagText="Alcoy, Spain"
                fecha="Sept 18 – Jun 22"
                type='studies-block'
                // showTag='tag__dont-show'
                showDescription2='p__dont-show'
                projectSmallDescriptionShow='project-small-description__dont-Show'
                upperBlockClass='studies-block'
                />
            </div>

            <div className="experience">

                <h3>Experience</h3>

                <div className="experience__subcontainer">
                    <TitleTextTag 
                        title="Graphic Design Freelancer"
                        description1="Graphic Design service"
                        description2="Brand creation for new businesses, catalog design, menus, labels, flyers, design for social media."
                        tagText="Online"
                        fecha="Sep 2020 – Now"
                        type='experience-block'
                        // showTag='tag__dont-show'
                        //showDescription2='p__dont-show'
                        projectSmallDescriptionShow='project-small-description__dont-Show'
                        upperBlockClass='experience-block-inner'
                        />

                    <TitleTextTag 
                        title="Maxi Products Group, S.L · Prácticas"
                        description1="
                        Product Technician"
                        description2="Development of a project for product analysis and technical data sheets with the aim of structuring the technical and logistical characteristics of each product in the catalog. Quality control of catalog products using mechanical measurement instruments and Microsoft Excel."
                        tagText="Ibi, Spain"
                        fecha="Nov 2021 – Dic 2021"
                        type='experience-block'
                        // showTag='tag__dont-show'
                        //showDescription2='p__dont-show'
                        projectSmallDescriptionShow='project-small-description__dont-Show'
                        upperBlockClass='experience-block-inner'
                        />
                </div>
            </div>

            <div className="hard-skills__container">

<h3>Hard Skills</h3> 

<div className="hard-skills">
    <div className="hard-skills-icons__container">
        <div className="hard-skills-icons">
            <IconCircle icon={<Html/>} showIcon='icon-circle'/>
            <IconCircle icon={<Css/>} showIcon='icon-circle'/>
            <IconCircle icon={<Scss/>} showIcon='icon-circle' />
            <IconCircle icon={<Js/>} showIcon='icon-circle'/>
        </div>

        <div className="hard-skills-icons">
            <IconCircle icon={<React/>} showIcon='icon-circle'/>
            <IconCircle icon={<Wp/>} showIcon='icon-circle'/>
        </div>
    </div>
 

    <div className="hard-skills-icons__container">
        <div className="hard-skills-icons">
            <IconCircle icon={<Figma/>} showIcon='icon-circle'/>
            <IconCircle icon={<Illustrator/>} showIcon='icon-circle'/>
            <IconCircle icon={<Photoshop/>} showIcon='icon-circle'/>
            <IconCircle icon={<Indesign/>} showIcon='icon-circle' />
            
        </div>

        <div className="hard-skills-icons">
            <IconCircle icon={<React/>} showIcon='icon__dont-show'/>
            <IconCircle icon={<Wp/>} showIcon='icon__dont-show'/>
        </div>
    </div>

    {/* <div className="hard-skills-icons__container">
        <div className="hard-skills-icons">
            <IconCircle icon={<Html/>} showIcon='icon-circle'/>
            <IconCircle icon={<Css/>} showIcon='icon-circle'/>
            <IconCircle icon={<Scss/>} showIcon='icon-circle' />
            <IconCircle icon={<Js/>} showIcon='icon-circle'/>
        </div>

        <div className="hard-skills-icons">
            <IconCircle icon={<React/>} showIcon='icon-circle'/>
            <IconCircle icon={<Wp/>} showIcon='icon-circle'/>
        </div>
    </div> */}
    
</div>
</div>

            <div className="soft-skills">
                <div className="column__revese">

                <div className="column__revese__sub">
                        <div className="circle-1"><strong>Adaptability & flexibility</strong> are definitely one of my strongest soft skills!</div>
                    <div className="circle-duo-1">
                        <div className="circle-1">I am really good at  <strong>teamwork</strong></div>
                        <div className="circle-1">I really like <strong>learning</strong> by doing</div>
                    </div>
                </div>

                <div className="circle-main">Soft<br></br>Skills</div>
                </div>
                
                <div className="circle-duo-1">
                    <div className="circle-1">
I have a strong passion for <strong>learning</strong> and strive to achieve excellence in everything I do.</div>
                    <div className="circle-1">
I am skilled at <br /> <strong
>communication.</strong></div>
                </div>

                    <div className="circle-1">I have <strong>experience working in remote settings.</strong> </div>

            </div>
            

            

        </div>
    </div>
</>

}