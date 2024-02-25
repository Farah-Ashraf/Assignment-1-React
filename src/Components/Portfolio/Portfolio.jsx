import React from "react";
import house from "../../Images/poert1.png";
import cake from "../../Images/port2.png";
import circus from "../../Images/port3.png";
import {getNavHeight} from '../Navbar/Navbar'
import './Portfolio.css'

export default function Portfolio() {

  document.title = "Portfolio";
  return (
    <div className=" py-5" style={{marginTop: getNavHeight()}}>
      <div className=" text-center mb-5 ">
        <h2 className=" fw-bolder fs-1 mt-4">PORTFOLIO COMPONENT</h2>
        <div className="star-container">
          <div className="line bg-black"></div>
          <i className="fa-solid fa-star fs-4 mx-2"></i>
          <div className="line bg-black"></div>
        </div>
      </div>

      <div className=" container">
        <div className=" row gy-4">
          <div className=" col-lg-4 col-md-6">
            <div className=" position-relative">
            <img className=" w-100 rounded" src={house} alt="house iamge" />
            <div className=" hover-layer justify-content-center align-items-center position-absolute fixed-top bottom-0">
            <i className="fa-solid fa-plus text-white"></i>
            </div>
            </div>
          </div>

          <div className=" col-lg-4 col-md-6">
            <div className=" position-relative">
            <img className=" w-100 rounded" src={cake} alt="cake iamge" />
            <div className=" hover-layer justify-content-center align-items-center position-absolute fixed-top bottom-0">
            <i className="fa-solid fa-plus text-white"></i>
            </div>
            </div>
          </div>

          <div className=" col-lg-4 col-md-6">
            <div className=" position-relative">
            <img className=" w-100 rounded" src={circus} alt="circus iamge" />
            <div className=" hover-layer justify-content-center align-items-center position-absolute fixed-top bottom-0">
            <i className="fa-solid fa-plus text-white"></i>
            </div>
            </div>
          </div>

          <div className=" col-lg-4 col-md-6">
            <div className=" position-relative">
            <img className=" w-100 rounded" src={house} alt="house iamge" />
            <div className=" hover-layer justify-content-center align-items-center position-absolute fixed-top bottom-0">
            <i className="fa-solid fa-plus text-white"></i>
            </div>
            </div>
          </div>

          <div className=" col-lg-4 col-md-6">
            <div className=" position-relative">
            <img className=" w-100 rounded" src={cake} alt="cake iamge" />
            <div className=" hover-layer justify-content-center align-items-center position-absolute fixed-top bottom-0">
            <i className="fa-solid fa-plus text-white"></i>
            </div>
            </div>
          </div>

          <div className=" col-lg-4 col-md-6">
            <div className=" position-relative">
            <img className=" w-100 rounded" src={circus} alt="circus iamge" />
            <div className=" hover-layer justify-content-center align-items-center position-absolute fixed-top bottom-0">
            <i className="fa-solid fa-plus text-white"></i>
            </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
