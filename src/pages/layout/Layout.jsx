// import React from 'react'
// import Header from "../../components/header/Header"
// import { Outlet } from 'react-router-dom'
// import Footer from '../../components/footer/Footer'


// const Layout = () => {
//   return (
//     <>
//         <Header/>   
//         <main>
//             <Outlet/>
//         </main>
//         <Footer/>
        
//     </>
//   )
// }

// export default Layout
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isDetailPage = location.pathname.includes('/movie');

  return (
    <>
      <Header className={isDetailPage ? 'bg-transparent' : 'bg-black sticky top-0 left-0 z-[500]'} />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
