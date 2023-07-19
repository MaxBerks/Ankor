import React from "react";
import "./LocationReview.scss";
import photo from "../../assets/images/greyBack.jpg";

export default function LocationReview({ title, text }) {
  return (
    <div className="locationReview">
      <img src={photo} alt="" className="locationReview__img" />
      <div className="locationReview__selection">
        <div className="selection__item selection__item-active"></div>
        <div className="selection__item"></div>
        <div className="selection__item"></div>
        <div className="selection__item"></div>
        <div className="selection__item"></div>
      </div>
      <h3 className="locationReview__title">{title}</h3>
      <p className="locationReview__text">{text}</p>
    </div>
  );
}
