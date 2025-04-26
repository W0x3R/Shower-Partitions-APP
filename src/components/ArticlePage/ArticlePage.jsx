import { Helmet } from "react-helmet"
import articleBg from "../../assets/ArticlePage/bg.webp"
import Breadcrumbs from "../Widgets/Breadcrumbs/Breadcrumbs"
import Article from "./Article"
import { GetCurrentUrl } from "../../utils/getCurrentUrl"
import articlePageSchema from "../../data/schemaMarkup/articlePage"

const ArticlePage = () => {
	const ogImage =
		"https://res.cloudinary.com/dpvqykdi9/image/upload/v1745603935/article-og-img_ctzoa7.jpg"
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
				{/* Micro Data start */}
				<script type="application/ld+json">
					{JSON.stringify(articlePageSchema)}
				</script>
				{/* Micro Data end */}
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
				<meta property="og:url" content={GetCurrentUrl()} />
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
			<Article />
		</>
	)
}

export default ArticlePage
