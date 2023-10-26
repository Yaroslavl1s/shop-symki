import { Footer } from '../../Components/page/Footer/Footer';
import { Outlet } from 'react-router-dom';
import React from 'react';
import './BaseLayout.sass';
import { Header } from '../../Components/page/Header/Header';
import { ScrollBtn } from '../../Components/page/ScrollBtn/ScrollBtn';
import { SearchProvider } from '../../hooks/context/SearchContext';

export const BaseLayout = () => {
  return (
    <div className="App">
      <SearchProvider>
        <Header />
        <Outlet />
        <ScrollBtn />
        <Footer />
      </SearchProvider>
    </div>
  );
};