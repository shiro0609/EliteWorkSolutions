import React, { useState, useEffect } from "react";

const Slideshow = ({ images, interval = 3000 }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, interval);

		return () => clearInterval(timer); // Cleanup the timer
	}, [images.length, interval]);

	return (
		<div className="relative w-full h-96 overflow-hidden">
			{images.map((image, index) => (
				<div
					key={index}
					className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
						index === currentIndex ? "opacity-100" : "opacity-0"
					}`}
				>
					<div className="absolute inset-0 bg-black bg-opacity-50"></div>
					<img
						src={image}
						alt={`Slide ${index}`}
						className="w-full h-full object-cover"
					/>
				</div>
			))}
		</div>
	);
};

export default Slideshow;
