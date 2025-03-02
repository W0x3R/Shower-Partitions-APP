import { useState } from "react"
import PopupFormContext from "./PopupFormContext"
import {
	disableBodyScrollIncludeScrollbar,
	enableBodyScrollIncludeScrollbar,
} from "../utils/setBodyScroll"

export const PopupFormProvider = ({ children }) => {
	const [isFormPopupOpen, setIsFormPopupOpen] = useState(false)

	const handleFormPopupOpen = (e) => {
		if (e.type === "click" || (e.type === "keydown" && e.code === "Enter")) {
			e.preventDefault()
			setIsFormPopupOpen(true)
			disableBodyScrollIncludeScrollbar()
		}
	}

	const handleFormPopupClose = (e) => {
		if (e.type === "click" || (e.type === "keydown" && e.code === "Escape")) {
			setIsFormPopupOpen(false)
			enableBodyScrollIncludeScrollbar()
		}
	}

	return (
		<PopupFormContext.Provider
			value={{ isFormPopupOpen, handleFormPopupOpen, handleFormPopupClose }}
		>
			{children}
		</PopupFormContext.Provider>
	)
}
