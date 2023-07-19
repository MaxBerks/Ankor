import React from "react";
import "./Registration.scss";
import LogoTitle from "../LogoTitle/LogoTitle";
import photo from "../../assets/images/registrationPhoto.jpg";
import BtnGrey from "../BtnGrey/BtnGrey";

export default function Registration() {
	return (
		<section className="registration">
			<LogoTitle title="реєструйся сьогодні" subtitle="нумо до пригод" />
			<div className="registration__content">
				<img src={photo} alt="#" className="registration__img" />
				<h3 className="registration__info">
					7 днів<span> | </span>карпати, косів<span> | </span>14-16 років
					<span> | </span>13000 грн
				</h3>
				<div className="registration__container">
					<p className="registration__text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. At urna condimentum mattis
						pellentesque. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Ipsum
						dolor sit amet consectetur.
					</p>
					<BtnGrey text="форма реєстрації" link="#" />
				</div>
			</div>
		</section>
	);
}
