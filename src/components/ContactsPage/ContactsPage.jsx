import { useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"
import bgImg from "../../assets/contacts/bg.png"
import callUsImg from "../../assets/contacts/callUs.png"
import Breadcrumbs from "../Widgets/Breadcrumbs/Breadcrumbs"
import Contacts from "./Contacts"

const ContactsPage = () => {
	const location = useLocation()
	const currentUrl = `https://garderobsystem.ru${location.pathname}`
	const ogImage =
		"https://W0x3R.github.io/Shower-Partitions-APP/contacts-og-img.jpg"
	return (
		<>
			<Helmet>
				{/* Title */}
				<title>
					Наши контакты | Свяжитесь с нами для заказа душевых перегородок в
					Гомеле
				</title>
				{/* Meta Tags */}
				<meta
					name="description"
					content="Свяжитесь с нами, чтобы узнать условия доставки и оплаты стеклянных душевых перегородок в Гомеле. Удобные способы оплаты, качественный сервис!"
				/>
				<meta
					name="keywords"
					content="контакты, доставка, душевые перегородки, Гомель, оплата"
				/>
				{/* Meta OG */}
				<meta
					property="og:title"
					content="Наши контакты | Свяжитесь с нами для заказа перегородок"
				/>
				<meta
					property="og:description"
					content="Свяжитесь с нами для консультации по доставке и оплате перегородок в Гомеле."
				/>
				<meta property="og:image" content={ogImage} />
				<meta property="og:url" content={currentUrl} />
				<meta property="og:type" content="website" />
				{/* Meta Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Наши контакты | Свяжитесь с нами для заказа перегородок"
				/>
				<meta
					name="twitter:description"
					content="Свяжитесь с нами для консультации по доставке и оплате перегородок в Гомеле."
				/>
				<meta name="twitter:image" content={ogImage} />
				{/* Preloading image */}
				<link rel="preload" href={bgImg} as="image" type="image/png" />
				<link rel="preload" href={callUsImg} as="image" type="image/png" />
			</Helmet>
			<Breadcrumbs currentPage="Наши контакты" />
			<Contacts />
		</>
	)
}

export default ContactsPage
