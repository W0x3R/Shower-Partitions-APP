import { Helmet } from "react-helmet"
import { AsideInfoWidget } from "../Widgets/AsideInfoWidget/AsideInfoWidget"
import { Breadcrumbs } from "../Widgets/Breadcrumbs/Breadcrumbs"
import ContactsWidget from "../Widgets/ContactsWidget/ContactsWidget"
import ScrollTopBtn from "../Widgets/ScrollTopBtn/ScrollTopBtn"
import { Article } from "./Article"

export const ArticlePage = () => {
	return (
		<>
			<Helmet>
				<title>
					Полезная информация | Душевая перегородка из стекла - советы по выбору
				</title>
				<meta
					name="description"
					content="Как выбрать стеклянную душевую перегородку? Советы по выбору, установке и уходу за душевыми перегородками для ванной комнаты."
				/>
				<meta
					name="keywords"
					content="выбор душевых перегородок, стеклянные перегородки для ванной, душевая перегородка советы, купить стеклянную перегородку"
				/>
			</Helmet>
			<Breadcrumbs currentPage="Душевая перегородка из стекла — советы по выбору" />
			<Article aside={<AsideInfoWidget sticky />} />
			<ContactsWidget />
			<ScrollTopBtn />
		</>
	)
}
