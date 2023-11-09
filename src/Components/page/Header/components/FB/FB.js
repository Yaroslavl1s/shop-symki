import './FB.sass';
import { Link } from 'react-router-dom'
import instagramblack from './../../../../../image/instagramblack.png'


export const FB = () => {
    return (
        <header className="headerFB">
            <div className="headerFB__friends-box">FRIENDS BOX</div>
            <div className="LoginCart">
                <Link to="https://instagram.com/_friends_box?igshid=YTQwZjQ0NmI0OA==" target="_blank">
                    <button className="instagramblack"><img className="instagramblack" alt="Vector" src={instagramblack} /></button>
                </Link>
                <Link>
                    <a className="Login" href='src/components/page/LC'>Log in</a>
                </Link>
                <Link>
                    <a className="Cart" href='src/components/page/LC'>Cart</a>
                </Link>
            </div>
                <div className="headerFB__navbar">
                    <Link to="home">
                        <a className="headerFB__navbar__Btn"href='src/components/page/Home'>Home</a>
                    </Link>
                    <Link to="shop-all">
                        <a className="headerFB__navbar__Btn"href='src/components/page/Shop'>Shop all</a>
                    </Link>
                    <Link to="AboutUS">
                        <a className="headerFB__navbar__Btn"href='src/components/page/AboutUS'>About Us</a>
                    </Link>
                    <Link to="contact">
                        <a className="headerFB__navbar__Btn"href="src/components/page/index">Contact</a>
                    </Link>
                </div>
        </header>
    )
}