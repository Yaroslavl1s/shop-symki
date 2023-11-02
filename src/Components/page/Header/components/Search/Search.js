import './Search.sass';
import { Link } from 'react-router-dom'
import searchblack from'../../../../../image/searchblack.png'

export const Search = () => {
    return (
        <div className='search'>
            <div className="search__window">
                <input className="search__input" placeholder="Search..." type="text" />
                <img className="search__img" alt="Iwwa search" src={searchblack} />
            </div>
        </div>
    )
}