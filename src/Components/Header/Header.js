import './Header.css';
import searchblack from'../../image/searchblack.png'
import instagramblack from'../../image/instagramblack.png'



function Header() {
  return (
    <div className="desktop">
            <div className="div">
                <header className="header">
                    <img className="vector" alt="Vector" src={instagramblackтз} />
                    <div className="search">
                        <div className="overlap-group">
                            <input className="input" placeholder="Search..." type="text" />
                            <img className="iwwa-search" alt="Iwwa search" src={searchblack} />
                        </div>
                    </div>
                </header>
            </div>
        </div>
  );
}

export default Header;