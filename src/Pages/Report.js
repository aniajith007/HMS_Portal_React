import React, { useEffect, useRef, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import BottomNav from "../Components/BottomNav";
import Navbar from "../Components/Navbar";
import NavforReport from "../Components/NavforReport";
import ReportTable from "../Components/ReportTable";

const Report = () => {   
  const location = useLocation();
  const navigate = useNavigate();
  location.state == null?console.log("not logged in"):console.log("logged in");  
  location.state?console.log("signed in"):navigate('/error',{state:{message : "Unauthorised Entry!!!",link : "login"}});
  const [lisst, setlisst] = useState([]);  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Empdata",
    onafterprint: () => alert("Print success!!"),
  });

  var filename = 'http://192.9.202.152/pis/trnenq/images/ccnos/';

  useEffect(() => {
    const list = [];
    for (var i = 1; i <= 200; i++) {
      const itemss = {
        sno: i,
        ccno: 12535 + i,
        Name: "Swaminathan G",
        status: "Registered!",
      };
      list.push(itemss);
    }
    setlisst(list);
  }, []);     

  return (
    <div>
      <Navbar pagename={"Reports"} />
      <div className="relative">
        <div className="sticky top-0 z-50">
      </div></div>
      <ReportTable list={lisst} imgname = {filename} handleprint={handlePrint} type = {"reports"}/>
      <div
        ref={componentRef}
        className="invisible overflow-hidden overflow-x-hidden h-4 print:visible print:overflow-visible print:h-full"
      >
        {
          //lisst.map(()=><h1 className="font-bold justify-center">Hello everyone!!</h1>)

          <div class="relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 static">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    S.NO
                  </th>
                  <th scope="col" class="py-3 px-6">
                    CC NO
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Name
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Monday
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Tuesday
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Wednesday
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Thursday
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Friday
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Saturday
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Sunday
                  </th>
                </tr>
              </thead>
              <tbody>
                {lisst.map((elem) => (
                  <tr key = {elem.sno} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {elem.sno}
                    </th>
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {elem.ccno}
                    </th>
                    <td class="py-4 px-6">{elem.Name}</td>
                    <td class="py-4 px-6">
                      <div className="box-border border-spacing-2 border-blue-400 border-2 p-3 rounded-md w-14 justify-center m-2" />
                    </td>
                    <td class="py-4 px-6">
                      <div className="box-border border-spacing-2 border-blue-400 border-2 p-3 rounded-md w-14 justify-center m-2" />
                    </td>
                    <td class="py-4 px-6">
                      <div className="box-border border-spacing-2 border-blue-400 border-2 p-3 rounded-md w-14 justify-center m-2" />
                    </td>
                    <td class="py-4 px-6">
                      <div className="box-border border-spacing-2 border-blue-400 border-2 p-3 rounded-md w-14 justify-center m-2" />
                    </td>
                    <td class="py-4 px-6">
                      <div className="box-border border-spacing-2 border-blue-400 border-2 p-3 rounded-md w-14 justify-center m-2" />
                    </td>
                    <td class="py-4 px-6">
                      <div className="box-border border-spacing-2 border-blue-400 border-2 p-3 rounded-md w-14 justify-center m-2" />
                    </td>
                    <td class="py-4 px-6">
                      <div className="box-border border-spacing-2 border-blue-400 border-2 p-3 rounded-md w-14 justify-center m-2" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
      </div>      
    </div>
  );
};

export default Report;
