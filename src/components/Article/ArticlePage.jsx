import { Helmet } from "react-helmet"
import { useLocation } from "react-router-dom"
import { AsideInfoWidget } from "../Widgets/AsideInfoWidget/AsideInfoWidget"
import { Breadcrumbs } from "../Widgets/Breadcrumbs/Breadcrumbs"
import ContactsWidget from "../Widgets/ContactsWidget/ContactsWidget"
import ScrollTopBtn from "../Widgets/ScrollTopBtn/ScrollTopBtn"
import { Article } from "./Article"
import articleBg from "../../assets/article/bg.webp"

export const ArticlePage = () => {
	const location = useLocation()
	const currentUrl = `https://garderobsystem.ru${location.pathname}`
	const ogImage =
		"https://W0x3R.github.io/Shower-Partitions-APP/article-og-img.jpg"
	return (
		<>
			<Helmet>
				{/* Title */}
				<title>
					Полезная информация | Как выбрать стеклянную душевую перегородку?
				</title>
				{/* Meta Tags */}
				<meta
					name="description"
					content="Как выбрать стеклянную душевую перегородку? Подробный гид по выбору, установке и уходу. Читай советы экспертов и выбирай лучшую модель!"
				/>
				<meta
					name="keywords"
					content="выбор душевых перегородок, стеклянные перегородки для ванной, душевая перегородка советы, купить стеклянную перегородку"
				/>
				{/* Meta OG */}
				<meta
					property="og:title"
					content="Полезная информация | Как выбрать стеклянную душевую перегородку?"
				/>
				<meta
					property="og:description"
					content="Узнай, какие стеклянные душевые перегородки подойдут именно тебе! Советы по выбору, установке и уходу от профессионалов."
				/>
				<meta property="og:image" content={ogImage} />
				<meta property="og:url" content={currentUrl} />
				<meta property="og:type" content="article" />
				{/* Meta Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Полезная информация | Как выбрать стеклянную душевую перегородку?"
				/>
				<meta
					name="twitter:description"
					content="Узнай, какие стеклянные душевые перегородки подойдут именно тебе! Советы по выбору, установке и уходу от профессионалов."
				/>
				<meta name="twitter:image" content={ogImage} />
				{/* Preloading image */}
				<link rel="preload" href={articleBg} as="image" type="image/webp" />
			</Helmet>
			<Breadcrumbs currentPage="Душевая перегородка из стекла — советы по выбору" />
			<Article aside={<AsideInfoWidget sticky />} />
			<ContactsWidget />
			<ScrollTopBtn />
		</>
	)
}
