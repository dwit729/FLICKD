import React from "react";
import '../css/Review.css';
import { Button, Rate, Popconfirm } from "antd";

const Review = (props) => {
  return (
    <div className="review-container">
      <div className="review-header">
        <h1 className="reviewer font-bold">{props.reviewer}</h1>
        <p> &nbsp; rated &nbsp; </p>
        <Rate value={props.rating} disabled/>
        <p className="post-date">  {props.posted.substring(0, props.posted.search('T'))}</p>
      </div>
      <div className="review-body">
        <p className="review-text">{props.review}</p>
      </div>
      {(props.userId == props.reviewId) && 
        <Popconfirm
              title="Delete the Review"
              description="Are you sure to delete this Review?"
              onConfirm={props.handleDeleteReview}
              okText="Yes"
              cancelText="No"
        >
          <Button className="mt-3" variant="outlined" color="danger">Delete Review</Button>
        </Popconfirm>
      }
    </div>
  );
};

export default Review;