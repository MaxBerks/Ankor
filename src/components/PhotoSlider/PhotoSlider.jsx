import React, { useEffect } from "react";
import "./PhotoSlider.scss";

export default function PhotoSlider({ items }) {
	// const [currentSlide, setCurrentSlide] = useState(0);

	// const maxSlide = slides.length - 1;

	// useEffect(() => {
	// 	const slides = document.querySelectorAll(".photoSlider__slide");
	// 	slides.forEach((slide, index) => {
	// 		slide.style.transform = `translateX(${index * 100}%)`;
	// 	});
	// }, []);

	// const onNextSlide = () => {
	// 	if (currentSlide === maxSlide) {
	// 		setCurrentSlide(0);
	// 	} else {
	// 		setCurrentSlide(currentSlide + 1);
	// 	}

	// 	slides.forEach((slide, index) => {
	// 		slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
	// 	});
	// };

	// const onPrevSlide = () => {
	// 	if (currentSlide === 0) {
	// 		setCurrentSlide(maxSlide);
	// 	} else {
	// 		setCurrentSlide(currentSlide - 1);
	// 	}

	// 	slides.forEach((slide, index) => {
	// 		slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
	// 	});
	// };

	return (
		<div className="photoSlider">
			<div className="photoSlider__container">
				<div className="photoSlider__btn photoSlider__btn-prev"></div>
				<div className="photoSlider__btn photoSlider__btn-next"></div>
				<div className="photoSlider__content">
					{items.map((item, index) => {
						return (
							<div
								className="photoSlider__slide"
								style={{ transform: `translateX(${index * 100}%)` }}
								key={index}
							>
								<img className="photoSlider__img" src={item} alt="#" />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
