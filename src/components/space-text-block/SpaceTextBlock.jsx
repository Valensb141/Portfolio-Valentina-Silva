import './SpaceTextBlock.scss';

const SpaceTextBlock = (props) => {
    return (
        
        <>
            <div className='space__text__block'>
                <article className='text__block'>
                    <p> {props.text} </p>
                </article>
            </div>
            
        </>
        
    );
};

export default SpaceTextBlock;
