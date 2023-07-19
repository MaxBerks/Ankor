import React from "react";
import "./PhotoSlider.scss";

export default function PhotoSlider({
  photoSrc1,
  photoSrc2,
  photoSrc3,
  photoSrc4,
}) {
  return (
    <div className="photoSlider">
      <div className="photoSlider__container">
        <div className="photoSlider__btn photoSlider__btn-left"></div>
        <div className="photoSlider__btn photoSlider__btn-right"></div>
        <div className="photoSlider__content">
          <img className="photoSlider__img" src={photoSrc1} alt="#" />
          <img className="photoSlider__img" src={photoSrc2} alt="#" />
          <img className="photoSlider__img" src={photoSrc3} alt="#" />
        </div>
      </div>
    </div>
  );
}
