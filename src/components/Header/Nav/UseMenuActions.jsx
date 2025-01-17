import { useState } from "react"

export const useMenuActions = () => {
	const [isMenuOpen, setIsMenuOpen] = useState({
		customer: false,
		company: false,
	})

	const isDesktop = () => window.innerWidth > 768
	const isHoverSupported = () => window.matchMedia("(hover: hover)").matches

	const actionsOnMenuInteractions = (menuName, setIsMenuOpenValue) => {
		setIsMenuOpen((prev) => ({ ...prev, [menuName]: setIsMenuOpenValue }))
	}

	const handleOpenMenuMouseEnter = (menuName) => {
		if (isDesktop() && isHoverSupported()) {
			actionsOnMenuInteractions(menuName, true)
		}
	}

	const handleCloseMenuMouseLeave = (menuName) => {
		if (isDesktop() && isHoverSupported()) {
			actionsOnMenuInteractions(menuName, false)
		}
	}

	const handleToggleMenuClick = (menuName, isMenuOpen) => {
		if (!isDesktop() || (isDesktop() && !isHoverSupported())) {
			actionsOnMenuInteractions(menuName, !isMenuOpen)
		}
	}

	const handleCloseMenuClick = (menuName) => {
		actionsOnMenuInteractions(menuName, false)
	}

	return {
		isMenuOpen,
		handleOpenMenuMouseEnter,
		handleCloseMenuMouseLeave,
		handleToggleMenuClick,
		handleCloseMenuClick,
	}
}
