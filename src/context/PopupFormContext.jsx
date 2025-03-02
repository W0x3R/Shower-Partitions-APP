import { createContext } from "react"

const PopupFormContext = createContext({
	isFormPopupOpen: false,
	handleFormPopupOpen: () => {},
	handleFormPopupClose: () => {},
})

export default PopupFormContext
