import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy } from "react"
import "./App.scss"
import Layout from "./Layout/Layout"
import PopupFormProvider from "./context/PopupFormProvider"
import ScrollTopOnLocationChange from "./utils/scrollTopOnLocationChange"

const MainPage = lazy(() => import("./components/MainPage/MainPage"))
const DeliveryPage = lazy(
	() => import("./components/DeliveryPage/DeliveryPage")
)
const ServicesCostPage = lazy(
	() => import("./components/ServicesCostPage/ServicesCostPage")
)
const ArticlePage = lazy(() => import("./components/ArticlePage/ArticlePage"))
const ContactsPage = lazy(
	() => import("./components/ContactsPage/ContactsPage")
)
const PortfolioPage = lazy(
	() => import("./components/PortfolioPage/PortfolioPage")
)
const SuccessfulMessageSendingPage = lazy(
	() =>
		import(
			"./components/SuccessfulMessageSendingPage/SuccessfulMessageSendingPage"
		)
)
const UnsuccessfulMessageSendingPage = lazy(
	() =>
		import(
			"./components/UnsuccessfulMessageSendingPage/UnsuccessfulMessageSendingPage"
		)
)
const NotFoundPage = lazy(
	() => import("./components/NotFoundPage/NotFoundPage")
)

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<ScrollTopOnLocationChange />
				<PopupFormProvider>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<MainPage />} />
							<Route path="delivery" element={<DeliveryPage />} />
							<Route path="price" element={<ServicesCostPage />} />
							<Route path="article" element={<ArticlePage />} />
							<Route path="contacts" element={<ContactsPage />} />
							<Route path="portfolio" element={<PortfolioPage />} />
							<Route
								path="successful"
								element={<SuccessfulMessageSendingPage />}
							/>
							<Route
								path="unsuccessful"
								element={<UnsuccessfulMessageSendingPage />}
							/>
							<Route path="*" element={<NotFoundPage />} />
						</Route>
					</Routes>
				</PopupFormProvider>
			</div>
		</BrowserRouter>
	)
}

export default App
