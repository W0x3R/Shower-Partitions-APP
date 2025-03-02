import { Helmet } from "react-helmet"
import { useLocation } from "react-router-dom"
import Price from "./ServicesCost"
import Breadcrumbs from "../Widgets/Breadcrumbs/Breadcrumbs"
import ContactsWidget from "../Widgets/ContactsWidget/ContactsWidget"
import ScrollTopBtn from "../Widgets/ScrollTopBtn/ScrollTopBtn"

const ServicesCostPage = () => {
	const location = useLocation()
	const currentUrl = `https://garderobsystem.ru${location.pathname}`
	const ogImage =
		"https://W0x3R.github.io/Shower-Partitions-APP/price-og-img.jpg"
	return (
		<>
			<Helmet>
				{/* Title */}
				<title>Стоимость услуг | Цены на душевые перегородки в Гомеле</title>
				{/* Meta Tags */}
				<meta
					name="description"
					content="Узнайте стоимость замера, доставки и монтажа стеклянных душевых перегородок на заказ в Гомеле. Демократичные цены, бесплатный замер при заказе и качественный сервис!"
				/>
				<meta
					name="keywords"
					content="стоимость душевых перегородок, цена замера, стоимость доставки душевых перегородок, купить душевые перегородки"
				/>
				{/* Meta OG */}
				<meta
					property="og:title"
					content="Стоимость услуг | Цены на душевые перегородки в Гомеле"
				/>
				<meta
					property="og:description"
					content="Посмотрите актуальные цены на замер, доставку и установку душевых перегородок на заказ в Гомеле. Гарантированное качество и индивидуальный подход!"
				/>
				<meta property="og:image" content={ogImage} />
				<meta property="og:url" content={currentUrl} />
				<meta property="og:type" content="article" />
				{/* Meta Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Стоимость услуг | Цены на душевые перегородки в Гомеле"
				/>
				<meta
					name="twitter:description"
					content="Посмотрите цены на установку, замер и доставку стеклянных душевых перегородок в Гомеле. Честные расценки и качественный сервис!"
				/>
				<meta name="twitter:image" content={ogImage} />
			</Helmet>
			<Breadcrumbs currentPage="Стоимость услуг" />
			<Price />
			<ContactsWidget />
			<ScrollTopBtn />
		</>
	)
}

export default ServicesCostPage
