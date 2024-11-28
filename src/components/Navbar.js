import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const MenuItem = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "About Us",
		link: "/about",
	},
	{
		name: "Services",
		link: "/services",
	},
	{
		name: "Contact",
		link: "/contact",
	},
];

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-gray-800 text-white">
			<div className="px-4 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<NavLink to="/" className="text-2xl font-bold">
						EliteWork Solutions
					</NavLink>
					<div className="hidden md:flex gap-8">
						{MenuItem.map((data) => (
							<NavLink
								to={data.link}
								className="font-semibold hover:scale-110 duration-150 focus:underline decoration-2 decoration-white underline-offset-4"
							>
								{data.name}
							</NavLink>
						))}
					</div>

					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="text-white focus:outline-none"
						>
							{isMenuOpen ? (
								<FiX className="h-6 w-6" />
							) : (
								<FiMenu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
				{isMenuOpen && (
					<div className="flex flex-col md:hidden gap-2 pb-4">
						{MenuItem.map((data) => (
							<NavLink
								to={data.link}
								className="font-semibold hover:underline decoration-white underline-offset-4"
							>
								{data.name}
							</NavLink>
						))}
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
