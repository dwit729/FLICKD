import React from "react";
import '../css/Review.css';
import { Button, Rate } from "antd";

const Review = (props) => {
  return (
    <div className="review-container">
      <div className="review-header">
        <h1 className="reviewer">{props.reviewer}</h1>
        <p> &nbsp; rated &nbsp; </p>
        <Rate value={props.rating} disabled/>
        <p className="post-date">  {props.posted.substring(0, props.posted.search('T'))}</p>
      </div>
      <div className="review-body">
        <p className="review-text">{props.review}</p>
      </div>
      {(props.userId == props.reviewId) && <Button className="mt-3" variant="outlined" color="danger" onClick={props.handleDeleteReview}>Delete Review</Button>}
    </div>
  );
};

export default Review;