import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import FormPopup from "../components/FormPopup/FormPopup"

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<FormPopup />
			<Footer />
		</>
	)
}

export default Layout
