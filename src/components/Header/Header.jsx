import { useState } from "react"
import HeaderTop from "./HeaderTop/HeaderTop"
import { Nav } from "./Nav/Nav"

const Header = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(null)

	const handleBurgerClick = () => {
		setIsBurgerActive((prev) => !prev)
	}

	const handleMenuToggle = (index) => {
		setIsMenuOpen((prev) => (prev === index ? null : index))
	}

	return (
		<header className="header">
			<div className="container">
				<HeaderTop
					onBurgerClick={handleBurgerClick}
					isBurgerActive={isBurgerActive}
				/>
				<Nav onMenuClick={handleMenuToggle} isMenuOpen={isMenuOpen} />
			</div>
		</header>
	)
}

export default Header
