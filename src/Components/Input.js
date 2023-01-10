import React from 'react'

const Input = (props)=> {
    console.log(props.name)
  return (    
    <div className="form-control">
  
  <label className="input-group">
    <span>{props.label}</span>
    <input type={props.type} placeholder={props.placeholder} className="input input-bordered" />    
  </label>
  <button className="btn bg-blue-500 hover-bordered text-white font-semibold my-2 p-2"> Go!</button>
</div>
  )
}

export default Input