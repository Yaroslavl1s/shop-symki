import './Search.sass';
import { Link} from 'react-router-dom'
import searchblack from'../../../../../image/searchblack.png'

export const Search = () => {
    return (
        <div>
            <div className="search">
                    <div className="overlap-group">
                        <input className="input" placeholder="Search..." type="text" />
                        <img className="iwwa-search" alt="Iwwa search" src={searchblack} />
                    </div>
            </div>
        </div>
    )
}