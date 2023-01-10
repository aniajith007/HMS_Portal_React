import React, { useState } from "react";
import Card from "./Card";
import "animate.css";
import {WindupChildren, useIsFinished, useRewind,Pace, StyledText} from 'windups';
import Spinner from "./Spinner";


function Hero3(props) {

  const [buttPressed,setButttPressed] = useState(false);
  //get profile name from reg page and forward to card

  const handleRegister = ()=>{
    console.log("Registeration successfully completed for this ",props.ccno);
    
    setButttPressed(true);        
    setTimeout(()=>{setButttPressed(false);
      props.handlereg({isReg:true,message:"Successfully Registered!!"});
    },3000) 
  }

  const RewindButton = () => {
    const rewind = useRewind();
    return <button onClick={rewind}>{"Rewind"}</button>;
  }

  const FinishedIndicator = () => {
    const isFinished = useIsFinished();
    return isFinished ? "✔" : null;
  }
  const playMorseSound = ()=>{
    alert("gottitt!!");
  }

  return (
    <div className="mockup-window border border-base-500 mx-4">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center dark:text-gray-200">      
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2 animate__animated animate__fadeInLeft animate__delay-1s">
          <Card ccno={props.ccno} name={props.name} imgname={props.imgname} />
          {
            //<img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="glasses photo"/>
          }
        </div>

        

        <WindupChildren>
        
        </WindupChildren>
        <div className="w-full lg:w-1/2">        
          <div className="lg:max-w-lg"><WindupChildren><RewindButton/><FinishedIndicator/>
            <h1 className="text-3xl font-bold tracking-wide text-gray-800 lg:text-5xl ">
              Register{" "}
              <h1 className="text-blue-500">
                Here!
              </h1>
              <h1>
                For
              </h1>{" "}
              <Pace ms={200}><StyledText>
              <h1 className="text-orange-400">
                Health Meals!!
              </h1></StyledText></Pace>
            </h1></WindupChildren>
            <div className="mt-8 space-y-5">            
              <p className="flex items-center -mx-2 text-gray-700 ">
                {/*<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>*/}

                <img
                  src="factory.png"
                  className="m-2  animate__animated animate__fadeIn animate__delay-2s"
                />

                <span className="mx-2 font-bold animate__animated animate__fadeIn animate__delay-1s">
                  Plant : {props.plant}
                </span>
              </p>                          
            </div>
          </div>
          
          <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40  animate__animated animate__fadeIn animate__delay-3s">
            {props.isReg ? (
              <div className="flex w-full max-w-sm overflow-hidden border-none bg-white rounded-md shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-center w-12 bg-emerald-500">
                  <svg
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                  </svg>
                </div>

                <div className="px-4 py-2 -mx-3">
                  <div className="mx-3">
                    <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                      Registered
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-200">
                      Your Health-Meals was registered!
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form className="flex flex-col lg:flex-row animate__fadeIn animate__delay-2s">
                <span className="flex-1 h-10 px-4 py-2 m-1 text-black bg-transparent border-none appearance-non focus:outline-none focus:placeholder-transparent focus:ring-0">
                  <h1 className="font-bold">{props.weekdates}</h1>
                </span>

                {!buttPressed?<button
                  type="button"
                  className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                  onClick={handleRegister}
                >
                  Register
                </button>:<Spinner/>}
              </form>
            )}
          </div>
        </div>        
      </div>      
    </div>
  );
}

export default Hero3;
