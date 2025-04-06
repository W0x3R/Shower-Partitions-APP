import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const moveContentLeftOnScrollAnimation = (ref, start, xStart = 800) => {
	ref.current.forEach((ref) => {
		gsap.from(ref, {
			scrollTrigger: {
				trigger: ref,
				start: `top ${start}%`,
				toggleActions: "play none none none",
			},
			x: xStart,
			opacity: 0,
			duration: 1,
			ease: "power2.out",
		})
	})
}

export default moveContentLeftOnScrollAnimation
