import React from "react"
import "./Header.scss"
import ankorText from "../../assets/icons/ankorTextWhite.svg"

export default function Header() {
	return (
		<header className="header">
			<div className="header__content">
				<div className="header__logo">
					<img src={ankorText} alt="#" />
				</div>
				<ul className="header__nav">
					<li className="nav__item">про нас</li>
					<li className="nav__item">програма</li>
					<li className="nav__item">локація</li>
					<li className="nav__item">фотогалерея</li>
					<li className="nav__item">команда</li>
				</ul>
				<h2 className="header__contacts">контакти</h2>
			</div>
		</header>
	)
}
