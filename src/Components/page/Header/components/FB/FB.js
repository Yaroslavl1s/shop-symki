import './FB.sass';
import { Link} from 'react-router-dom'



export const FB = () => {
    return (
        <header className="headerFB">
            <div className="headerFB__friends-box">FRIENDS BOX</div>
                <div className="headerFB__navbar">
                    <Link to="home">
                        <a href='src/components/page/Home'>Home</a>
                    </Link>
                    <Link to="shop all">
                        <a href='src/components/page/Shop'>Shop all</a>
                    </Link>
                    <Link to="our story">
                        <a href='src/components/page/OurS'>Our Story</a>
                    </Link>
                    <Link to="our craft">
                        <a href='src/components/page/OurC'>Our Craft</a>
                    </Link>
                    <Link to="contact">
                        <a href="src/components/page/index">Contact</a>
                    </Link>
                </div>
        </header>
    )
}


