import { Helmet } from "react-helmet"
import { useLocation } from "react-router-dom"
import carImg from "../../assets/delivery/car.png"
import Breadcrumbs from "../Widgets/Breadcrumbs/Breadcrumbs"
import ContactsWidget from "../Widgets/ContactsWidget/ContactsWidget"
import ScrollTopBtn from "../Widgets/ScrollTopBtn/ScrollTopBtn"
import Delivery from "./Delivery"

const DeliveryPage = () => {
	const location = useLocation()
	const currentUrl = `https://garderobsystem.ru${location.pathname}`
	const ogImage =
		"https://W0x3R.github.io/Shower-Partitions-APP/delivery-og-img.jpg"
	return (
		<>
			<Helmet>
				{/* Title */}
				<title>
					Доставка и оплата | Информация о доставке душевых перегородок на заказ
					в Гомеле
				</title>
				{/* Meta Tags */}
				<meta
					name="description"
					content="Условия доставки и оплаты душевых перегородок по индивидуальным размерам в Гомеле. Удобные способы оплаты, быстрая доставка и качественный сервис!"
				/>
				<meta
					name="keywords"
					content="доставка душевых перегородок, оплата перегородок, стеклянные душевые перегородки Гомель, купить душевые перегородки"
				/>
				{/* Meta OG */}
				<meta
					property="og:title"
					content="Доставка и оплата | Информация о доставке душевых перегородок на заказ
					в Гомеле"
				/>
				<meta
					property="og:description"
					content="Узнайте условия доставки и оплаты стеклянных душевых перегородок на заказ в Гомеле. Быстрая доставка, удобные способы оплаты и качественный сервис!"
				/>
				<meta property="og:image" content={ogImage} />
				<meta property="og:url" content={currentUrl} />
				<meta property="og:type" content="article" />
				{/* Meta Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Доставка и оплата | Информация о доставке душевых перегородок на заказ
					в Гомеле"
				/>
				<meta
					name="twitter:description"
					content="Быстрая доставка душевых перегородок в Гомеле. Удобные способы оплаты, современный дизайн и гарантия качества!"
				/>
				<meta name="twitter:image" content={ogImage} />
				{/* Preloading image */}
				<link rel="preload" href={carImg} as="image" type="image/png" />
			</Helmet>
			<Breadcrumbs currentPage="Оплата и доставка" />
			<Delivery />
		</>
	)
}

export default DeliveryPage
