import React from "react";
import happyFace from "../../Images/avataaars.svg";
import "./Home.css";

export default function Home() {

  document.title = "Home";

  return (
    <>
      <div className=" bg-main text-center d-flex justify-content-center align-items-center" style={{height: 700}}>

        <div>
        <img className=" main-img mt-5" src={happyFace} alt="welcome User" />
        <h2 className=" fw-medium fs-1 text-white mt-4">START FRAMEWORK</h2>
        <div className="star-container">
          <div className="line"></div>
          <i className="fa-solid fa-star text-white fs-4 mx-2"></i>
          <div className="line"></div>
        </div>
        <p className=" text-white mb-5 fs-5">
          Graphic Artist - Web Designer - Illustrator
        </p>

        </div>
      </div>
    </>
  );
}
