import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-4">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					{/* Left Section */}
					<p className="text-sm text-gray-400">
						© {new Date().getFullYear()} EliteWork Solutions. All rights
						reserved.
					</p>

					{/* Right Section */}
					<div className="flex space-x-4 mt-2 md:mt-0">
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-300"
						>
							<FaFacebook />
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-300"
						>
							<FaTwitter />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-300"
						>
							<FaLinkedin />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
