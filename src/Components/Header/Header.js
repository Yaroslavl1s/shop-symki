import './Header.css';
import instagram from'../../image/instagram.png';
import search from'../../image/search.png'



function Header() {
  return (
    <div className="desktop">
            <div className="div">
                <header className="header">
                    <img className="vector" alt="Vector" src={instagram}/>
                    <div className="search">
                        <div className="overlap-group">
                            <input className="input" placeholder="Search..." type="text" />
                            <img className="iwwa-search" alt="Iwwa search" src={search} />
                        </div>
                    </div>
                </header>
            </div>
        </div>
  );
}

export default Header;