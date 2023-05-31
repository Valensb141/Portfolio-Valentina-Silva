import './About.scss'
import me from '../../images/me.png'
import BtnLinkOrTag from '../../components/btn-links-tags/BtnLinkOrTag'
import TitleTextTag from '../../components/title-text-tag/TitleTextTag'

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
            <TitleTextTag 
            title="ESCUELA SUPERIOR DE ARTE Y TECNOLOGÍA"
            description1="Postgrado de Diseño UX/UI, Maquetación Web y Marketing Digital."
            tagText="Valencia, España"
            fecha="Oct 22 – Jun 23"
            />
        </div>
    </div>
</>

}