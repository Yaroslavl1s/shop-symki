import './Footer.sass';


function Footer() {
    return (
        <div>
            <footer className='footer'>
                <div className='footer__row'>
                    <div className='footer__logo'>
                        <h2>Logo</h2>
                        <p>© 2023  All rights reserved</p>
                    </div>
                    <div className='footer__nav'>
                        <h4>Menu —</h4>
            	        <div className="footer__nav__menu">
                            <ul className="footer__nav__pages">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Shop All</a></li>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Our Craft</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className='footer__nav__inf'>
                            <ul className="footer__nav__list">
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Shipping & Returns</a></li>
                                <li><a href="#">Store Policy</a></li>
                                <li><a href="#">Paymant Methods</a></li>
                                <li><a href="#">Stockists</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer__social'>
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href='#'>Instagram</a></li>
                        </ul>
                    </div>
                    <div className='footer__mail'>
                        <h4>Join Us!</h4>
                        <p>Email*</p>
                        <p>
                            <div className='footer__input'>
                                <input type="text" class="form__control" />
                                <span className='footer__bttn'>
                                    <button className='footer__btn' type='button'>
                                        <span className='footer__send'></span>
                                    </button>
                                </span>
                            </div>
                        </p>
                    </div>
                </div>
            </footer>
            <section>
                <p>Designed by <a href="http://enfoplus.net">Prince J. Sargbah</a></p>
            </section>
        </div>
    );
}

export default Footer;