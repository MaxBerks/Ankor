import React from "react"
import Header from "../Header/Header"
import "./StartScreen.scss"

import ankorLogo from "../../assets/icons/ankorLogoWhite.svg"

export default function StartScreen() {
	return (
		<div className="start">
			<Header />
			<div className="start__content">
				<img className="start__logo" src={ankorLogo} alt="#" />
				<div className="start__title">
					місце свободи
					<br />
					та відповідальності
				</div>
				<div className="start__subtitle">
					Табір у Карпатах, де підлітки віком від 13 до 16 років
					<br />
					стають дорослими, перемагають страхи
					<br />й навчаються чути та розуміти себе
				</div>
			</div>
		</div>
	)
}
