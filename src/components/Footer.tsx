import React from "react";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div
          className="container-fluid mt-5"
          style={{ backgroundColor: "#f6f2f2" }}
        >
          <div className="row text-center text-sm-start py-5">
            <div className="col-12 col-sm-6  col-lg-3 border-right cursor-pointer">
              <p className="boldedParagraph">Social share</p>

              <div className="d-flex justify-content-center justify-content-md-start pb-3">
                <i className="fa-brands fa-facebook-f p-2 mr-5 text-white orange hoveredGrey"></i>
                <i className="fa-brands fa-instagram p-2 mr-5 text-white orange hoveredGrey"></i>
                <i className="fa-brands fa-twitter p-2 mr-5 text-white orange hoveredGrey"></i>
                <i className="fa-brands fa-linkedin p-2 mr-5 text-white orange hoveredGrey"></i>
              </div>
            </div>

            <div className="col-12 col-sm-6  col-lg-3 border-right cursor-pointer ">
              <p className="boldedParagraph">Event info</p>
              <ul className="list-unstyled">
                <li className="hoveredOrange">Enter Now</li>
                <li className="hoveredOrange">Event Info</li>
                <li className="hoveredOrange">Course Maps</li>
                <li className="hoveredOrange">Race Pack</li>
                <li className="hoveredOrange">Results</li>
                <li className="hoveredOrange">FAQs</li>
                <li className="hoveredOrange">Am I Registered?</li>
              </ul>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 border-right cursor-pointer">
              <p className="boldedParagraph">Registration</p>
              <ul className="list-unstyled">
                <li className="hoveredOrange">Volunteers</li>
                <li className="hoveredOrange">Gallery</li>
                <li className="hoveredOrange">Press</li>
                <li className="hoveredOrange">Results</li>
                <li className="hoveredOrange">Privacy Policy</li>
                <li className="hoveredOrange">Service Plus</li>
                <li className="hoveredOrange">Contacts</li>
              </ul>
            </div>

            <div className="col-12 col-sm-6  col-lg-3 border-right cursor-pointer">
              <p className="boldedParagraph">Schedule</p>

              <ul className="list-unstyled">
                <li className="hoveredOrange">Gallery</li>
                <li className="hoveredOrange">About</li>
                <li className="hoveredOrange">Videos</li>
                <li className="hoveredOrange">Results</li>
                <li className="hoveredOrange">FAQs</li>
                <li className="hoveredOrange">Results</li>
                <li className="hoveredOrange">Volunteers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
