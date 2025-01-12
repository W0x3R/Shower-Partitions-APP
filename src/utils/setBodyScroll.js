export const body = document.body

export const disableBodyScrollIncludeScrollbar = () => {
	const scrollBarWidth =
		window.innerWidth - document.documentElement.clientWidth
	body.style.overflow = "hidden"
	body.style.paddingRight = `${scrollBarWidth}px`
}

export const enableBodyScrollIncludeScrollbar = () => {
	setTimeout(() => {
		body.style.overflow = ""
		body.style.paddingRight = ""
	}, 300)
}

export const disableBodyScroll = () => {
	body.style.overflow = "hidden"
}

export const enableBodyScroll = () => {
	body.style.overflow = ""
}
