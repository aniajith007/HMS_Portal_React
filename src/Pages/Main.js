import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HealthMealCountdown from "./HealthMealCountdown";
import { Navigate, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate(); //useHistory changed useNavigate...
  const [startday, setStartday] = useState(""); // for countdown...
  const [starttime, setStarttime] = useState(""); // for countdown...

  const [ccid,setCCid] = useState("");
  const queryParams = new URLSearchParams(window.location.search);
  var id = queryParams.get("id");

  useEffect(() => {
    
    //setCCid(id);
    //var name = queryParams.get("name");
    //var type = queryParams.get("type");
    //console.log(ccid);
    if(id){
      console.log("id exist",id);
      Exec();  //executable codes
    }else{
      console.log("id not exist",id);
      navigate('/Error',{state:{message:"CC Number needed!!"}})
    }

    
  }, [ccid]);


  const Exec = ()=>{

    if (id && id !== null) {
      //not neccessary check if id not null
      console.log("Matchec");
      //console.log(ccid);
      //setCC(id);
      //console.log("cc",ccno);
      const datet = new Date();
      const fromday = 1;
      //console.log(datet.getDay());

      //set Startday for countdown
      setStartday(fromday);

      const fromtime = 14;
      //set start time for countdown
      setStarttime(fromtime);

      //console.log(starttime);

      const to_day = 5;

      //to_day = to_day == 0 ?7:to_day;

      const to_time = 3;

      //what if duration between 2 days or 3days so get days

      //run for the dates between

      //if startday is greater than endday
      //if startday is sat 6 end day 0 sun
      if (fromday > to_day) {
        console.log("startday> today");
        for (var t = to_day; t<=fromday; t++) {
          console.log("dates: ",t)
          if (t == datet.getDay()) {
            console.log(t);
            if (t === fromday) {
              if (datet.getHours() >= fromtime && datet.getHours() <= 23) {
                //console.log("Hours Matched");
                console.log("day1 starting date and hours matched");
                navigate("/reghms", { state: { ccno: id, accessToken: true } });
              } else {
                console.log("Not started");
              }
            } else if (t === to_day) {
              console.log("End day and -- startday>endday");
              if (datet.getHours() < to_time) {
                console.log("endday date and hours matched");
                navigate("/reghms", { state: { ccno: id, accessToken: true } });
              } else {
                console.log("end day elapsed!!");
              }

          } else {
              //if date is between from date and to date
              //considered as intermediate
              console.log("intermediate dates allowed");
              navigate("/reghms", { state: { ccno: id, accessToken: true } });
            }
          }
        }
      }

      //if startday is fri 5 end day 6 sat
      if (fromday < to_day) {
        for (var t = fromday; t <= to_day; t++) {
          console.log(t);
          if (t == datet.getDay()) {
            console.log(t);
            if (t == fromday) {
              if (datet.getHours() >= fromtime && datet.getHours() <= 23) {
                //console.log("Hours Matched");
                console.log("day1 starting date and hours matched");
                navigate("/reghms", { state: { ccno: id, accessToken: true } });
              } else {
                console.log("Not started");
              }
            } else if (t == to_day) {
              console.log("End day startday<endday");
              if (datet.getHours() < to_time) {
                console.log("endday date and hours matched");
                navigate("/reghms", { state: { ccno: id, accessToken: true } });
              } else {
                console.log("end day elapsed!!");
              }
            } else {
              //if date is between from date and to date
              //considered as intermediate
              console.log("intermediate dates allowed");
              navigate("/reghms", { state: { ccno: id, accessToken: true } });
            }
          }
        }
      }
    }

    console.log(id);

  }

  useEffect(() => {
    console.log("starttime,startday", startday, starttime);
    return(
      console.log("Cancelled...")
    );
  }, [startday, starttime]);

  //console.log(datet);
  return (
    <>
      <Navbar />
      <HealthMealCountdown startday={startday} starttime={starttime} />
      <Footer />
    </>
  );
}

export default Main;
