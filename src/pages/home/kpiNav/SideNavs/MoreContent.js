import React from 'react';

function MoreContent() {
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

        <div className="col-12 col-md-11">
          <div className="bg-[#d9f0fe] w-full p-4 mb-5 border-b-[5px] border-[#c5eafd] rounded-b-lg">
            <form className="first" method="POST" action="poo.php" enctype="multipart/form-data">
              <h3>Company Details</h3>
              <i className="text-yellow-500">Personal</i>
            <br />
              <input type="hidden" name="idi" value="11" className="rndtab" />
              <label className="block mt-4">Company Logo*</label>
              <input type="file" name="clogo" className="rndtab block mt-2 mb-4" />

              <label className="block mt-4">Company Name*</label>
            <input type="text" name="cfname" required value="KPI" className="w-full mt-1 p-2 border rounded" />

            <label className="block mt-4">Client Website Link*</label>
            <input type="text" name="cfname" required value="kpi.com" className="w-full mt-1 p-2 border rounded" />

            <label className="block mt-4">Client Country*</label>
            <input type="text" name="cfname" required value="India" className="w-full mt-1 p-2 border rounded" />

              <label className="block mt-4">Project Start Date*</label>
              <input type="date" name="date" required value="2022-06-17" className="rndtab block mt-2 mb-4 p-2" />

              <label className="block mt-4">Active Services</label>
              <select name="services" id="services" className="w-full mt-1 p-2 border rounded">
                <option value="SEO">SEO</option>
                <option value="SEM">SEM</option>
                <option value="SMM">SMM</option>
                <option value="WEB">WEB</option>
                <option value="EMAIL">EMAIL</option>
              </select>
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
    </div>
  );
}

export default MoreContent;
