import { BrowserRouter } from "react-router-dom"
import "./App.scss"
import Header from "./components/Header/Header"
import { Main } from "./components/Main/Main"

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div className="container">
					<Header />
					<Main />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
