import React from 'react'
import notfound from '../../Images/error-page-not-found-vector-27898543.jpg'

export default function Notfound() {

  document.title = "404";

  return <>

  <div className='  text-center'>
      <img className=' w-75 vh-100' src={notfound} alt="page not found" />
  </div>
  
  </>
}
