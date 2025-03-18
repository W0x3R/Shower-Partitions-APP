import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.scss"
import Layout from "./Layout/Layout"
import MainPage from "./components/MainPage/MainPage"
import DeliveryPage from "./components/DeliveryPage/DeliveryPage"
import ServicesCostPage from "./components/ServicesCostPage/ServicesCostPage"
import ArticlePage from "./components/ArticlePage/ArticlePage"
import ContactsPage from "./components/ContactsPage/ContactsPage"
import PopupFormProvider from "./context/PopupFormProvider"
import PortfolioPage from "./components/PortfolioPage/PortfolioPage"
import ScrollTopOnLocationChange from "./utils/scrollTopOnLocationChange"

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
						</Route>
					</Routes>
				</PopupFormProvider>
			</div>
		</BrowserRouter>
	)
}

export default App
