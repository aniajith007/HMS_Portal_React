import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import Card from "../Components/Card";
import CardMain from "../Components/CardMain";
import Navbar from "../Components/Navbar";
import Cancellation from "../Components/Cancellation";
import Hero3 from "../Components/Hero3";
import { Navigate, useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const RegHMS = () => {
  const location = useLocation();  //if you use navigate with passing state data, then use UseLocation <--
  const navigate = useNavigate(); //useHistory changed useNavigate...
  const [name, setName] = useState("");
  //const [cc, setCC] = useState("");
  const [plant, setPlant] = useState("");
  const [weekdates,setWeekdates]= useState("");
  const [isReg,setIsreg] = useState(false);
  const [profile,setProfile] = useState("");
  const [cancelticket,setCancelticket] = useState(false);
  const [modalmessage,setModalmessage] = useState("");

  

  
  useEffect(() => {
    //console.log("token",token);
    //token = location.state.accessToken?location.state.accessToken:"false";

    location.state?console.log("ok"):navigate('/error')

    console.log("token",location);
    if(location.state.accessToken){
    setName("Swaminathan G");
    console.log("ccinreghms",location.state.ccno)   //getting the passed data from main navigator
    //setCC(location.state.ccno);
    //console.log("ccinreghms state",cc);
    const fromdate = "14-11-22";
    const todate = "19-11-22";
    const weekdate = fromdate+" - "+todate;
    setWeekdates(weekdate);
    setPlant("Padi");
    //setIsReg if he is already registered!!
    setIsreg(true);
    var filename = 'http://192.9.202.152/pis/trnenq/images/ccnos/'+location.state.ccno+'.jpg';
    console.log(filename);
    setProfile(filename);

    //recall asp
    //http://192.9.202.152/pis/trnenq/attendanceportal_com.asp   //bypassed

    //http://ltvsmailnet/pers/12536.jpg
    }else{
      navigate('/Error');
    }
  }, []);


  const HandleReg = (e) =>{
    setModalmessage(e.message);
    setIsreg(e.isReg);
  }

  const handlecancelbutton = (e) =>{
    //setModalmessage("")
    setCancelticket(e.cancelticket);
    //setTimeout(()=>{setIsreg(false);},3000)
    if(e.message === "Successfully Cancelled!"){
      setModalmessage(e.message);
      setIsreg(false);
    }else{
      setModalmessage(e.message)
      setCancelticket(true);
    }
    
  }
  const handlemodal = ()=>{
    setCancelticket(false);
  }

  return (
    <div>
    <Navbar />    
    {location?<Hero3 ccno = {location.state.ccno} name = {name} weekdates = {weekdates} plant = {plant} isReg={isReg} imgname = {profile} handlereg = {HandleReg}/>:<ErrorPage/>}
    {isReg?<Cancellation ccno = {location.state.ccno} handlecancelbutton = {handlecancelbutton}/>:""}

    <div className={cancelticket?"modal modal-open":"modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {modalmessage}
          </h3>
          <div className="modal-action">
            <label for="my-modal" className="btn" onClick={handlemodal}>
              Yay!
            </label>
          </div>
        </div>
      </div>

    </div>    
  );
};

export default RegHMS;
