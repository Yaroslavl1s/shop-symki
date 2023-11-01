import { Footer } from '../../Components/page/Footer/Footer';
import { Outlet } from 'react-router-dom';
import React from 'react';
import './BaseLayout.sass';
import { Header } from '../../Components/page/Header/Header';
import { SearchProvider } from '../../hooks/context/SearchContext';
import { Shop } from '../../Components/Shop/Shop';

export const BaseLayout = () => {
  return (
    <div className="App">
      <SearchProvider>
        <Header />
        <Outlet />
        <Footer />
      </SearchProvider>
         <Shop />
    </div>
  );
};