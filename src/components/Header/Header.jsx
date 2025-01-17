import { useEffect, useState } from "react"
import HeaderTop from "./HeaderTop/HeaderTop"
import { Nav } from "./Nav/Nav"
import { disableBodyScroll, enableBodyScroll } from "../../utils/setBodyScroll"

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

	return (
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
}

export default Header
