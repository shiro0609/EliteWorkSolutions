import React, { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form Data:", formData);
		// Add form submission logic here
		alert("Form submitted successfully!");
		setFormData({ name: "", phone: "", email: "", message: "" });
	};

	return (
		<div className="flex items-center justify-center bg-gray-100">
			<div className="w-full max-w-lg p-8 rounded-lg">
				<h2 className="text-2xl font-bold mb-6 text-center">Enquiries</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label htmlFor="name" className="block text-sm font-medium ">
							Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Your Name"
							required
							className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm border-black"
						/>
					</div>
					<div>
						<label htmlFor="phone" className="block text-sm font-medium ">
							Phone
						</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							value={formData.phone}
							onChange={handleChange}
							placeholder="Your Phone Number"
							required
							className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm border-black"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium ">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Your Email"
							required
							className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm border-black"
						/>
					</div>
					<div>
						<label htmlFor="message" className="block text-sm font-medium ">
							Message
						</label>
						<textarea
							name="message"
							id="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Your Message"
							required
							className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm border-black h-32"
						></textarea>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;

const SubsForm = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleInputChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setMessage("Please enter a valid email address.");
			return;
		}

		setMessage("Thank you for subscribing!");
		setEmail(""); // Reset the input field
	};

	return (
		<div className="flex flex-col items-center justify-center bg-orange-200">
			<div className="py-8 px-4 text-center md:text-left">
				<h2 className="text-2xl font-bold text-gray-800">Stay In Touch</h2>
				<div className="text-sm pb-4">
					Subcribe to get more exclusive deals and latest offers from us!
				</div>
				<form onSubmit={handleSubmit} className="flex">
					<div>
						<input
							type="email"
							id="email"
							value={email}
							onChange={handleInputChange}
							placeholder="Enter your email"
							className="md:w-96 px-4 py-2 border rounded-s-md border-gray-300"
							required
						/>
					</div>
					<button
						type="submit"
						className="w-32 md:w-52 bg-blue-600 text-white rounded-e-md hover:bg-blue-800 transition duration-300"
					>
						Subscribe
					</button>
				</form>
				{message && (
					<p className="mt-4 text-center text-sm text-gray-600">{message}</p>
				)}
			</div>
		</div>
	);
};

export { SubsForm };
