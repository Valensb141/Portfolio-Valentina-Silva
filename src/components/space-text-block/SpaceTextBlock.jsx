import BtnLinkOrTag from '../btn-links-tags/BtnLinkOrTag';
import './SpaceTextBlock.scss';
import IconArrowGreen from '../icons/IconArrowGreen';


const SpaceTextBlock = (props) => {
    return (
        
        <>
            <div className='space__text__block'>
                <div className='text__block'>
                    <article>
                        <p> {props.text} </p>
                    </article>

                    <div className={props.btn}>
                        <BtnLinkOrTag type='btn btn__portfolio' text="Saber más sobre mi" to={props.to} icon={<IconArrowGreen />}/>
                    </div>
                </div>
            </div>
            
        </>
        
    );
};

export default SpaceTextBlock;
