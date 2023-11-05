import './Search.sass';
import { Link } from 'react-router-dom'
import searchblack from'../../../../../image/searchblack.png'

export const Search = () => {
    return (
        <div className='search'>
            <input className='search__input' placeholder='Search..'></input>
            <img className='search__img' alt='search__img' src={searchblack}></img>
        </div>
    )
}