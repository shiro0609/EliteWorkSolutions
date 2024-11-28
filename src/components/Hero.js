import React from "react";

const Hero = ({ img, title, desc }) => {
	return (
		<div className="w-full h-96 overflow-hidden">
			<div
				className="relative h-96 w-full bg-cover bg-center hover:scale-110 duration-200"
				style={{
					backgroundImage: `url(${img})`, // Replace with your image URL
				}}
			>
				{/* Overlay */}
				<div className="absolute inset-0 bg-black bg-opacity-50"></div>

				{/* Text */}
				<div className="relative z-10 flex flex-col justify-center items-center h-full">
					<h1 className="text-3xl md:text-5xl font-bold text-white">{title}</h1>
					<p className="mt-2 text-lg md:text-xl text-gray-200 max-w-80 text-center">
						{desc}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
