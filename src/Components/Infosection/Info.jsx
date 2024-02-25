import React from "react";

export default function Info() {
  return (
    <>

    <div className=" bg-second text-white py-5">

    <div className=" container py-5">
        <div className=" row gy-4">
          <div className=" col-md-4">
            <div className=" text-center">
              <h4 className=" fs-2 fw-bolder">LOCATION</h4>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>

          <div className=" col-md-4">
            <div className=" text-center">
              <h4 className=" fs-2 fw-bolder">AROUND THE WEB</h4>
              <ul className=" list-unstyled d-flex justify-content-center align-items-center mt-3">
                <div className=" list-item-container">
                <li>
                <i className="fa-brands fa-facebook"></i>
                </li>
                </div>

                <div className=" list-item-container">
                <li>
                <i className="fa-brands fa-twitter"></i>
                </li>
                </div>

                <div className=" list-item-container">
                <li>
                <i className="fa-brands fa-linkedin-in"></i>
                </li>
                </div>

                <div className=" list-item-container">
                <li>
                <i className="fa-solid fa-globe"></i>
                </li>
                </div>

              </ul>

              
            </div>
          
          </div>

          <div className=" col-md-4">
            <div className=" text-center">
              <h4 className=" fs-2 fw-bolder">ABOUT FREELANCER</h4>
              <p >Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>





        </div>
      </div>
    </div>

    </>
  );
}
