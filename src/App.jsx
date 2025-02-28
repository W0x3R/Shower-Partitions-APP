import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.scss"
import Layout from "./Layout/Layout"
import { MainPage } from "./components/MainPage/MainPage"
import { DeliveryPage } from "./components/Delivery/DeliveryPage"
import { ServicesCostPage } from "./components/ServicesCost/ServicesCostPage"
import { ArticlePage } from "./components/Article/ArticlePage"
import { Contacts } from "./components/Contacts/Contacts"
import { ContactsPage } from "./components/Contacts/ContactsPage"

function App() {
	return (
		<BrowserRouter>
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
		</BrowserRouter>
	)
}

export default App
