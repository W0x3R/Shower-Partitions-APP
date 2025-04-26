import { GetCurrentUrl } from "../../utils/getCurrentUrl"

const getBreadcrumbSchema = (currentPage) => {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Главная",
				item: "https://w0x3r.github.io/Shower-Partitions-APP",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: currentPage,
				item: GetCurrentUrl(),
			},
		],
	}
}

export default getBreadcrumbSchema
