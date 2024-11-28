import React from "react";
import { FaPhone, FaMapPin } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import ContactForm from "../components/Form";

const StoreInfo = [
	{
		name: "Damansara Utama Main Branch",
		registerNo: "T123-CVB-8677",
		location: "434, Jalan Abdul Hukum, 10568 Petaling Jaya, Selangor",
		mapLink: "https://google.com",
		phone: "+604-12345678",
	},
	{
		name: "Kelana Jaya",
		registerNo: "T873-CVB-7844",
		location: "434, Jalan Abdul Hukum, 10568 Petaling Jaya, Selangor",
		mapLink: "https://google.com",
		phone: "+604-87654321",
	},
	{
		name: "Citta Mall",
		registerNo: "T983-CVB-3472",
		location: "434, Jalan Abdul Hukum, 10568 Petaling Jaya, Selangor",
		mapLink: "https://google.com",
		phone: "+604-45678901",
	},
];

const Contact = () => {
	return (
		<div className="flex flex-col gap-4 py-4 px-10">
			<h2 className="text-3xl font-bold">Showroom Locations</h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10">
				{StoreInfo.map((data) => (
					<div className="border border-black p-2 rounded-md">
						<div className="text-lg font-semibold">{data.name}</div>
						<div>EliteWork Solutions Sdn.Bhd</div>
						<div>Company Registration No: {data.registerNo}</div>
						<div>{data.location}</div>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-4">
								<FaMapPin className="h-5 w-5" />
								<a href={data.mapLink}>View in Google Map</a>
							</div>
							<div className="flex items-center gap-4">
								<FaPhone className="h-5 w-5" />
								<div>{data.phone}</div>
							</div>
							<div className="flex items-center gap-4">
								<IoTime className="h-6 w-6" />
								<div>
									<div>Mon-Fri: 8.30am to 5pm</div>
									<div>Sat: 8.30am to 1pm</div>
									<div>Closed on Sunday & Public Holidays</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<ContactForm />
		</div>
	);
};

export default Contact;
