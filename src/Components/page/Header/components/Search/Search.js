import './Search.sass';
import searchblack from'../../../../../image/searchblack.png'

export const Search = () => {
    return (
        <div className='search'>
            <input className='search__input' placeholder='Search..' type='search'></input>
            <img className='search__img' alt='search__img' src={searchblack}></img>
        </div>
    )
}