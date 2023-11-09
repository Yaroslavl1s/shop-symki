import './Footer.sass';
import { Link} from 'react-router-dom'

export const Footer =() => {
    return (
        <div>
            <footer className='footer'>
                <div className='footer__row'>
                    <div className='footer__logo'>
                        <h2>Logo</h2>
                        <p>© 2023  All rights reserved</p>
                    </div>
                    <div className='footer__nav'>
                        <h4></h4>
            	        <div className="footer__nav__menu">
                            <ul className='footer__nav__pages'>
                                <li>
                                    <Link to="home">
                                        <a href='src/components/page/Home'>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="shop-all">
                                        <a href='src/components/page/Shop'>Shop all</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="our-story">
                                        <a href='src/components/page/OurS'>Our Story</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="our-craft">
                                        <a href='src/components/page/OurC'>Our Craft</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="contact">
                                        <a href="src/components/page/index">Contact</a>
                                    </Link>
                                </li>
                            </ul>
                            {/*
                            <ul className="footer__nav__pages">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Shop All</a></li>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Our Craft</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                            */}
                        </div>
                        <div className='footer__nav__inf'>
                            <ul className="footer__nav__list">
                                <li>
                                    <Link to="FAQ">
                                        <a href='src/Components/FAQ'>FAQ</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="S_R">
                                        <a href='src/Components/S_R'>Shipping & Returns</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="StrPol">
                                        <a href='src/Components/StrPol'>Store Policy & Payment</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer__social'>
                        <h4>Follow Us</h4>
                        <ul>
                            <li>
                                <Link to="https://instagram.com/_friends_box?igshid=YTQwZjQ0NmI0OA==" target="_blank">
                                    <a>Instagram</a>
                                </Link>
                            </li> 
                        </ul>
                    </div>
                    {/*
                    <div className='footer__mail'>
                        <h4>Join Us!</h4>
                        <p>Email</p>
                        <p>
                            <div className='footer__input'>
                                <input type="text, email" className="footer__control" />
                                <span className='footer__bttn'>
                                    <button className='footer__btn' type='button'>
                                        <span className='footer__send'></span>
                                    </button>
                                </span>
                            </div>
                        </p>
                    </div>
                    */}
                    <form className='footer__form'>
                        <h4 className='footer__form__title'>Join Us!</h4>
                        <input type='email' className='footer__form__inp' placeholder="Email.."></input>
                        <button className='footer__form__btn'>Send Message</button>
                    </form>
                </div>
            </footer>
            <section className='designed'>
                <p>Designed by <a href="">The Boys</a></p>
            </section>
        </div>
    );
}
