import articleBgImg from "../../assets/ArticlePage/bg.webp"
import { Helmet } from "react-helmet"
import Breadcrumbs from "../Widgets/Breadcrumbs/Breadcrumbs"
import ServicesCost from "./Price"
import { GetCurrentUrl } from "../../utils/getCurrentUrl"
import pricePageSchema from "../../data/schemaMarkup/pricePage"

const PricePage = () => {
	const ogImage =
		"https://res.cloudinary.com/dpvqykdi9/image/upload/v1745603935/price-og-img_ub3dyg.jpg"
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
				{/* Micro Data start */}
				<script type="application/ld+json">
					{JSON.stringify(pricePageSchema)}
				</script>
				{/* Micro Data end */}
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
				<meta property="og:url" content={GetCurrentUrl()} />
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
				<link rel="preload" href={articleBgImg} as="image" type="image/webp" />
			</Helmet>
			<Breadcrumbs currentPage="Стоимость услуг" />
			<ServicesCost />
		</>
	)
}

export default PricePage
