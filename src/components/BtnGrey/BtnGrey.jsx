import React from "react";
import "./BtnGrey.scss";

export default function Button({ text, link }) {
	return (
		<a href={link} className="btn">
			{text}
		</a>
	);
}
