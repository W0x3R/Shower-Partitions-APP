const isDesktop = () => window.innerWidth > 768
const isHoverSupported = () => window.matchMedia("(hover: hover)").matches

export const handleOpenMenuMouseEnter = (
	actionsOnMenuInteractions,
	menuName
) => {
	if (isDesktop() && isHoverSupported()) {
		actionsOnMenuInteractions(menuName, true)
	}
}

export const handleCloseMenuMouseLeave = (
	actionsOnMenuInteractions,
	menuName
) => {
	if (isDesktop() && isHoverSupported()) {
		actionsOnMenuInteractions(menuName, false)
	}
}

export const handleToggleMenuMouseClick = (
	actionsOnMenuInteractions,
	menuName,
	isMenuOpen
) => {
	if (!isDesktop() || (isDesktop() && !isHoverSupported())) {
		actionsOnMenuInteractions(menuName, !isMenuOpen[menuName])
	}
}

export const handleCloseMenuMouseClick = (
	actionsOnMenuInteractions,
	menuName
) => {
	actionsOnMenuInteractions(menuName, false)
}
