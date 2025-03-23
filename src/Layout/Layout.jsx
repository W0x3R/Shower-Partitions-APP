import { Outlet } from "react-router-dom"
import { Suspense } from "react"
import { Spinner } from "../components/Widgets/Spinner/Spinner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import FormPopup from "../components/Widgets/FormPopup/FormPopup"
import ContactsWidget from "../components/Widgets/ContactsWidget/ContactsWidget"
import ScrollTopBtn from "../components/Widgets/ScrollTopBtn/ScrollTopBtn"

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Suspense fallback={<Spinner />}>
					<Outlet />
				</Suspense>
			</main>
			<FormPopup />
			<ContactsWidget />
			<ScrollTopBtn />
			<Footer />
		</>
	)
}

export default Layout
