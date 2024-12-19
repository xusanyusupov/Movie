import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../pages/layout/Layout';
import Home from '../pages/home/Home';
import Search from '../pages/search/Search';
import Session from '../pages/sessions/Session';
import Ticket from '../pages/tickets/Ticket'
import Detail from '../pages/detail/Detail';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} /> 
          <Route path='/search' element={<Search />} />
          <Route path='/session' element={<Session />} />
          <Route path='/ticket' element={<Ticket />} />
          <Route path='/movie/:id' element={<Detail/>} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
