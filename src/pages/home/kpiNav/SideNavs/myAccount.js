import React from 'react';

function myAccount() {
  return (
    <div className="flex-auto pl-8 w-full md:w-[1000px] order-2 pb-24 bg-[#f0f6ff]">
      <div id="toparea" className="style1">
        <div className="flex justify-between items-center w-[80%] mt-5 ml-2 mb-7">
          {/* Dashboard Title */}
          {/* <h1 className="text-2xl font-light">
            <strong className="text-[#5d8bd0]">Dashboard</strong>
          </h1> */}
        </div>
      </div>

      <div className="grid-stack middle__body body__wpr gs-area grid-stack-instance-1273 grid-stack-animate">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-11">
              <div className="bg-[#d9f0fe] w-full p-4 mb-5 border-b-[5px] border-[#c5eafd] rounded-t-lg">
                <h1 className="font-medium">Company Details</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#d9f0fe] w-full p-4 mb-5 border-b-[5px] border-[#c5eafd] rounded-b-lg">
          <form className="first" method="POST" action="poo.php" enctype="multipart/form-data">
            <h3 >Main Details</h3>
            <i className="text-yellow-500">Personal</i>
            <br />
            <input type="hidden" name="idi" value="11" />
            <label className="block mt-4">Client F Name*</label>
            <input type="text" name="cfname" required value="David F" className="w-full mt-1 p-2 border rounded" />
            <label className="block mt-4">Client L Name*</label>
            <input type="text" name="clname" required value="Grubb" className="w-full mt-1 p-2 border rounded" />
            <label className="block mt-4">Client Email*</label>
            <input type="email" name="cemail" required value="david@cmitdigital.com" className="w-full mt-1 p-2 border rounded" />
            <label className="block mt-4">Client Address*</label>
            <input type="text" name="caddr" required value="KPHB" className="w-full mt-1 p-2 border rounded" />
            <label className="block mt-4">Client Phone*</label>
            <input type="text" name="cphone" required value="2147483647" className="w-full mt-1 p-2 border rounded" />
            <label className="block mt-4">Client Password*</label>
            <input type="password" name="cpass" required value="123123" className="w-full mt-1 p-2 border rounded" />
            <label className="block mt-4">User Picture*</label>
            <input type="file" name="clogo" className="rndtab block mt-2 " />
            <input type="hidden" name="oldcpic" value="tzQLFhgu_400x400.png" />
            <br />
              <input
                type="submit"
                value="Update Account"
                name="submit"
                className="bg-[#1077a2] text-white py-1 px-8 mt-6 ml-50 rounded-lg"
              />
          </form>
        </div>
      </div>
    </div>
  );
}

export default myAccount;
