import { useEffect, useState } from "react"
import HeaderTop from "./HeaderTop/HeaderTop"
import { Nav } from "./Nav/Nav"
import { disableBodyScroll, enableBodyScroll } from "../../utils/setBodyScroll"
import ReactFocusLock from "react-focus-lock"
import isMobile from "../../utils/isMobile"

const Header = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false)

	const handleBurgerClick = () => {
		if (window.innerWidth <= 768) {
			setIsBurgerActive((prev) => !prev)
		}
	}

	useEffect(() => {
		if (isBurgerActive) {
			disableBodyScroll()
		} else {
			enableBodyScroll()
		}

		return () => enableBodyScroll()
	}, [isBurgerActive])

	const HeaderContent = (
		<header className="header">
			<div className="container">
				<HeaderTop
					onBurgerClick={handleBurgerClick}
					isBurgerActive={isBurgerActive}
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
