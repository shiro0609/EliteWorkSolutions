import React from "react";
import Hero from "../components/Hero";
import Img from "../assets/hero.webp";
import Img2 from "../assets/office.webp";
import Img3 from "../assets/office2.webp";

const About = () => {
	return (
		<div className="flex flex-col gap-6 pb-10">
			<Hero img={Img2} title="About Us" desc="Our Visions and Missions" />

			<div className="flex flex-col gap-8 px-8">
				<div className="flex flex-col gap-4">
					<div className="font-bold text-3xl text-center">Our Expertise</div>
					<div className="flex flex-col md:flex-row gap-4">
						<div className="md:w-1/2 overflow-hidden">
							<img
								src={Img2}
								alt=""
								className="w-full order-last md:order-first hover:scale-110 duration-200"
							/>
						</div>
						<div className="flex flex-col gap-2 md:w-1/2">
							<div className="indent-8 text-justify">
								Welcome to EliteWork Solutions, where innovation meets
								productivity. We specialize in providing high-quality office
								systems and supplies designed to empower businesses of all
								sizes. From cutting-edge office equipment to everyday
								essentials, we’re here to ensure your workplace operates
								seamlessly and efficiently.
							</div>
							<div className="indent-8 text-justify">
								With a commitment to excellence, we partner with
								industry-leading brands to deliver reliable products and
								tailored solutions that meet your unique needs. Whether you’re
								setting up a new office, upgrading your systems, or restocking
								supplies, our team is dedicated to offering exceptional service,
								competitive pricing, and fast delivery.
							</div>
							<div className="indent-8 text-justify">
								At EliteWork Solutions, we believe in building lasting
								relationships with our clients by prioritizing trust, quality,
								and innovation. Let us help you create a workspace that drives
								success and inspires productivity.
							</div>
							<div className="indent-8 text-justify">
								Discover the difference with EliteWork Solutions—your partner in
								office solutions.
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col md:flex-row gap-4">
					<div className="flex flex-col gap-4 text-center">
						<div className="font-bold text-3xl">Our Vision</div>
						<div>
							"To become the leading provider of innovative office systems and
							sustainable supplies, empowering businesses to thrive through
							efficiency, reliability, and eco-friendly solutions."
						</div>
					</div>
					<div className=" overflow-hidden">
						<img
							src={Img}
							alt=""
							className="w-full hover:scale-110 duration-200"
						/>
					</div>
				</div>

				<div className="flex flex-col md:flex-row gap-4">
					<div className="md:w-[150%] overflow-hidden order-last md:order-first">
						<img
							src={Img3}
							alt=""
							className="w-full hover:scale-110 duration-200"
						/>
					</div>
					<div className="text-center">
						<div className="font-bold text-3xl">Our Missions</div>
						<div>
							"Our mission is to deliver high-quality office systems and
							supplies that enhance workplace productivity while fostering
							sustainable practices. We are committed to offering exceptional
							customer service, cutting-edge technology, and cost-effective
							solutions to meet the evolving needs of businesses of all sizes."
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
