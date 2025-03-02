import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.scss"
import Layout from "./Layout/Layout"
import { MainPage } from "./components/MainPage/MainPage"
import { DeliveryPage } from "./components/Delivery/DeliveryPage"
import { ServicesCostPage } from "./components/ServicesCost/ServicesCostPage"
import { ArticlePage } from "./components/Article/ArticlePage"
import { ContactsPage } from "./components/Contacts/ContactsPage"
import { PopupFormProvider } from "./context/PopupFormProvider"

function App() {
	return (
		<BrowserRouter>
			<PopupFormProvider>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<MainPage />} />
						<Route path="delivery" element={<DeliveryPage />} />
						<Route path="price" element={<ServicesCostPage />} />
						<Route path="article" element={<ArticlePage />} />
						<Route path="contacts" element={<ContactsPage />} />
					</Route>
				</Routes>
				<div className="App"></div>
			</PopupFormProvider>
		</BrowserRouter>
	)
}

export default App
