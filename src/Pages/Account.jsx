import React from 'react'
import Savedshow from '../Component/Savedshow'

const Account = () => {
  return (
    <>
    <div className=' w-full text-white'>
       <img
        className="w-full h-[400px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/NG-en-20240909-TRIFECTA-perspective_27b06e81-2424-46bb-a92a-cfdb067a2cda_large.jpg"
        alt=""
      />
      <div className=' bg-black/60 fixed top-0 w-full h-[500px]'></div>
      <div className=' absolute top-[20%] p-4 md:p-8'>
      <h1 className=' text-3xl md:text-5xl font-bold'>My shows</h1>

      </div>
    </div>
    <Savedshow/>
    </>
  )
}

export default Account
