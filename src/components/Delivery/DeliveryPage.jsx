import { Helmet } from "react-helmet"
import { Breadcrumbs } from "../Widgets/Breadcrumbs/Breadcrumbs"
import ContactsWidget from "../Widgets/ContactsWidget/ContactsWidget"
import ScrollTopBtn from "../Widgets/ScrollTopBtn/ScrollTopBtn"
import { Delivery } from "./Delivery"

export const DeliveryPage = () => {
	return (
		<>
			<Helmet>
				<title>
					Доставка | Информация о доставке душевых перегородок на заказ в Гомеле
				</title>
				<meta
					name="description"
					content="Узнайте условия доставки и оплаты стеклянных душевых перегородок на заказ в Гомеле. Быстрая доставка, удобные способы оплаты и качественный сервис!"
				/>
				<meta
					name="keywords"
					content="доставка душевых перегородок, оплата, стеклянные перегородки Гомель, купить душевые перегородки"
				/>
			</Helmet>
			<Breadcrumbs currentPage="Оплата и доставка" />
			<Delivery />
			<ContactsWidget />
			<ScrollTopBtn />
		</>
	)
}
