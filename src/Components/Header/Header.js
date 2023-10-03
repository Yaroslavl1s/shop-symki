import './Header.css';
import instagramblack from'../../image/instagramblack.png';
import searchblack from'../../image/searchblack.png'



function Header() {
  return (
    <div className="desktop">
            <div className="div">
                <header className="header">
                    <img className="vector" alt="Vector" src={instagramblack}/>
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