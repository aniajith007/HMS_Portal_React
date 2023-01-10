import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Countdown = (props) => {
  //var [ti, setTi] = useState();
  var [hours, setHours] = useState("");
  var [days, setDate] = useState("");
  var [minutes, setMinutes] = useState("");
  var [secs, setSecs] = useState("");
  var [daycode, setDaycode] = useState("");
  const navigate = useNavigate(); //useHistory changed useNavigate...

  //console.log(props.startday,props.starttime);

  const refreshTime = () => {
    //get day code

    //Every thursday - 04 daycode
    //if 4 == daycode date()+7 will next thursday
    //if 4 > 1,2,3 ==> 4 - daycode will be next thursday
    //if 4 < 5,6,7 ==> 7 - daycode + 4 will be next thursday

    //using startday from props to set start daycode; 4 replacement

    var daycode = new Date().getDay();
    setDaycode(daycode);
    //console.log(daycode);
    if (daycode == props.startday) {
      var nextDayDate = new Date(); // The Date object returns today's timestamp
      nextDayDate.setDate(nextDayDate.getDate() + 7);
    } else if (daycode < props.startday) {
      var nextDayDate = new Date(); // The Date object returns today's timestamp
      nextDayDate.setDate(nextDayDate.getDate() + (props.startday - daycode)); //thursday 4 - mon 1 -->add 3 more days to fetch next thursday
      //console.log(nextDayDate);
    } else if (daycode > props.startday) {
      var nextDayDate = new Date(); // The Date object returns today's timestamp
      nextDayDate.setDate(
        nextDayDate.getDate() + (7 - daycode + props.startday)
      ); //friday 5  7 - 5 = 2 + (4)next thursday = 6      
    }
    
    const currdate = new Date();    
    if (currdate.getDay() == props.startday) {
      setDate("00");

      let hrs = props.starttime - currdate.getHours() + 23;
      let hrsres = hrs >= 24 ? hrs - 24 : hrs;      //starttime will be 23< currtime will be 23<
      setHours(hrsres);      
    } else {

      setDate(nextDayDate.getDate()-currdate.getDate());   // 10 mon -- next 16 mon -- 6 da      
      let hrs = props.starttime - currdate.getHours() + 23;
      let hrsres = hrs >= 24 ? hrs - 24 : hrs;
      //setHours((props.starttime - currdate.getHours() + 23));  //starttime will be 23< currtime will be 23<
      setHours(hrsres);
    } //next thursday 00
    //next thursday 00
    setMinutes(60 - currdate.getMinutes()); //next thursday 00
    setSecs(60 - currdate.getSeconds()); //next thursday 00
  };
  var inter = setInterval(refreshTime, 1000);

  useEffect(() => {
    //console.log("countdown  :", days, " ", hours, " ", minutes, " ", secs);
    return()=>{
      clearInterval(inter);
      //console.log("Interval Clearedd");
    }
      
  }, [days, hours, minutes, secs]);

  //console.log(nextDayDate.getDate() - new Date().getDate() + "Days" + (24 - nextDayDate.getHours() - (new Date().getDate()*24)) + "Hours" );
  //console.log(nextDayDate.getDate() - new Date().getDate() + "Days" + (24 - currdate.getHours()) + " Hours" + (60 - currdate.getMinutes()) + "Minutes" + (60-currdate.getSeconds()) );
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": days }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": hours }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": minutes }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": secs }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Countdown;
