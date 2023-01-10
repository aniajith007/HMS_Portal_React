import 'animate.css';
import { useState } from 'react';
import Spinner from './Spinner';

const Cancellation = (props) => {
  const [buttPressed,setButttPressed] = useState(false);
  const handlecancel = () =>{
    console.log("CC for cancellation",props.ccno);
    //get api response and set message in modal 
    //set the isReg true in regpage if its successfully registered other wise show a message in modal handler

    setButttPressed(true);
    setTimeout(()=>{
      props.handlecancelbutton({cancelticket:true,message:"Successfully Cancelled!"});
      setButttPressed(false);
    },3000);
    
  }
  return (
    <div className="mx-20 my-10 animate__animated animate__fadeIn animate__delay-2s">
        <div className="divider font-bold">VIEWS</div>
      <div className="alert shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">From : 14-11-2022 To : 19-11-22</h3>
            <div className="text-xs">Registered for HealthMeals</div>
          </div>
        </div>
        <div className="flex-none">
          {!buttPressed?
          <button className="btn btn-sm bg-red-500 text-white border-none" onClick={handlecancel}>Cancel</button>
          :<Spinner/>
          }
        </div>
      </div>      
    </div>
  );
}

export default Cancellation;
