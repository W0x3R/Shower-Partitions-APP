import { Helmet } from "react-helmet"
import bgImg from "../../assets/ContactsPage/bg.png"
import callUsImg from "../../assets/ContactsPage/callUs.png"
import Breadcrumbs from "../Widgets/Breadcrumbs/Breadcrumbs"
import Contacts from "./Contacts"
import { GetCurrentUrl } from "../../utils/getCurrentUrl"
import contactsPageSchema from "../../data/schemaMarkup/contactsPage"

const ContactsPage = () => {
	const ogImage =
		"https://res.cloudinary.com/dpvqykdi9/image/upload/v1745603936/contacts-og-img_ma97ih.jpg"
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
				{/* Micro Data start */}
				<script type="application/ld+json">
					{JSON.stringify(contactsPageSchema)}
				</script>
				{/* Micro Data end */}
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
				<meta property="og:url" content={GetCurrentUrl()} />
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
