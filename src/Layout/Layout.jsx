import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import FormPopup from "../components/FormPopup/FormPopup"
import ContactsWidget from "../components/Widgets/ContactsWidget/ContactsWidget"
import ScrollTopBtn from "../components/Widgets/ScrollTopBtn/ScrollTopBtn"

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<FormPopup />
			<ContactsWidget />
			<ScrollTopBtn />
			<Footer />
		</>
	)
}

export default Layout
