import React, { useState } from 'react'

function TimeLive() {
    const [ti, setTi] = useState("");
    const refreshTime = () => {
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let hours = new Date().getHours().toLocaleString();
        let minutes = new Date().getMinutes().toLocaleString();
        let secs = new Date().getSeconds().toLocaleString();
        let Dayvalue = new Date().getDay();
        let Day = weekday[Dayvalue];
        let ti =Day  +" "+hours + "H : " + minutes + "m : " + secs + "s";
        setTi(ti);
      };
      setInterval(refreshTime, 1000); 
  return (
    <div>TimeLive : {ti}</div>
  )
}

export default TimeLive