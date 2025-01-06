import { useState } from "react"
import HeaderTop from "./HeaderTop/HeaderTop"
import { Nav } from "./Nav/Nav"

const Header = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState({
		customer: false,
		company: false,
	})

	const handleBurgerClick = () => {
		setIsBurgerActive((prev) => !prev)
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
			<HeaderTop
				onBurgerClick={handleBurgerClick}
				isBurgerActive={isBurgerActive}
			/>
			<Nav
				onMenuClick={handleMenuToggle}
				isMenuOpen={isMenuOpen}
				isBurgerActive={isBurgerActive}
			/>
		</header>
	)
}

export default Header
