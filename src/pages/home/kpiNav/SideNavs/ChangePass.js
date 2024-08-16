import React from 'react';
import Header from '..//../Header';
import Navigation from '..//../Navigation';
import Sidebar from '..//SideNavs/SMore';

import Footer from '..//../Footer';
import ContentArea from '..//SideNavs/cPass';
import '..//../Home.css';

function ChangePass() {
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

export default ChangePass;
