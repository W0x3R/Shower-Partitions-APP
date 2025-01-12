import { useState } from "react"
import HeaderTop from "./HeaderTop/HeaderTop"
import { Nav } from "./Nav/Nav"
import { disableBodyScroll, enableBodyScroll } from "../../utils/setBodyScroll"

const Header = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState({
		customer: false,
		company: false,
	})

	const handleBurgerClick = () => {
		setIsBurgerActive((prev) => !prev)
		isBurgerActive ? enableBodyScroll() : disableBodyScroll()
	}

	const handleMenuToggle = (key) => {
		if (window.innerWidth <= 768) {
			setIsMenuOpen((prev) => ({
				...prev,
				[key]: !prev[key],
			}))
		}
	}

	return (
		<header className="header">
			<div className="container">
				<HeaderTop
					onBurgerClick={handleBurgerClick}
					isBurgerActive={isBurgerActive}
				/>
				<Nav
					onMenuClick={handleMenuToggle}
					isMenuOpen={isMenuOpen}
					isBurgerActive={isBurgerActive}
				/>
			</div>
		</header>
	)
}

export default Header
