import styles from "./Nav.module.scss"
import { useEffect, useRef, useState } from "react"
import DropdownItem from "./DropdownMenu/DropdownItem"
import NavItems from "./NavItems"
import dropdownItemData from "../../../data/nav/dropdownItemData"

const Nav = ({ isBurgerActive, onBurgerClick }) => {
	const [isFixed, setIsFixed] = useState(false)

	const [isMenuOpen, setIsMenuOpen] = useState({
		customer: false,
		company: false,
	})

	const animationFrameId = useRef(null)

	const handleScroll = () => {
		if (animationFrameId.current) {
			cancelAnimationFrame(animationFrameId.current)
		}

		animationFrameId.current = requestAnimationFrame(() => {
			setIsFixed((prev) => {
				const shouldFix = window.scrollY > 120
				return prev !== shouldFix ? shouldFix : prev
			})
		})
	}

	useEffect(() => {
		const handleClick = (e) => {
			if (!e.target.closest(`.${styles.nav__list}`)) {
				setIsMenuOpen({ company: false, customer: false })
			}
		}
		window.addEventListener("click", (e) => handleClick(e))

		return () => {
			window.removeEventListener("click", (e) => handleClick(e))
		}
	}, [])

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
		<nav
			className={`${styles.nav} ${isBurgerActive ? styles["nav_open"] : styles["nav_hide"]} ${isFixed ? styles["nav_fixed"] : ""}`}
			aria-label="Основная навигация"
			id="burger-open-nav"
		>
			<ul className={styles.nav__list}>
				<NavItems styles={styles} onBurgerClick={onBurgerClick} />
				{dropdownItemData.map((data) => {
					return (
						<DropdownItem
							key={data.id}
							styles={styles}
							actions={{
								onBurgerClick,
								isMenuOpen,
								setIsMenuOpen,
							}}
							data={data}
						/>
					)
				})}
			</ul>
		</nav>
	)
}

export default Nav
