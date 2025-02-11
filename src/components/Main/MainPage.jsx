import { About } from "./About/About"
import { Products } from "./Products/Products"
import { Examples } from "./Examples/Examples"
import { Price } from "./Price/Price"
import { Questions } from "./Questions/Questions"
import { Standards } from "./Standards/Standards"
import { ShowerPartitionsDescription } from "./ShowerPartitionsDescription.module.scss/ShowerPartitionsDescription"
import ScrollTopBtn from "./ScrollTopBtn/ScrollTopBtn"
import ContactsWidget from "./ContactsWidget/ContactsWidget"

export const MainPage = () => {
	return (
		<>
			<About />
			<Products />
			<Examples />
			<Price />
			<Questions />
			<Standards />
			<ShowerPartitionsDescription />
			<ScrollTopBtn />
			<ContactsWidget />
		</>
	)
}
