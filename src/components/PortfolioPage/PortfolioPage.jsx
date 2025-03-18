import { Helmet } from "react-helmet"
import { useLocation } from "react-router-dom"
import Breadcrumbs from "../Widgets/Breadcrumbs/Breadcrumbs"
import Portfolio from "./Portfolio"

const PortfolioPage = () => {
	const location = useLocation()
	const currentUrl = `https://garderobsystem.ru${location.pathname}`
	const ogImage =
		"https://W0x3R.github.io/Shower-Partitions-APP/portfolio-og-img.jpg"
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
				<meta property="og:url" content={currentUrl} />
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
