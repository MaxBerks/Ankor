import React from "react";
import "./Footer.scss";

import rightsIcon from "../../assets/icons/rightsIcon.svg";
import ankorText from "../../assets/icons/ankorTextBlack.svg";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container">
				<img src={rightsIcon} alt="#" />
				<img src={ankorText} alt="#" />
			</div>
		</footer>
	);
}
