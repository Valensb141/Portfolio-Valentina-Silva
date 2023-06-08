import BtnLinkOrTag from '../btn-links-tags/BtnLinkOrTag';
import './SpaceTextBlock.scss';
import IconArrowGreen from '../icons/IconArrowGreen';


const SpaceTextBlock = (props) => {
    return (
        
        <>
            <div className='space__text__block'>
                <div className='text__block'>
                    <article className='p__gap'>
                        <p> {props.text} </p>
                        <p>{props.text2} </p>
                    </article>

                    <div className={props.btn}>
                        <BtnLinkOrTag type='btn btn__portfolio' text="¿Wanna know more?" to={props.to} icon={<IconArrowGreen />}/>
                    </div>
                </div>
            </div>
            
        </>
        
    );
};

export default SpaceTextBlock;
