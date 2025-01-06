import { BrowserRouter } from "react-router-dom"
import "./App.scss"
import Header from "./components/Header/Header"
import { Main } from "./components/Main/Main"

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Main />
			</div>
		</BrowserRouter>
	)
}

export default App
