import React, { useEffect, useState } from 'react';
import Countdown from '../Components/Countdown';
import 'animate.css';
import { WindupChildren,Pause } from "windups";
//import Lottie from "lottie-react";
//import animationClosed from '../closed.json';

const HealthMealCountdown=(props)=>{
    const [nextreg,setNextreg] = useState("");    
    
    const NextDate = (e)=>{
        //console.log("from main function",e);
        setNextreg(e);
        //console.log(nextreg);
    }    
    return (
        <div className="hero min-h-screen bg-base-200">                        
            <div className="hero-content text-center">
                <div className="max-w-md">
                <WindupChildren>
                
                    <h1 className="text-2xl font-bold">Hello there</h1>                                                            
                    <Pause ms={1000}/>
                </WindupChildren>
                    <h1 className="text-5xl font-bold capitalize animate__animated animate__flash animate__slow animate__infinite">REGISTRATION CLOSED!</h1>
                    <h1 className='text-2xl font-bold text-orange-400 my-3'>NEXT REGISTRATION ON {nextreg.get}</h1>
                    <Countdown nextregmethod = {NextDate} startday={props.startday} starttime = {props.starttime}/>                        
                </div>
            </div>            
        </div>
    )
}

export default HealthMealCountdown
