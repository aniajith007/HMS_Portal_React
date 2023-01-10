import React from 'react'

function Card(props) {
  //getting ccno and name from props
  //get image name also
  console.log(props.imgname);
  return (<>
    <div className="flex flex-col items-center justify-center max-w-sm mx-auto p-4">
    <div className="w-full h-64 justify-center bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: `url(${props.imgname})`}}></div>

    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">CCNO : {props.ccno}</h3>

        <div className="flex items-center justify-between px-3 py-2 text-center bg-gray-200 dark:bg-gray-700">
            <span className="font-bold text-gray-800 p-2 justify-center dark:text-gray-200 text-center uppercase tracking-wide">NAME : {props.name}</span>
            {//<button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
            }
        </div>
    </div>
</div>
</>
  )
}

export default Card