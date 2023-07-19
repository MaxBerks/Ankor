import React from "react";
import "./Gallery.scss";
import LogoTitle from "../LogoTitle/LogoTitle";
import PhotoSlider from "../PhotoSlider/PhotoSlider";

import photo from "../../assets/images/greyBack.jpg";

export default function Gallery() {
  return (
    <div className="gallery">
      <LogoTitle title="фотогалерея" subtitle="спогади з усіх років табору" />
    </div>
  );
}
