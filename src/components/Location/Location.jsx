import React from "react"
import "./Location.scss"
import TripInfo from "../TripInfo/TripInfo"
import LogoTitle from "../LogoTitle/LogoTitle"
import LocationReview from "../LocationReview/LocationReview"

export default function Location() {
	return (
		<div className="location">
			<TripInfo text="Заїзд 2019, Карпати" />
			<LogoTitle title="Локація" subtitle="комфорт та гори" />
			<div className="location__container">
				<LocationReview
					title="гори карпати, косів"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Ipsum dolor sit amet consectetur. Aliquam id diam maecenas ultricies mi eget mauris. Lorem donec massa sapien faucibus et molestie ac feugiat."
				/>
				<LocationReview
					title="база відпочинку “вільні”"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At urna condimentum mattis pellentesque. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Ipsum dolor sit amet consectetur. Aliquam id diam maecenas ultricies mi eget mauris. Lorem donec massa sapien faucibus et molestie ac feugiat."
				/>
			</div>
		</div>
	)
}
