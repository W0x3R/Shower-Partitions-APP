export const body = document.body
const disableScroll = (e) => e.preventDefault()

export const disableBodyScrollIncludeScrollbar = () => {
	const scrollBarWidth =
		window.innerWidth - document.documentElement.clientWidth
	body.style.overflow = "hidden"
	document.addEventListener("touchmove", disableScroll, { passive: false })
	body.style.paddingRight = `${scrollBarWidth}px`
}

export const enableBodyScrollIncludeScrollbar = () => {
	body.style.overflow = ""
	document.removeEventListener("touchmove", disableScroll)
	body.style.paddingRight = ""
}

export const disableBodyScroll = () => {
	body.style.overflow = "hidden"
	document.addEventListener("touchmove", disableScroll, { passive: false })
}

export const enableBodyScroll = () => {
	body.style.overflow = ""
	document.removeEventListener("touchmove", disableScroll)
}
