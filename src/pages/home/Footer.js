
import React from 'react';
import './Home.css';


function ContentArea() {
  return (
    <div className="content-area">
      <div id="toparea" className="style1">
        <div className="console-dashboard-title"></div>
      </div>
      <div className="grid-stack middle__body body__wpr gs-area grid-stack-instance-6324 grid-stack-animate" data-gs-current-height="0" style={{height: '0px'}}>
        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-11">
              <div style={{
                backgroundColor: '#d9f0fe',
                width: '100%',
                padding: '15px 15px',
                marginBottom: '20px',
                borderBottom: '5px solid #c5eafd'
              }}>
                <h1 style={{fontWeight: 500}}>KPI-Main</h1>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div style={{minHeight: '100%', width: '100%', textAlign: 'center'}}>
          <div className="container-fluid text-center">
            <div className="row">
              <div className="col-12 col-md-11">
                <div>
                  <iframe src="https://datastudio.google.com/embed/reporting/1Pcbfm3MQKl2teGS5JHSsOHm-VNn4LLZH/page/D47b" frameBorder="0" style={{border: 0}} allowFullScreen=""></iframe>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ContentArea;

