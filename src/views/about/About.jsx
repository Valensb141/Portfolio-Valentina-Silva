import './About.scss'
import me from '../../images/me.png'
import BtnLinkOrTag from '../../components/btn-links-tags/BtnLinkOrTag'
import TitleTextTag from '../../components/title-text-tag/TitleTextTag'
import IconArrow from '../../components/icons/IconArrow'
import IconCircle from '../../components/icon-circle/IconCircle'

export default function About() {
    return <>
    <div className="about__display">
        <div className="left__div">
            <img src={me} alt="hola" className="img" />

            <div className='name__location'>
                <h3 className='name'>Valentina Silva</h3>
                <p>Valencia, España</p>
                {/* <BtnLinkOrTag  type='btn btn__tag' text="Valencia, España"/> */}
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
                    <img className="img__round" src={me} alt="" />
                </div>
                <div className="hello-description">
                    <TitleTextTag 
                        title="¡Hola, holaa!"
                        bigTitleText="Soy Valentina"
                        description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia vulputate felis, ut mattis ligula semper vestibulum. Maecenas tincidunt et metus at tempus. Duis eu placerat  maximus nisi in viverra viverra."
                        description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia vulputate felis, ut mattis ligula semper vestibulum. Maecenas tincidunt et metus at tempus. Duis eu placerat  maximus nisi in viverra viverra."
                        tagText="Valencia, España"
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
                <div className="languajes__spanish"><strong className='secondary__typography__large'>Castellano: </strong><br></br>nativo</div>
                <div className="languajes__english"><strong className='secondary__typography__large'>Inglés: </strong><br></br>fluido</div>
                <div className="languajes__italian"><strong className='secondary__typography__large'>Italiano: </strong><br></br>básico</div>
            </div>


            <div className='studies'>
                <h3>Formación</h3>
                <TitleTextTag 
                title="ESCUELA SUPERIOR DE ARTE Y TECNOLOGÍA"
                description1="Postgrado de Diseño UX/UI, Maquetación Web y Marketing Digital."
                tagText="Valencia, España"
                fecha="Oct 22 – Jun 23"
                type='studies-block'
                // showTag='tag__dont-show'
                showDescription2='p__dont-show'
                projectSmallDescriptionShow='project-small-description__dont-Show'
                upperBlockClass='studies-block'
                />

                <TitleTextTag 
                title="POLITECNICO DI MILANO (ERASMUS)"
                description1="Ingeniería en Diseño Industrial y Desarrollo de Producto"
                tagText="Milán, Italia"
                fecha="Feb 22 - Jun 22"
                type='studies-block'
                // showTag='tag__dont-show'
                showDescription2='p__dont-show'
                projectSmallDescriptionShow='project-small-description__dont-Show'
                upperBlockClass='studies-block'
                />

                <TitleTextTag 
                title="UNIVERSIDAD POLITÉCNICA DE VALENCIA (UPV)"
                description1="Ingeniería en Diseño Industrial y Desarrollo de Producto"
                tagText="Alcoy, España"
                fecha="Sept 18 – Jun 22"
                type='studies-block'
                // showTag='tag__dont-show'
                showDescription2='p__dont-show'
                projectSmallDescriptionShow='project-small-description__dont-Show'
                upperBlockClass='studies-block'
                />
            </div>

            <div className="experience">

                <h3>Experiencia</h3>

                <div className="experience__subcontainer">
                    <TitleTextTag 
                        title="Freelance de Diseño Gráfico"
                        description1="Servicio de Diseño Gráfico"
                        description2="Creación de branding para nuevas empresas, diseño de catálogos, menús, etiquetas y flyers, diseño para redes sociales."
                        tagText="Online"
                        fecha="Sep 2020 – Actualidad "
                        type='experience-block'
                        // showTag='tag__dont-show'
                        //showDescription2='p__dont-show'
                        projectSmallDescriptionShow='project-small-description__dont-Show'
                        upperBlockClass='experience-block-inner'
                        />

                    <TitleTextTag 
                        title="Maxi Products Group, S.L · Prácticas"
                        description1="Técnico de Producto"
                        description2="Desarrollo de proyecto de análisis y fichas técnicas de producto con el objetivo de estructurar las características técnicas y logísticas de cada producto de catálogo.
                        Control de calidad de los productos del catálogo haciendo uso de instrumentos de medición mecánica y Microsoft Excel."
                        tagText="Ibi, España"
                        fecha="Nov 2021 – Dic 2021"
                        type='experience-block'
                        // showTag='tag__dont-show'
                        //showDescription2='p__dont-show'
                        projectSmallDescriptionShow='project-small-description__dont-Show'
                        upperBlockClass='experience-block-inner'
                        />
                </div>
            </div>

            <div className="soft-skills">
                    <div className="circle-1">Soft skill 1</div>
                <div className="circle-duo-1">
                    <div className="circle-1">Soft skill 1</div>
                    <div className="circle-1">Soft skill 1</div>
                </div>

                <div className="circle-main">Soft<br></br>Skills</div>

                <div className="circle-duo-1">
                    <div className="circle-1">Soft skill 1</div>
                    <div className="circle-1">Soft skill 1</div>
                </div>

                    <div className="circle-1">Soft skill 1</div>

            </div>
            

            <div className="hard-skills__container">

                <h3>Hard Skills</h3> 

                <div className="hard-skills">
                
                    <div className="hard-skills-icons">
                            <IconCircle icon={<IconArrow/>}/>
                            <IconCircle icon={<IconArrow/>}/>
                            <IconCircle icon={<IconArrow/>}/>
                            <IconCircle icon={<IconArrow/>}/>
                            <IconCircle icon={<IconArrow/>}/>
                    </div>
                    <div className="hard-skills-icons">
                    <IconCircle icon={<IconArrow/>}/>
                            <IconCircle icon={<IconArrow/>}/>
                            <IconCircle icon={<IconArrow/>}/>
                            <IconCircle icon={<IconArrow/>}/>
                            <IconCircle icon={<IconArrow/>}/>
                    </div>
                    <div className="hard-skills-icons">
                    <IconCircle icon={<IconArrow/>}/>
                            <IconCircle icon={<IconArrow/>}/>
                            <IconCircle icon={<IconArrow/>}/>
                            <IconCircle icon={<IconArrow/>}/>
                            <IconCircle icon={<IconArrow/>}/>
                    </div>
                </div>
            </div>

        </div>
    </div>
</>

}