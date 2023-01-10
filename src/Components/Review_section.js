import React from 'react'
import ReviewItem from './ReviewItem'
import { useState } from 'react';
function Review_section() {
  const [selected,setSelected] = useState("");
  const [classs, setClasss] = useState("");
  const handlecolor = (id) =>{
    console.log("selected id",id);
    setSelected(id);
    var cla = "px-4 py-2 text-sm font-medium text-white capitalize bg-blue-600 md:py-3 rounded-xl md:px-12";
    setClasss(cla);

  }
  return (
    <div>
      <div className="flex items-center justify-center my-3">
        <div className="flex items-center p-1 border border-blue-600 dark:border-blue-400 rounded-xl">
          <button className={selected=="design"?classs:"px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12"} onClick={()=>handlecolor("design")}>All</button>
          <button className={selected=="development"?classs:"px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12"} onClick={()=>handlecolor("development")}>Gravy's</button>
          <button className={selected=="marketing"?classs:"px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12"} onClick={()=>handlecolor("marketing")}>side - dishes</button>
          <button className={selected=="maindish"?classs:"px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12"} onClick={()=>handlecolor("maindish")}>Main - Dishes</button>
        </div>
      </div>      
    </div>
  )
}

export default Review_section