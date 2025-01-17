import { useState } from "react"
import HeaderTop from "./HeaderTop/HeaderTop"
import { Nav } from "./Nav/Nav"
import { disableBodyScroll, enableBodyScroll } from "../../utils/setBodyScroll"

const Header = () => {
	const [isBurgerActive, setIsBurgerActive] = useState(false)

	const handleBurgerClick = () => {
		setIsBurgerActive((prev) => {
			const newState = !prev
			newState ? disableBodyScroll() : enableBodyScroll()
			return newState
		})
	}

	return (
		<header className="header">
			<div className="container">
				<HeaderTop
					onBurgerClick={handleBurgerClick}
					isBurgerActive={isBurgerActive}
				/>
				<Nav isBurgerActive={isBurgerActive} />
			</div>
		</header>
	)
}

export default Header
