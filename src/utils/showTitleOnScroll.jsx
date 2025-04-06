import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const showTitleOnScroll = (ref, xStart, yStart, opacityStart, duration) => {
	gsap.from(ref.current, {
		scrollTrigger: {
			trigger: ref.current,
			start: "top 100%",
			toggleActions: "play none none none",
		},
		x: xStart,
		y: yStart,
		opacity: opacityStart,
		duration: duration,
		ease: "expo.out",
	})
}

export default showTitleOnScroll
