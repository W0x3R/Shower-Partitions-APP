import { useLocation } from "react-router-dom"

export const GetCurrentUrl = () => {
	const location = useLocation()
	const currentUrl = `https://w0x3r.github.io/Shower-Partitions-APP${location.pathname}`
	return currentUrl
}
