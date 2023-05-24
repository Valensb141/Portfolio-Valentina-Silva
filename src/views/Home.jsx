// import svg from '../public/vite.svg'; //las imágenes siempre ponerlas en la carpeta públixd¡c en caso de no tenerlas en un json
import PrimaryBtn from "../components/btn/PrimaryBtn";
import IconArrow from '../components/icons/IconArrow';
import SecondaryBtn from "../components/btn/SecondaryBtn";
import TertiaryBtn from "../components/btn/TertiaryBtn";
import PortfolioBtn from "../components/btn/PortfolioBtn";

export default function Home() {
 return (
    <>
     <h1>Hla soy la home</h1>
     <PrimaryBtn text="Primary btn" icon={<IconArrow />}/>
     <SecondaryBtn text="Secondary btn"/>
     <TertiaryBtn text="Tertiary btn"/>
     <PortfolioBtn text="Ver más" icon={<IconArrow />}/>
    <img src="/logo.png" alt="logo" />
</>
 )

 
}

