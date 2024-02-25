import React from "react";

export default function About() {

  document.title = "About";

  return (
      <div className="bg-main py-5 d-flex justify-content-center align-items-center" style={{height: 700}}>
        <div className=" text-white text-center">
          <h2 className=" fw-medium fs-1 mb-4">ABOUT COMPONENT</h2>

          <div class="star-container">
            <div class="line"></div>
            <i class="fa-solid fa-star text-white fs-4 mx-2"></i>
            <div class="line"></div>
          </div>

          <div className=" container">
            <div className="row fs-5">
              <div className="col-md-6 mt-5">
                <div>
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>

              <div className="col-md-6 mt-5">
                <div>
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}
