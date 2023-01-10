import React from 'react'
import ReviewItem from './ReviewItem'

function ReviewContainer() {
  return (<>
    <div className=" bg-slate-100 shadow-sm rounded-md p-2 justify-center w-100 scroll-m-2">
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      </div>
      <button className="btn btn-wide bg-blue-500 rounded-md m-2 border-none">Done</button>      
      </>
  )
}

export default ReviewContainer