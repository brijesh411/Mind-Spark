import React from "react";
import { price } from "../../dummydata";
import { Link } from "react-router-dom";

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className="items shadow" key={val.id}>
          <h4>{val.name}</h4>
          <h1>
            <span>₹</span>
            {val.price}
          </h1>
          <div className="desc">
            {val.desc.map((point, index) => (
              <p key={index}>&bull; {point}</p>
            ))}
          </div>
          <br />
          <Link to= "/learning-center">
          <button className="outline-btn">GET STARTED</button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
