import { Link } from "react-router-dom";

export function Footer() {
	return (
		<footer className="border-t border-[#222] mt-20 px-5 md:px-20 py-10 md:py-16 flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-start">
			<div>
				<h3 className="text-xl md:text-2xl font-bold m-0 mb-4">
					Contact Info
				</h3>
				<p className="text-[#616161] text-sm md:text-lg m-0 leading-relaxed font-readable">
					support@scanox.tech
					<br />
					AISSMS Institute of Information Technology
					<br />
					Kennedy Road, Near RTO
					<br />
					Pune - 411 001, Maharashtra, India
				</p>
			</div>
			<div className="flex flex-col gap-2 md:self-end items-end">
				<Link
					to="/privacy"
					className="text-[#919191] text-sm md:text-base no-underline hover:text-white transition-colors"
				>
					Privacy Policy
				</Link>
				<p className="text-[#616161] text-sm md:text-lg m-0">
					@2026 Scanox. All Rights Reserved
				</p>
			</div>
		</footer>
	);
}
