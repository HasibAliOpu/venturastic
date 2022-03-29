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
      <div className="d-flex container welcome-section">
        <div className="me-5">
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
      {/* details section */}
      <div className="d-flex">
        <div className="cards card-color">
          <div className="cards-info">
            <h1>01</h1>
            <h2>Fashion and Luxury</h2>
          </div>
          <p>
            At the core of every project that will be released by Venturastic in
            fashion and luxury, there will be quintessentially a strong
            commitment to unmatched creativity and quality, aligned with the
            changing needs of the international market.
          </p>
        </div>
        <div className="cards">
          <div className="cards-info">
            <h1>02</h1>
            <h2 className="ms-3">Media and Entertainment</h2>
          </div>
          <p>
            forward-looking Media and entertainment business, whose mission is
            to enable unique Investment opportunities, by allowing investors to
            express their aspirations and aesthetics with the highest level of
            quality and refinement.
          </p>
        </div>
        <div className="cards card-color">
          <div className="cards-info">
            <h1>03</h1>
            <h2>Technology</h2>
          </div>
          <p>
            Technology growth has been led by the rapid advancement and
            proliferation of Artificial intelligence, cloud, and machine
            learning, virtually impacting every business and consumer in it's
            path.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
