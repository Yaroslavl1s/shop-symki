import './Header.css';
import instagram from'../../image/instagram.png';



function Header() {
  return (
    <div className="desktop">
            <div className="div">
                <header className="header">
                    <img className="vector" alt="Vector" src={instagram} />
                    <div className="search">
                        <div className="overlap-group">
                            <input className="input" placeholder="Search..." type="text" />
                            <img className="iwwa-search" alt="Iwwa search" src="search.png" />
                        </div>
                    </div>
                    <div className="friends-box">FRIENDS BOX</div>
                    <div className="navbar">
                        <div className="text-wrapper">Home</div>
                        <div className="text-wrapper-2">Shop all</div>
                        <div className="text-wrapper-3">Our story</div>
                        <div className="text-wrapper-4">Our craft</div>
                        <div className="text-wrapper-5">Contact</div>
                    </div>
                    <div className="group">
                        <div className="text-wrapper-6">Log in</div>
                        <div className="text-wrapper-7">Cart (0)</div>
                    </div>
                </header>
                <div className="text-wrapper-8">Slogan</div>
                <div className="shpo-the-collection">
                    <div className="overlap">
                        <button className="text-wrapper-9">Shop the collection</button>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Header;