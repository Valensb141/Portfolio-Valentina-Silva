import './Header.scss'
import BtnLinkOrTag from '../btn-links-tags/BtnLinkOrTag';


const Header = (props) => {
    return (
       
        <div className='header'>
                <h4>Portfolio</h4>
                <h1 className='name'>Valentina Silva</h1>
                {/* <BtnLinkOrTag  type='btn btn__tag' text={props.tagtext}/> */}

                <div className="inner__headings">
                    <span>
                        UX/UI Designer <br />
                        Frontend developer <br />
                        Graphic designer <br />
                    </span>
                </div>
        </div>
        
    );
};

export default Header;