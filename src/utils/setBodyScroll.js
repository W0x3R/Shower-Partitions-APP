export const body = document.body

export const disableBodyScrollIncludeScrollbar = () => {
	const scrollBarWidth =
		window.innerWidth - document.documentElement.clientWidth
	body.style.overflow = "hidden"
	body.style.paddingRight = `${scrollBarWidth}px`
}

export const enableBodyScrollIncludeScrollbar = () => {
	body.style.overflow = ""
	body.style.paddingRight = ""
}

export const disableBodyScroll = () => {
	body.style.overflow = "hidden"
}

export const enableBodyScroll = () => {
	body.style.overflow = ""
}
