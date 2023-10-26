import './FB.sass';
import { Link} from 'react-router-dom'
import instagramblack from './../../../../../image/instagramblack.png'


export const FB = () => {
    return (
        <header className="headerFB">
            <div className="headerFB__friends-box">FRIENDS BOX</div>

            <img className="instagramblack" alt="Vector" src={instagramblack} />
            
                <div className="headerFB__navbar">
                    <Link to="home">
                        <a className="headerFB__navbar__Btn"href='src/components/page/Home'>Home</a>
                    </Link>
                    <Link to="shop all">
                        <a className="headerFB__navbar__Btn"href='src/components/page/Shop'>Shop all</a>
                    </Link>
                    <Link to="our story">
                        <a className="headerFB__navbar__Btn"href='src/components/page/OurS'>Our Story</a>
                    </Link>
                    <Link to="our craft">
                        <a className="headerFB__navbar__Btn"href='src/components/page/OurC'>Our Craft</a>
                    </Link>
                    <Link to="contact">
                        <a className="headerFB__navbar__Btn"href="src/components/page/index">Contact</a>
                    </Link>
                </div>
        </header>
    )
}


