// import svg from '../public/vite.svg'; //las imágenes siempre ponerlas en la carpeta públixd¡c en caso de no tenerlas en un json
//import PrimaryBtn from "../components/btn/PrimaryBtn";
import IconArrow from '../../components/icons/IconArrow';
//import SecondaryBtn from "../components/btn/SecondaryBtn";
//import Tag from "../components/btn/Tag";
//import PortfolioBtn from "../components/btn/PortfolioBtn";
//import TitleTag from "../components/title-tag/TitleTag";
import TextBlock from "../../components/text-img-block/TextBlock";
//import IconCircle from "../components/icon-circle/IconCircle";
import ImgBlock from '../../components/text-img-block/ImgBlock';
import './home.scss'

export default function Home() {
 return (
    <section>
        <div className='project__container'>
            <ImgBlock alt="este es el alt"/>
            <TextBlock title="Nombre del proyecto" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci lectus, eleifend et lorem vel, scelerisque tempor augue. Aenean gravida feugiat pretium. Donec mattis ante ut libero condimentum ornare." circleIcon={<IconArrow />} circleIcon={<IconArrow />}/>
        </div>
    </section>
 )
}

