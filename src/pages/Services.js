import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Img1 from "../assets/hero.webp";
import Img2 from "../assets/office.webp";
import Img3 from "../assets/office2.webp";

const CardData = [
	{
		img: Img1,
		title: "Space Planning and Management",
		desc: "Let out interior designer plan your workspace to achieve optimum productivity regarding your requirements. Let us know your dream office ideas and we will help you to make it true.",
	},
	{
		img: Img2,
		title: "Electrical Works",
		desc: "Let our pofessional to provide wiring and cabling works for your electrical and networking requirement. Our open plan systems are ready for different cabling needs and we are happy to provide everything readily for you",
	},
	{
		img: Img3,
		title: "Customade Furniture",
		desc: "If you have any personalize needs to suit your office, we can provide carpentry expertise to fulfill your furniture requirements. Our interior designer will help to visualize your design before we proceed.",
	},
	{
		img: Img3,
		title: "Carpet, Flooring and Blinds",
		desc: " A new floorings can freshen up your working space. Perk up your office with new carpets, floor borads or office blinds. From floor to ceiling, we have variety choice for your selections.",
	},
	{
		img: Img1,
		title: "Short Term Store Rental",
		desc: "Is your office is under renovation? don't worry, we also provide storage services at our premises with affordable rate.",
	},
	{
		img: Img2,
		title: "Short Term Safe Rental",
		desc: "If you hae short term event and need temporary use of safe, we do offer short term safe rental for you. We can arrange the transport to your venue of choice and taken back once the rental period is end",
	},
];

const Services = () => {
	return (
		<div className="flex flex-col gap-10 pb-10">
			<Hero
				img={Img3}
				title="Our Services"
				desc="We provides the best solution for your startup"
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-8 place-items-center justify-center">
				{CardData.map((data) => (
					<Card image={data.img} title={data.title} desc={data.desc} />
				))}
			</div>
		</div>
	);
};

export default Services;
