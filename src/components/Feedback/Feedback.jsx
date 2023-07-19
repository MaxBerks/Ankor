import React from "react";
import "./Feedback.scss";

export default function Feedback({ name, position, text }) {
  return (
    <div className="feedback">
      <div className="feedback__container">
        <h2 className="feedback__name">
          {name}
          <span className="feedback__delim"> | </span>
          <span className="feedback__position">{position}</span>
        </h2>
        <div className="feedback__slider">
          <div className="feedback__btn feedback__btn-left"></div>
          <p className="feedback__text">{text}</p>
          <div className="feedback__btn feedback__btn-right"></div>
        </div>
      </div>
    </div>
  );
}
