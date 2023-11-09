import './Search.sass';

export const Search = () => {
    return (
        <form className='search'>
            <input type='text' className='search__input' placeholder='Search..'></input>
            <button type="submit" className='search__btn' alt='submit'></button>
        </form>
    )
}