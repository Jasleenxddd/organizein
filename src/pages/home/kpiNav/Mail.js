import React from 'react';
import Header from '../Header';
import Navigation from '../Navigation';
import Sidebar from '../kpiNav/SideNavs/SMail';
import Footer from '../Footer';
import ContentArea from '../ContentArea';
import '../Home.css';

function Web() {
  return (
    <div className="theme-body">
      <div className="theme-wrapper">
        <Header />
        <Navigation />
        <div className="theme-content" >
          <Sidebar />
          <ContentArea />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Web;
