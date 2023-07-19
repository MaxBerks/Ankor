import React from "react";
import "./ContactPerson.scss";
import BtnGrey from "../BtnGrey/BtnGrey";

import facebookIcon from "../../assets/icons/facebok.svg";
import instaIcon from "../../assets/icons/instagram.svg";
import whatsAppIcon from "../../assets/icons/whatsApp.svg";

export default function ContactPerson({
	name,
	position,
	photoSrc,
	descr,
	telegramLink,
	facebookLink,
	instaLink,
	whatsappLink,
}) {
	return (
		<div className="contactPerson">
			<img src={photoSrc} alt="#" className="contactPerson__img" />
			<h2 className="contactPerson__name">
				{name}
				<span className="contactPerson__delim"> | </span>
				<span className="contactPerson__position">{position}</span>
			</h2>
			<p className="contactPerson__descr">{descr}</p>
			<div className="contactPerson__links">
				<div className="contactPerson__btnContainer">
					<BtnGrey text="написати в телеграм" link={telegramLink} />
				</div>
				<a
					href={facebookLink}
					className="contactPerson__link contactPerson__link-facebook"
				>
					<img src={facebookIcon} alt="#" />
				</a>
				<a href={instaLink} className="contactPerson__link contactPerson__link-insta">
					<img src={instaIcon} alt="#" />
				</a>
				<a
					href={whatsappLink}
					className="contactPerson__link contactPerson__link-whatsapp"
				>
					<img src={whatsAppIcon} alt="#" />
				</a>
			</div>
		</div>
	);
}
