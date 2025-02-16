import { Helmet } from "react-helmet"
import { Price } from "./ServicesCost"
import { Breadcrumbs } from "../Widgets/Breadcrumbs/Breadcrumbs"
import ContactsWidget from "../Widgets/ContactsWidget/ContactsWidget"
import ScrollTopBtn from "../Widgets/ScrollTopBtn/ScrollTopBtn"

export const ServicesCostPage = () => {
	return (
		<>
			<Helmet>
				<title>
					Стоимость услуг | Информация о стоимости услуг душевых перегородок на
					заказ в Гомеле
				</title>
				<meta
					name="description"
					content="Узнайте стоимость доставки и монтажа стеклянных душевых перегородок на заказ в Гомеле. Демократические цены, бесплатный замер при заказе и качественный сервис!"
				/>
				<meta
					name="keywords"
					content="стоимость душевых перегородок, цена замера, стоимость доставки душевых перегородок, купить душевые перегородки"
				/>
			</Helmet>
			<Breadcrumbs currentPage="Стоимость услуг" />
			<Price />
			<ContactsWidget />
			<ScrollTopBtn />
		</>
	)
}
