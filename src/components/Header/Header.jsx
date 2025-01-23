import { useEffect, useRef, useState } from "react"
import HeaderTop from "./HeaderTop/HeaderTop"
import { Nav } from "./Nav/Nav"
import { disableBodyScroll, enableBodyScroll } from "../../utils/setBodyScroll"
import ReactFocusLock from "react-focus-lock"
import isMobile from "../../utils/isMobile"

const Header = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false)
	const [hasBurgerOpen, setHasBurgerOpen] = useState(false)

	const burgerRef = useRef(null)

	const handleBurgerClick = () => {
		if (isMobile()) {
			setIsBurgerActive((prev) => !prev)
			if (!hasBurgerOpen) {
				setHasBurgerOpen(true)
			}
		}
	}

	const handleCloseBurgerOnEsc = (e) => {
		if (isMobile() && isBurgerActive && e.code === "Escape") {
			setIsBurgerActive(false)
		}
	}

	useEffect(() => {
		if (hasBurgerOpen) {
			burgerRef?.current?.focus()
		}
	}, [isBurgerActive, hasBurgerOpen])

	useEffect(() => {
		if (isBurgerActive) {
			disableBodyScroll()
		} else {
			enableBodyScroll()
		}

		return () => enableBodyScroll()
	}, [isBurgerActive])

	useEffect(() => {
		let prevWidth = window.innerWidth
		const handleResize = () => {
			const currentWidth = window.innerWidth
			if (isBurgerActive && prevWidth <= 768 && currentWidth > 768) {
				enableBodyScroll()
			} else if (isBurgerActive && prevWidth > 768 && currentWidth <= 768) {
				disableBodyScroll()
			}
			prevWidth = currentWidth
		}
		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [isBurgerActive])

	const HeaderContent = (
		<header className="header" onKeyDown={handleCloseBurgerOnEsc}>
			<div className="container">
				<HeaderTop
					onBurgerClick={handleBurgerClick}
					isBurgerActive={isBurgerActive}
					burgerRef={burgerRef}
				/>
				<Nav
					isBurgerActive={isBurgerActive}
					onBurgerClick={handleBurgerClick}
				/>
			</div>
		</header>
	)

	return isMobile() && isBurgerActive ?
			<ReactFocusLock>{HeaderContent}</ReactFocusLock>
		:	HeaderContent
}

export default Header
