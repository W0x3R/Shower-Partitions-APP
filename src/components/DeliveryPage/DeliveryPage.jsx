import { Helmet } from "react-helmet"
import deliveryImg from "../../assets/DeliveryPage/delivery-img.png"
import Breadcrumbs from "../Widgets/Breadcrumbs/Breadcrumbs"
import Delivery from "./Delivery"
import { GetCurrentUrl } from "../../utils/getCurrentUrl"
import deliveryPageSchema from "../../data/schemaMarkup/deliveryPage"

const DeliveryPage = () => {
	const ogImage =
		"https://res.cloudinary.com/dpvqykdi9/image/upload/v1745603937/delivery-og-img_fq34fy.jpg"
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
				{/* Micro Data start */}
				<script type="application/ld+json">
					{JSON.stringify(deliveryPageSchema)}
				</script>
				{/* Micro Data end */}
				{/* Meta OG */}
				<meta
					property="og:title"
					content="Доставка и оплата | Информация о доставке душевых перегородок на заказ в Гомеле"
				/>
				<meta
					property="og:description"
					content="Узнайте условия доставки и оплаты стеклянных душевых перегородок на заказ в Гомеле. Быстрая доставка, удобные способы оплаты и качественный сервис!"
				/>
				<meta property="og:image" content={ogImage} />
				<meta property="og:url" content={GetCurrentUrl()} />
				<meta property="og:type" content="article" />
				{/* Meta Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Доставка и оплата | Информация о доставке душевых перегородок на заказ в Гомеле"
				/>
				<meta
					name="twitter:description"
					content="Быстрая доставка душевых перегородок в Гомеле. Удобные способы оплаты, современный дизайн и гарантия качества!"
				/>
				<meta name="twitter:image" content={ogImage} />
				{/* Preloading image */}
				<link rel="preload" href={deliveryImg} as="image" type="image/png" />
			</Helmet>
			<Breadcrumbs currentPage="Оплата и доставка" />
			<Delivery />
		</>
	)
}

export default DeliveryPage
