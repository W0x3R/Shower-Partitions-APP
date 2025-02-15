import { useEffect, useRef, useState } from "react"
import ArrowTopIcon from "../../../assets/main/arrow-top.svg?react"
import styles from "./ScrollTopBtn.module.scss"
import scrollTop from "../../../utils/scrollTop"

const ScrollTopBtn = () => {
	const [isScrollBtnVisible, setIsScrollBtnVisible] = useState(false)
	const animationFrameId = useRef(null)

	const handleScroll = () => {
		if (animationFrameId.current) {
			cancelAnimationFrame(animationFrameId.current)
		}

		animationFrameId.current = requestAnimationFrame(() => {
			setIsScrollBtnVisible((prev) => {
				const shouldFix = window.scrollY > 500
				return prev !== shouldFix ? shouldFix : prev
			})
		})
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
			if (animationFrameId.current) {
				cancelAnimationFrame(animationFrameId.current)
			}
		}
	}, [])
	return (
		<button
			type="button"
			className={`${styles["btn__scroll-top"]} ${isScrollBtnVisible ? styles.visible : ""}`}
			onClick={scrollTop}
			aria-label="Прокрутить страницу вверх"
		>
			<ArrowTopIcon aria-hidden="true" />
		</button>
	)
}

export default ScrollTopBtn
