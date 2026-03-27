import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

import "./index.css";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, Flip);

// ==========================================
// 🛠 ANIMATION CONFIGURATION
// Adjust these values to tweak how elements move
// ==========================================
const CONFIG = {
	desktop: {
		// Pin duration for the info section horizontal scroll
		cardsScrollEnd: "+=3000",

		// QR Code original floating position
		qrInitial: { xPercent: -340, yPercent: -20, rotateZ: -10 },

		// Info Cards Vertical Entry (yPercent relative to container)
		card1EntryY: -132,
		card2EntryY: -130,
		card3EntryY: -130,

		// Info Cards Final Spread out positions (xPercent)
		card1FinalX: 100,
		card2FinalX: -10,
		card3FinalX: 210,
	},
	mobile: {
		// Mobile QR Code vertical shift
		qrCodeY: -60,

		// Sub-card fade-in offset (pixels)
		cardEntryY: 100,
	},
};

function App() {
	const [showOriginal, setOriginal] = useState(true);

	useGSAP(() => {
		ScrollSmoother.create({
			smooth: 1,
			effects: true,
			smoothTouch: 0.1,
		});

		const mm = gsap.matchMedia();

		// ------------------------------------------
		// ROBUST HORIZONTAL TEXT SCROLLING
		// This applies to both mobile and desktop!
		// ------------------------------------------
		mm.add("(min-width: 1px)", () => {
			const logoContainer = document.querySelector(".main-logo") as HTMLElement;
			if (logoContainer) {
				const getScrollAmount = () =>
					-(logoContainer.scrollWidth - window.innerWidth + 40); // 40px buffer

				gsap.to(logoContainer, {
					x: getScrollAmount, // use function so it recalcs dynamically
					ease: "none",
					scrollTrigger: {
						trigger: ".pin-heading",
						pin: true,
						scrub: 1,
						invalidateOnRefresh: true, // Recalculates exact width if window is resized!
						end: () => "+=" + Math.abs(getScrollAmount()),
					},
				});
			}
		});

		mm.add("(min-width: 769px)", () => {
			// ==========================================
			// DESKTOP ANIMATIONS
			// ==========================================

			const original_state = Flip.getState(".qr-code.original");

			gsap.to(".qr-code.original", {
				rotateZ: CONFIG.desktop.qrInitial.rotateZ,
				xPercent: CONFIG.desktop.qrInitial.xPercent,
				yPercent: CONFIG.desktop.qrInitial.yPercent,
				scrollTrigger: {
					scrub: 1,
					trigger: ".info-section",
					end: "-=100",
				},
			});

			gsap.to(".navbar", {
				paddingTop: "1.5rem",
				paddingBottom: "1.5rem",
				scrollTrigger: {
					trigger: ".info-section",
					toggleActions: "play resume reverse reverse",
				},
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".info-section",
					scrub: 1,
					pin: ".info-section",
					end: CONFIG.desktop.cardsScrollEnd,
				},
			});

			const i1_qr = gsap.utils.toArray([".infocard-1", ".qr-code.original"]);

			tl.to(".infocard-1", {
				yPercent: CONFIG.desktop.card1EntryY,
				ease: "expo",
				duration: 10,
				onComplete: () => {
					setOriginal(false);
					Flip.from(original_state, {
						targets: ".qr-code.fake",
						duration: 1,
						ease: "expo",
					});
				},
			})
				.to(".infocard-2", {
					duration: 10,
					yPercent: CONFIG.desktop.card2EntryY,
					ease: "expo",
					onReverseComplete: () => {
						setOriginal(true);
						Flip.from(original_state, {
							targets: ".qr-code.original",
							duration: 1,
							ease: "expo",
						});
					},
				})
				.to(".whatsapp-icon", { duration: 5, xPercent: -5, yPercent: 5 }, "-=5")
				.to(".razorpay-icon", { duration: 5, xPercent: 5, yPercent: -5 }, "-=5")
				.to(
					i1_qr,
					{
						duration: 5,
						xPercent: 3,
						yPercent: -140,
						ease: "expo",
					},
					"-=3.5",
				)
				.to(
					".infocard-1-heading",
					{
						duration: 1,
						backgroundColor: "#ffffff",
						color: "#576635",
					},
					"-=3",
				)
				.to(".infocard-3", {
					duration: 10,
					yPercent: CONFIG.desktop.card3EntryY,
					ease: "expo",
				})
				.to(".tablet", { duration: 5, xPercent: 5, yPercent: -5 }, "-=5")
				.to(".printer", { duration: 5, xPercent: -5, yPercent: 5 }, "-=5")
				.to(
					".infocard-2",
					{
						duration: 5,
						xPercent: 3,
						yPercent: -140,
						ease: "expo",
					},
					"-=5",
				)
				.to(
					".infocard-2-heading",
					{
						duration: 1,
						backgroundColor: "#ffffff",
						color: "#576635",
					},
					"-=5",
				)
				.to(
					i1_qr,
					{
						duration: 5,
						xPercent: 6,
						yPercent: -145,
						ease: "expo",
					},
					"-=5",
				)
				.to(".infosection-texts", {
					yPercent: -200,
					duration: 10,
				})
				.to(
					".infocard-1",
					{
						xPercent: CONFIG.desktop.card1FinalX,
						yPercent: -130,
						duration: 10,
					},
					"-=10",
				)
				.to(
					[".infocard-1-heading", ".infocard-2-heading"],
					{
						backgroundColor: "#E4FF14",
						color: "#576635",
						duration: 10,
					},
					"-=10",
				)
				.to(
					".infocard-3",
					{ xPercent: CONFIG.desktop.card3FinalX, duration: 10 },
					"-=10",
				)
				.to(
					".infocard-2",
					{
						xPercent: CONFIG.desktop.card2FinalX,
						yPercent: -130,
						duration: 8,
					},
					"-=10",
				);

			gsap
				.timeline({
					scrollTrigger: {
						trigger: ".connect-section",
						scrub: 1,
						end: "-=500",
					},
				})
				.to(".qr-code-fake", {
					xPercent: 130,
					yPercent: 260,
					rotateZ: 20,
				});
		});

		mm.add("(max-width: 768px)", () => {
			// ==========================================
			// MOBILE ANIMATIONS
			// ==========================================
			const qrCode = document.querySelector(".qr-code.original") as HTMLElement;
			gsap.to(".qr-code.original", {
				rotateZ: -10,
				yPercent: CONFIG.mobile.qrCodeY,
				scrollTrigger: {
					scrub: 1,
					trigger: ".info-section",
					end: "-=100",
				},
			});

			gsap.utils
				.toArray(".infocard-1, .infocard-2, .infocard-3")
				.forEach((card) => {
					gsap.from(card as gsap.TweenTarget, {
						y: CONFIG.mobile.cardEntryY,
						opacity: 0,
						scrollTrigger: {
							trigger: card as Element,
							start: "top 80%",
							end: "top 50%",
							scrub: 1,
						},
					});
				});
		});

		return () => mm.revert();
	});

	return (
		<div id="smooth-wrapper">
			<div className="flex flex-row p-5 md:p-10 border-b border-primary w-full bg-black z-50 fixed navbar items-center">
				<h1 className="pixelify-sans font-bold text-3xl md:text-6xl main-brand m-0">
					SCANOX
				</h1>
				<div className="flex flex-row gap-4 md:gap-10 ml-auto items-center">
					<a
						href="#about"
						className="text-sm md:text-2xl text-[#919191] hidden sm:block no-underline"
					>
						About Us
					</a>
					<Link
						to="/pricing"
						className="text-sm md:text-2xl text-[#919191] hidden sm:block no-underline"
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

			<div className="relative z-40 hidden md:block">
				<div
					data-flip-id="qr-code"
					className={`absolute p-1 bg-white rounded-4xl rotate-12 right-50 top-[60vh] shadow-xl border border-black qr-code original ${
						showOriginal ? "block" : "hidden"
					}`}
				>
					<img
						className="h-40 w-40 md:h-80 md:w-80"
						src="/qrcode.png"
						alt="QR Code"
					/>
				</div>
			</div>

			<div className="relative z-40 block md:hidden">
				<div className="absolute p-1 bg-white rounded-2xl rotate-12 right-10 top-[50vh] md:top-[40vh] shadow-xl border border-black qr-code original">
					<img
						className="h-40 w-40 md:h-32 md:w-32"
						src="/qrcode.png"
						alt="QR Code"
					/>
				</div>
			</div>

			<div
				className="flex flex-col w-full overflow-visible overflow-x-hidden"
				id="smooth-content"
			>
				<div className="pin-heading py-20 md:py-45 h-[300vh] md:h-[200vh]">
					<div className="transform-3d main-logo w-max px-5 mt-32 md:mt-0 whitespace-nowrap">
						<h1
							className="text-[30rem] leading-[30rem] md:text-[45rem] md:leading-[45rem] font-bold select-none m-0"
							style={{ scrollbarWidth: "none" }}
						>
							SCANOX
						</h1>
					</div>
				</div>

				<section className="md:h-[420vh] info-section w-full flex flex-col gap-10 md:gap-20 p-5 md:p-20 md:self-end">
					<div className="flex flex-col h-auto md:h-[100vh] w-full md:w-1/2 md:self-end mt-20 md:mt-0">
						<div className="flex flex-col md:my-auto md:mr-auto gap-5 md:gap-10 infosection-texts">
							<h1 className="text-5xl md:text-7xl m-0">
								Print <br />
								Quick
								<br /> Anywhere
							</h1>
							<h3 className="text-2xl md:text-4xl text-[#A1A1A1] m-0">
								Use our system to <br />
								experience the modern <br />
								way of printing.
							</h3>
						</div>
					</div>

					<div className="flex flex-col md:flex-row md:mr-auto w-full infocards gap-10 md:gap-0 mt-20 md:mt-0">
						<div className="bg-white relative md:absolute md:top-[100vh] md:left-50 z-10 infocard-1 border border-[#6B6B6B] w-full md:w-auto shadow-xl">
							<div className="px-5 md:px-10 py-4 md:py-6 bg-primary w-full border-b border-[#696969] text-[#576635] infocard-1-heading">
								<p className="text-2xl md:text-4xl m-0">Fast</p>
							</div>
							<div className="px-5 md:px-10 py-6 md:py-6">
								<p className="text-xl md:text-3xl text-black m-0">
									Get your prints instantly <br /> by scanning QR Codes.
								</p>
							</div>
							<img
								src="/infocards.svg"
								alt=""
								className=" w-full px-5 mb-[-90px] md:mb-[-90px]"
							/>
							<div
								data-flip-id="qr-code"
								className={`hidden md:block absolute p-1 bg-white rounded-4xl qr-code-fake -rotate-10 top-[283px] right-27 shadow-xl border border-black ${
									showOriginal ? "hidden" : "block"
								}`}
							>
								<img
									className="h-80 w-80 max-w-none"
									src="/qrcode.png"
									alt="Fake QR Code"
								/>
							</div>
						</div>

						<div className="bg-white relative md:absolute md:top-[100vh] md:left-50 z-20 infocard-2 border border-[#6B6B6B] perspective-normal w-full md:w-auto mt-10 md:mt-0 shadow-xl">
							<div className="px-5 md:px-10 py-4 md:py-6 bg-primary w-full border-b border-[#696969] infocard-2-heading">
								<p className="text-[#576635] text-2xl md:text-4xl m-0">
									Familiar
								</p>
							</div>
							<div className="px-5 md:px-10 py-6 md:py-6">
								<p className="text-xl md:text-3xl text-black m-0">
									Send print jobs directly from <br /> Whatsapp
								</p>
							</div>
							<img
								src="/infocards.svg"
								alt=""
								className="w-full px-5 mb-[-90px] md:mb-[-90px]"
							/>
							<img
								src="/Whatsapp.svg"
								alt=""
								className="absolute top-60 md:top-100 h-32 md:h-60 transform-3d rotate-x-60 rotate-y-30 whatsapp-icon hidden md:block max-w-none"
							/>
							<img
								src="/razorpay.svg"
								alt=""
								className="absolute left-40 md:left-60 top-40 md:top-50 h-40 md:h-70 transform-3d rotate-z-300 -rotate-x-20 -rotate-y-20 razorpay-icon hidden md:block max-w-none"
							/>
						</div>

						<div className="bg-white relative md:absolute md:top-[100vh] md:left-50 z-30 infocard-3 border border-[#6B6B6B] perspective-normal w-full md:w-auto mt-10 md:mt-0 shadow-xl">
							<div className="px-5 md:px-10 py-4 md:py-6 bg-primary w-full border-b border-[#696969]">
								<p className="text-[#576635] text-2xl md:text-4xl m-0">
									Convenient
								</p>
							</div>
							<div className="px-5 md:px-10 py-6 md:py-6">
								<p className="text-xl md:text-3xl text-black m-0">
									Set it up yourself. You just <br />
									need a printer and a phone.
								</p>
							</div>
							<img
								src="/infocards.svg"
								alt=""
								className="w-full px-5 mb-[-90px] md:mb-[-90px]"
							/>
							<img
								src="/tablet.svg"
								alt=""
								className="absolute top-60 md:top-90 h-24 md:h-40 tablet hidden md:block max-w-none"
							/>
							<img
								src="/printer.svg"
								alt=""
								className="absolute left-40 md:left-70 top-60 md:top-90 h-32 md:h-50 printer hidden md:block max-w-none"
							/>
						</div>
					</div>
				</section>

				<section className="connect-section w-full min-h-[50vh] md:h-[80vh] flex flex-col gap-10 md:gap-20 p-5 md:p-20 mt-20 md:mt-0 items-start md:self-start">
					<div className="flex flex-col w-full md:w-1/2 my-auto">
						<div className="flex flex-col my-auto md:ml-auto gap-5 md:gap-10 connectionsection-texts">
							<h1 className="text-4xl md:text-7xl m-0">
								Our Software
								<br />
								Your hardware
							</h1>
							<button
								type="button"
								className="px-5 py-3 md:px-10 md:py-4 bg-primary text-black text-xl md:text-2xl self-start font-bold cursor-pointer border-none"
							>
								Let's Talk
							</button>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		</div>
	);
}

export default App;
