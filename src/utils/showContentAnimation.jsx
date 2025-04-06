import { gsap } from "gsap"

const showContentAnimation = (ref) => {
	gsap.from(ref.current, {
		x: 500,
		opacity: 0,
		duration: 2,
		ease: "expo.out",
	})
}

export default showContentAnimation
