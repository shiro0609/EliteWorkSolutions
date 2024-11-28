import React from "react";

const Card = ({ image, title, desc }) => {
	return (
		<div className="block md:w-72 rounded-lg bg-white shadow-md shadow-black duration-300 h-96">
			<div className="h-40 overflow-hidden rounded-t-lg">
				<img
					className="rounded-t-lg w-full h-full object-cover hover:scale-110 duration-200"
					src={image}
					alt=""
				/>
			</div>
			<div className="p-2">
				<h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
					{title}
				</h5>
				<div>{desc}</div>
			</div>
		</div>
	);
};

export default Card;
