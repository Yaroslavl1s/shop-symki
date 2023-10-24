import './Header.css';
import React from 'react';
import { FB, LC, Search} from './components';


export const Header = ({searchValue, setSearchValue}) => {
  return (
    <div>
      
    <>
    <FB/>
    <LC/>
    <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
    </>
          
    </div>
  );
}
