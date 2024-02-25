import React from "react";
import $ from 'jquery';
import './Contacts.css';
import {getNavHeight} from '../Navbar/Navbar'


export default function Contacts() {

  document.title = "Contacts";


  function showLabel(inputId) {
    const input = document.getElementById(inputId);
    const label = document.querySelector(`label[for="${inputId}"]`);
  
    if (input.value !== '') {
      label.classList.remove('label-hidden');
      $(label).animate({top:0} , 500)
      
    } else {
      
      label.classList.add('label-hidden');
    }
  }
  


  return (
    <div className=" py-4 " style={{marginTop: getNavHeight()}} >
      <div className=" text-center mb-5 ">
        <h2 className=" fw-bolder fs-1 mt-4">CONATCT SECTION</h2>

        <div className="star-container">
          <div className="line bg-black"></div>
          <i className="fa-solid fa-star fs-4 mx-2"></i>
          <div className="line bg-black"></div>
        </div>
      </div>

      <div className=" d-flex justify-content-center align-items-center">
        <form className=" w-50">
          <div className=" container form-div"> 
            <div className="row gy-4 ">
              <div className=" col-md-12 pt-5 position-relative">
                <label htmlFor="userName" className=" label-hidden fs-5 text-bg-main position-absolute  ">userName:</label>
                <input
                  className=" form-control border-0 border-bottom shadow-none"
                  onInput={function(){showLabel('userName')}}
                  id="userName"
                  type="text"
                  placeholder="userName"
                />
              </div>
              <div className=" col-md-12 pt-5 position-relative">
                <label htmlFor="userAge" className=" label-hidden fs-5 text-bg-main position-absolute">userAge:</label>
                <input
                  className=" form-control border-0 border-bottom shadow-none"
                  onInput={function(){showLabel('userAge')}}
                  id="userAge"
                  type="number"
                  placeholder="userAge"
                />
              </div>
              <div className=" col-md-12 pt-5 position-relative">
                <label htmlFor="userEmail" className=" label-hidden fs-5 text-bg-main position-absolute">userEmail:</label>
                <input
                  className=" form-control border-0 border-bottom shadow-none"
                  onInput={function(){showLabel('userEmail')}}
                  id="userEmail"
                  type="email"
                  placeholder="userEmail"
                />
              </div>
              <div className=" col-md-12 pt-5 position-relative">
                <label htmlFor="userpass" className=" label-hidden fs-5 text-bg-main position-absolute">userPassword:</label>
                <input
                  className=" form-control border-0 border-bottom shadow-none"
                  onInput={function(){showLabel('userpass')}}
                  id="userpass"
                  type="password"
                  placeholder="userPassword"
                />
              </div>
              <div className=" col-md-12 pt-5 position-relative">
                <button type="submit" className=" border border-0 py-2 rounded px-3 bg-main text-white fs-5 mb-5">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
