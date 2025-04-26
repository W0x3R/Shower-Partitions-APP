import { Helmet } from "react-helmet"
import About from "./About/About"
import Products from "./Products/Products"
import Examples from "./Examples/Examples"
import Price from "./Price/Price"
import Questions from "./Questions/Questions"
import Standards from "./Standards/Standards"
import ShowerPartitionsDescription from "./Description/Description"
import { productsSectionSchema } from "../../data/schemaMarkup/mainPage/productsSection"
import { GetCurrentUrl } from "../../utils/getCurrentUrl"
import questionsSectionSchema from "../../data/schemaMarkup/mainPage/questionsSection"
import standardsSectionSchema from "../../data/schemaMarkup/mainPage/standardsSection"
import articleSectionSchema from "../../data/schemaMarkup/mainPage/articleSection"

const MainPage = () => {
	const ogImage =
		"https://res.cloudinary.com/dpvqykdi9/image/upload/v1745603938/main-og-img_rzf6yo.jpg"
	return (
		<>
			<Helmet>
				{/* Title */}
				<title>
					Душевые перегородки по индивидуальным размерам на заказ в Гомеле
				</title>
				{/* Meta Tags */}
				<meta
					name="description"
					content="Душевые перегородки на заказ по индивидуальным размерам в Гомеле: замер, изготовление, установка. Современный дизайн, закаленное стекло(8-10мм), надежная фурнитура, гарантия!"
				/>
				<meta
					name="keywords"
					content="DZ System,душевые перегородки Гомель, угловая душевая, перегородки для ванной,шторка в ванную, стеклянные конструкции, изготовление на заказ, монтаж и установка"
				/>
				{/* Micro Data */}
				{/* Products Micro Data start */}
				<script type="application/ld+json">
					{JSON.stringify(productsSectionSchema)}
				</script>
				{/* Products Micro Data end */}
				{/* Questions Micro Data start */}
				<script type="application/ld+json">
					{JSON.stringify(questionsSectionSchema)}
				</script>
				{/* Questions Micro Data end */}
				{/* Standards Micro Data start */}
				<script type="application/ld+json">
					{JSON.stringify(standardsSectionSchema)}
				</script>
				{/* Standards Micro Data end */}
				{/* Article Micro Data start */}
				<script type="application/ld+json">
					{JSON.stringify(articleSectionSchema)}
				</script>
				{/* Article Micro Data end */}
				{/* Meta OG */}
				<meta
					property="og:title"
					content="Душевые перегородки по индивидуальным размерам на заказ в Гомеле"
				/>
				<meta
					property="og:description"
					content="Душевые перегородки на заказ по индивидуальным размерам в Гомеле: замер, изготовление, установка. Современный дизайн, закаленное стекло(8-10мм), надежная фурнитура, гарантия!"
				/>
				<meta property="og:image" content={ogImage} />
				<meta property="og:url" content={GetCurrentUrl()} />
				<meta property="og:type" content="website" />
				{/* Meta Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Душевые перегородки по индивидуальным размерам на заказ в Гомеле"
				/>
				<meta
					name="twitter:description"
					content="Душевые перегородки на заказ по индивидуальным размерам в Гомеле: замер, изготовление, установка. Современный дизайн, закаленное стекло(8-10мм), надежная фурнитура, гарантия!"
				/>
				<meta name="twitter:image" content={ogImage} />
			</Helmet>
			<About />
			<Products />
			<Examples />
			<Price />
			<Questions />
			<Standards />
			<ShowerPartitionsDescription />
		</>
	)
}

export default MainPage
