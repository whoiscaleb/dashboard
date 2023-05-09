import React from "react";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import Sentiments from "./Sentiment";
import Visitors from "./Visitors";

const Main = () => {
  return (
    <div className="container text-center">
      <div className="row justify-content-around">
        <Ratings />
        <Reviews />
        <Sentiments />
      </div>
      <div className="row py-5">
        <Visitors />
      </div>
    </div>
  );
};

export default Main;
