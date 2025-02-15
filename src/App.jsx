import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.scss"
import Layout from "./Layout/Layout"
import { MainPage } from "./components/Main/MainPage"
import { Delivery } from "./components/Delivery/Delivery"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path="delivery" element={<Delivery />} />
				</Route>
			</Routes>
			<div className="App"></div>
		</BrowserRouter>
	)
}

export default App
