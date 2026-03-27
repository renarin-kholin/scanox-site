import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import "./index.css";

function Pricing() {
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
						className="text-sm md:text-2xl text-white no-underline"
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

			{/* Hero */}
			<section className="w-full py-20 md:py-32 px-5 md:px-20">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-5xl md:text-8xl font-bold m-0 mb-4">
						Our Pricing
					</h2>
					<p className="text-xl md:text-2xl text-[#A1A1A1] m-0">
						Simple per-page pricing. No subscriptions, no hidden fees.
					</p>
				</div>
			</section>

			{/* Pricing Cards */}
			<section className="w-full px-5 md:px-20 pb-20 md:pb-32 flex-1">
				<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* One Side */}
					<div className="border border-[#333] rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-300 hover:border-primary group">
						<div className="flex items-center gap-3 mb-8">
							<div className="w-3 h-3 rounded-full bg-primary" />
							<h3 className="text-2xl md:text-3xl font-bold m-0">
								One Side Printing
							</h3>
						</div>

						<div className="flex flex-col gap-6 flex-1">
							<div className="flex items-center justify-between border-b border-[#222] pb-6">
								<div>
									<p className="text-xl md:text-2xl m-0 mb-1">
										A4 Black & White
									</p>
									<p className="text-[#666] text-sm md:text-base m-0">
										Standard single-sided B&W
									</p>
								</div>
								<div className="text-right">
									<span className="text-3xl md:text-4xl font-bold text-primary font-readable">
										₹1
									</span>
									<span className="text-[#A1A1A1] text-lg ml-1">/page</span>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div>
									<p className="text-xl md:text-2xl m-0 mb-1">A4 Color</p>
									<p className="text-[#666] text-sm md:text-base m-0">
										Standard single-sided color
									</p>
								</div>
								<div className="text-right">
									<span className="text-3xl md:text-4xl font-bold text-primary font-readable">
										₹5
									</span>
									<span className="text-[#A1A1A1] text-lg ml-1">/page</span>
								</div>
							</div>
						</div>
					</div>

					{/* Two Sided */}
					<div className="border border-[#333] rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-300 hover:border-primary group">
						<div className="flex items-center gap-3 mb-8">
							<div className="w-3 h-3 rounded-full bg-primary" />
							<h3 className="text-2xl md:text-3xl font-bold m-0">
								Two Sided Printing
							</h3>
						</div>

						<div className="flex flex-col gap-6 flex-1">
							<div className="flex items-center justify-between border-b border-[#222] pb-6">
								<div>
									<p className="text-xl md:text-2xl m-0 mb-1">
										A4 Black & White
									</p>
									<p className="text-[#666] text-sm md:text-base m-0">
										Standard double-sided B&W
									</p>
								</div>
								<div className="text-right">
									<span className="text-3xl md:text-4xl font-bold text-primary font-readable">
										₹2
									</span>
									<span className="text-[#A1A1A1] text-lg ml-1">/page</span>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div>
									<p className="text-xl md:text-2xl m-0 mb-1">A4 Color</p>
									<p className="text-[#666] text-sm md:text-base m-0">
										Standard double-sided color
									</p>
								</div>
								<div className="text-right">
									<span className="text-3xl md:text-4xl font-bold text-primary font-readable">
										₹10
									</span>
									<span className="text-[#A1A1A1] text-lg ml-1">/page</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default Pricing;
