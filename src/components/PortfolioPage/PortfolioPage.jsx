import { Helmet } from "react-helmet"
import Breadcrumbs from "../Widgets/Breadcrumbs/Breadcrumbs"
import Portfolio from "./Portfolio"
import { GetCurrentUrl } from "../../utils/getCurrentUrl"
import portfolioPageSchema from "../../data/schemaMarkup/portfolioPage"

const PortfolioPage = () => {
	const ogImage =
		"https://res.cloudinary.com/dpvqykdi9/image/upload/v1745672155/portfolio-og-img_usf45x.jpg"
	return (
		<>
			<Helmet>
				{/* Title */}
				<title>Наши работы | Портфолио душевых перегородок в Гомеле</title>
				{/* Meta Tags */}
				<meta
					name="description"
					content="Ознакомьтесь с нашими работами по изготовлению и установке стеклянных душевых перегородок. Реальные примеры, качественное исполнение и индивидуальные решения!"
				/>
				<meta
					name="keywords"
					content="портфолио душевых перегородок, примеры работ, установка стеклянных перегородок, фото работ, душевые перегородки на заказ"
				/>
				{/* Micro Data start  */}
				<script type="application/ld+json">
					{JSON.stringify(portfolioPageSchema)}
				</script>
				{/* Micro Data end  */}
				{/* Meta OG */}
				<meta
					property="og:title"
					content="Наши работы | Портфолио душевых перегородок в Гомеле"
				/>
				<meta
					property="og:description"
					content="Реальные примеры стеклянных душевых перегородок. Качественная установка, индивидуальный дизайн и надежные материалы."
				/>
				<meta property="og:image" content={ogImage} />
				<meta property="og:url" content={GetCurrentUrl()} />
				<meta property="og:type" content="article" />
				{/* Meta Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Наши работы | Портфолио душевых перегородок в Гомеле"
				/>
				<meta
					name="twitter:description"
					content="Галерея наших выполненных проектов. Изготовление и установка душевых перегородок на заказ в Гомеле."
				/>
				<meta name="twitter:image" content={ogImage} />
			</Helmet>
			<Breadcrumbs currentPage="Наши работы" gray />
			<Portfolio />
		</>
	)
}

export default PortfolioPage
