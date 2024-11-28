import React from "react";
import { NavLink } from "react-router-dom";
import { SubsForm } from "../components/Form";
import Slideshow from "../components/Slideshow";
import Img1 from "../assets/hero.webp";
import Img2 from "../assets/office.webp";
import Img3 from "../assets/office2.webp";

const ImgShow = [
	{
		img: Img1,
		title: "Space Planning",
	},
	{
		img: Img2,
		title: "Seating Ideas",
	},
	{
		img: Img3,
		title: "Collaboration Ideas",
	},
];

const images = [Img1, Img2, Img3];

const Home = () => {
	return (
		<div className="flex flex-col gap-10 pb-10">
			<Slideshow images={images} interval={3000} />

			<div className="flex flex-col md:flex-row w-screen items-center px-8 gap-4 md:px-10">
				<div className="flex flex-col text-justify gap-2 md:gap-10 items-center md:items-start md:w-1/2 ">
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
						voluptate ducimus, recusandae nostrum vitae aut amet voluptatum a
						porro corrupti tempora sint? Quod sequi itaque laborum culpa.
						Explicabo, incidunt dolorum?
					</div>
					<NavLink
						to="/about"
						className="text-center bg-blue-600 text-white py-2 w-36 rounded hover:bg-blue-800 duration-200"
					>
						About Us
					</NavLink>
				</div>
				<div className="md:w-1/2 overflow-hidden">
					<img
						src={Img1}
						alt=""
						className="object-cover transition-transform duration-300 hover:scale-110"
					/>
				</div>
			</div>

			<div className="px-10 flex flex-col gap-4">
				<div className="text-center md:text-left font-semibold text-2xl">
					Design Your Workspace
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
					{ImgShow.map((data) => (
						<div className="flex flex-col items-center gap-2 w-72">
							<div className="h-48 overflow-hidden">
								<img
									src={data.img}
									alt=""
									className="h-full hover:scale-110 duration-200"
								/>
							</div>
							<div className="text-lg">{data.title}</div>
						</div>
					))}
				</div>
			</div>

			<SubsForm />
		</div>
	);
};

export default Home;
