import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import "./index.css";

function PrivacyPolicy() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Navbar */}
			<div className="flex flex-row p-5 md:p-10 border-b border-primary w-full bg-black z-50 items-center">
				<Link to="/" className="no-underline">
					<h1 className="pixelify-sans font-bold text-3xl md:text-6xl main-brand m-0 text-white">
						SCANOX
					</h1>
				</Link>
				<div className="flex flex-row gap-4 md:gap-10 ml-auto items-center">
					<Link
						to="/"
						className="text-sm md:text-2xl text-[#919191] no-underline"
					>
						Home
					</Link>
					<Link
						to="/pricing"
						className="text-sm md:text-2xl text-[#919191] no-underline"
					>
						Pricing
					</Link>
					<button
						type="button"
						className="px-3 py-2 md:px-5 md:py-4 bg-primary text-black text-sm md:text-2xl font-bold cursor-pointer border-none"
					>
						Get Started
					</button>
				</div>
			</div>

			{/* Content */}
			<section className="w-full py-16 md:py-24 px-5 md:px-20 flex-1">
				<div className="max-w-3xl mx-auto font-readable">
					<h2 className="text-4xl md:text-6xl font-bold m-0 mb-4 pixelify-sans">
						Privacy Policy
					</h2>
					<p className="text-[#A1A1A1] text-base md:text-lg m-0 mb-12">
						Last updated: March 2026
					</p>

					<div className="flex flex-col gap-10 text-[#ccc] text-base md:text-lg leading-relaxed">
						<div>
							<h3 className="text-xl md:text-2xl font-bold text-white m-0 mb-3">
								Overview
							</h3>
							<p className="m-0">
								Scanox is a printing service that lets you send print jobs via QR
								codes and WhatsApp. We are committed to keeping things simple —
								both in our product and in how we handle your data.
							</p>
						</div>

						<div>
							<h3 className="text-xl md:text-2xl font-bold text-white m-0 mb-3">
								What We Collect
							</h3>
							<p className="m-0 mb-3">
								We collect only the minimum information needed to process your
								print orders:
							</p>
							<ul className="m-0 pl-6 flex flex-col gap-2">
								<li>Order details (files submitted for printing)</li>
								<li>Payment information (processed securely via Razorpay)</li>
								<li>WhatsApp number (if you use our WhatsApp integration)</li>
							</ul>
						</div>

						<div>
							<h3 className="text-xl md:text-2xl font-bold text-white m-0 mb-3">
								What We Don't Collect
							</h3>
							<p className="m-0">
								We do not create user accounts, track your browsing activity, use
								cookies for advertising, or sell any data to third parties. We do
								not store personal information beyond what is necessary to
								fulfill your print order.
							</p>
						</div>

						<div>
							<h3 className="text-xl md:text-2xl font-bold text-white m-0 mb-3">
								Data Retention
							</h3>
							<p className="m-0">
								Submitted files and order information are retained only for the
								duration needed to complete your print job. After fulfillment,
								files are automatically deleted from our systems.
							</p>
						</div>

						<div>
							<h3 className="text-xl md:text-2xl font-bold text-white m-0 mb-3">
								Third-Party Services
							</h3>
							<p className="m-0">
								We use Razorpay to process payments. Razorpay handles your
								payment data according to their own privacy policy. We do not
								store your card or bank details.
							</p>
						</div>

						<div>
							<h3 className="text-xl md:text-2xl font-bold text-white m-0 mb-3">
								Contact
							</h3>
							<p className="m-0">
								If you have any questions about this policy, reach out to us at{" "}
								<a
									href="mailto:support@scanox.tech"
									className="text-primary no-underline hover:underline"
								>
									support@scanox.tech
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default PrivacyPolicy;
