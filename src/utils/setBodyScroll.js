const body = document.body

export const disableBodyScroll = () => {
	const scrollBarWidth =
		window.innerWidth - document.documentElement.clientWidth
	body.style.overflow = "hidden"
	body.style.paddingRight = `${scrollBarWidth}px`
}

export const enableBodyScroll = () => {
	setTimeout(() => {
		body.style.overflow = ""
		body.style.paddingRight = ""
	}, 300)
}
