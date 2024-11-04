import React from "react";
import '../css/Review.css';
import { Rate } from "antd";

const Review = (props) => {
  return (
    <div className="review-container">
      <div className="review-header">
        <h1 className="reviewer">{props.reviewer}</h1>
        <p> &nbsp; rated &nbsp; </p>
        <Rate value={props.rating} disabled/>
        <p className="post-date"> &nbsp; {props.posted.substring(0, props.posted.search('T'))}</p>
      </div>
      <div className="review-body">
        <p className="review-text">{props.review}</p>
      </div>
    </div>
  );
};

export default Review;