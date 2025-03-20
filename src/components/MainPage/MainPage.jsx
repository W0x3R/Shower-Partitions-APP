import { Helmet } from "react-helmet"
import { useLocation } from "react-router-dom"
import bigBg from "../../assets/MainPage/main-bg-big.webp"
import smallBg from "../../assets/MainPage/main-bg-small.webp"
import About from "./About/About"
import Products from "./Products/Products"
import Examples from "./Examples/Examples"
import Price from "./Price/Price"
import Questions from "./Questions/Questions"
import Standards from "./Standards/Standards"
import ShowerPartitionsDescription from "./Description/Description"
import isMobile from "../../utils/isMobile"

const MainPage = () => {
	const location = useLocation()
	const currentUrl = `https://garderobsystem.ru${location.pathname}`
	const ogImage = "https://W0x3R.github.io/Shower-Partitions-APP/og-image.jpg"
	return (
		<>
			<Helmet>
				{/* Title */}
				<title>
					Главная | Душевые перегородки по индивидуальным размерам на заказ в
					Гомеле
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
				{/* Meta OG */}
				<meta
					property="og:title"
					content="Главная | Душевые перегородки по индивидуальным размерам на заказ в
					Гомеле"
				/>
				<meta
					property="og:description"
					content="Душевые перегородки на заказ по индивидуальным размерам в Гомеле: замер, изготовление, установка. Современный дизайн, закаленное стекло(8-10мм), надежная фурнитура, гарантия!"
				/>
				<meta property="og:image" content={ogImage} />
				<meta property="og:url" content={currentUrl} />
				<meta property="og:type" content="website" />
				{/* Meta Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Главная | Душевые перегородки по индивидуальным размерам на заказ в
					Гомеле"
				/>
				<meta
					name="twitter:description"
					content="Душевые перегородки на заказ по индивидуальным размерам в Гомеле: замер, изготовление, установка. Современный дизайн, закаленное стекло(8-10мм), надежная фурнитура, гарантия!"
				/>
				<meta name="twitter:image" content={ogImage} />
				{/* Preloading images */}
				{isMobile() ?
					<link rel="preload" href={smallBg} as="image" type="image/webp" />
				:	<link rel="preload" href={bigBg} as="image" type="image/webp" />}
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
