import React from "react";
import "./Gallery.scss";
import LogoTitle from "../LogoTitle/LogoTitle";
import photo1 from "../../assets/images/greyBack.jpg";
import photo2 from "../../assets/images/registrationPhoto.jpg";
import PhotoSlider from "../PhotoSlider/PhotoSlider";

export default function Gallery() {
	const items = [photo1, photo2, photo1, photo2, photo1, photo2];

	return (
		<section className="gallery">
			<LogoTitle title="фотогалерея" subtitle="спогади з усіх років табору" />
			<div className="gallery__container">
				<PhotoSlider items={items} />
				<PhotoSlider items={items} />
			</div>
		</section>
	);
}
