import { Helmet } from "react-helmet"
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
			<Helmet>
				<title>
					Главная | Стеклянные душевые перегородки на заказ в Гомеле
				</title>
				<meta
					name="description"
					content="Душевые перегородки на заказ по индивидуальным размерам в Гомеле: замер, изготовление, установка. Современный дизайн, закаленное стекло(8-10мм), надежная фурнитура, гарантия!"
				/>
			</Helmet>
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
