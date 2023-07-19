import React from "react";
import "./Contacts.scss";
import LogoTitle from "../LogoTitle/LogoTitle";
import ContactPerson from "../ContactPerson/ContactPerson";
import photoLeft from "../../assets/images/contactsLeft.jpg";
import photoRight from "../../assets/images/contactsRight.jpg";

export default function Contacts() {
	return (
		<section className="contacts">
			<LogoTitle title="контакти" subtitle="як зв’язатися з нашою командою" />
			<div className="contacts__container">
				<ContactPerson
					name="євгеній антонюк"
					position="куратор"
					photoSrc={photoLeft}
					descr="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque. Dapibus ultrices in iaculis nunc sed augue lacus viverra. ”"
					telegramLink="#"
					facebookLink="#"
					instaLink="#"
					whatsappLink="#"
				/>
				<ContactPerson
					name="федір мельник"
					position="куратор"
					photoSrc={photoRight}
					descr="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque. Dapibus ultrices in iaculis nunc sed augue lacus viverra. ”"
					telegramLink="#"
					facebookLink="#"
					instaLink="#"
					whatsappLink="#"
				/>
			</div>
		</section>
	);
}
