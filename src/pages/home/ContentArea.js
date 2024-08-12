import React from 'react';
import './Home.css';

function ContentArea() {
  return (
    <div className="content-area" style={{backgroundColor: '#f0f6ff', height: '1300px'}}>
      <div id="toparea" className="style1" >
        <div className="console-dashboard-title"></div>
      </div>
      <div className="grid-stack middle__body body__wpr gs-area grid-stack-instance-6324 grid-stack-animate" data-gs-current-height="0" style={{height: '0px'}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-11">
              <div style={{
                backgroundColor: '#d9f0fe',
                width: '95%',
                padding: '15px 15px',
                marginBottom: '20px',
                borderBottom: '5px solid #c5eafd'
              }}>
                <h1 style={{fontWeight: 500}}>KPI-Main</h1>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: '1110px', textAlign: 'center', height: '1000px' }}> 
       <div className="container-fluid text-center">
        <div className="row">
          <div className="col-12 col-md-11">
            <div style={{ width: '100%', textAlign: 'center' }}>
              <iframe
                src="https://datastudio.google.com/embed/reporting/1Pcbfm3MQKl2teGS5JHSsOHm-VNn4LLZH/page/D47b"
                
                style={{ border: '0px', width: '100%', height: '1000px'}}
                title="Data Studio Report"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default ContentArea;
