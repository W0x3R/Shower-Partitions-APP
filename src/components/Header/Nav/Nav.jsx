import styles from "./Nav.module.scss"
import { useEffect, useRef, useState } from "react"
import DropdownItem from "./DropdownMenu/DropdownItem"
import NavItems from "./NavItems"
import dropdownItemData from "../../../data/nav/dropdownItemData"
import isDesktop from "../../../utils/isDesktop"

const Nav = ({ isBurgerActive, onBurgerClick }) => {
	const [isFixed, setIsFixed] = useState(false)
	const [navHeight, setNavHeight] = useState(0)

	const [isMenuOpen, setIsMenuOpen] = useState({
		customer: false,
		company: false,
	})

	const animationFrameId = useRef(null)
	const navRef = useRef(null)

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

	useEffect(() => {
		if (isDesktop()) {
			const navCurrentHeight = navRef.current?.offsetHeight || 0
			setNavHeight(navCurrentHeight)
		}
	}, [isFixed])
	{
		return (
			<>
				<div style={{ height: isFixed ? `${navHeight}px` : 0 }}></div>
				<nav
					ref={navRef}
					className={`${styles.nav} ${isFixed ? styles["nav_fixed"] : ""} ${isBurgerActive ? styles["nav_open"] : styles["nav_hide"]}`}
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
			</>
		)
	}
}

export default Nav
