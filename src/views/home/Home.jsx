// import svg from '../public/vite.svg'; //las imágenes siempre ponerlas en la carpeta públixd¡c en caso de no tenerlas en un json
//import PrimaryBtn from "../components/btn/PrimaryBtn";
import IconArrow from '../../components/icons/IconArrow';
//import SecondaryBtn from "../components/btn/SecondaryBtn";
//import Tag from "../components/btn/Tag";
//import PortfolioBtn from "../components/btn/PortfolioBtn";
//import TitleTag from "../components/title-tag/TitleTag";
//import IconCircle from "../components/icon-circle/IconCircle";
import TextImgBlock from '../../components/text-img-block/TextImgBlock';
import './home.scss'


export default function Home() {
 return (
    <section>
       <TextImgBlock direction='project__container__imgToRight' title="Este es el proyecto" description="Esta es la descripción" icon={<IconArrow/>}/>
       <TextImgBlock direction='project__container__imgToLeft' title="Este es el proyecto" description="Esta es la descripción" icon={<IconArrow/>}/>
    </section>
 )
}

