import React from "react";
import "./HomePage.css";
import banner from "../../images/1st-page/Banner.png";
import person from "../../images/1st-page/person.png";
const HomePage = () => {
  return (
    <div>
      {/* Banner section */}
      <div>
        <img src={banner} alt="" className="w-100" />
      </div>
      {/* Welcome info section */}
      <div className="d-flex container my-5 ">
        <div className="welcome me-5">
          <p className="welcome-header text-info border-start border-3 border-info ps-2">
            WELCOME THERE!
          </p>
          <h1 className="welcome-title">
            Welcome to the <br />
            Best Business <br />
            Support Company
          </h1>
          <p className="border-start border-3 border-info ps-2 text-secondary mt-4">
            Venturastic Fund's is a Special Purpose Investment Holding Company
            (SPIC) formed with an impetus for creating, building business, &
            Merger and Acquisition, it will aim at developing itself as a strong
            global player, by building a proven track record and achieving
            significant milestones in the next 5 years.
          </p>
          <button className="welcome-btn">MORE ABOUT US</button>
        </div>
        <div>
          <img src={person} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
