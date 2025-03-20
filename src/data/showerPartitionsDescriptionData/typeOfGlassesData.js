import {
	brightenedGlassImg,
	frostedGlassImg,
	tonedGraphiteGlassImg,
	transparentGlassImg,
} from "../productsData"

const typeOfGlassesData = [
	{
		id: "glasses_types_0",
		title: "Бесцветное",
		spanText: ` — стандартное каленое стекло толщиной 8–10 мм.`,
		aria: "Открыть изображение бесцветного стекла",
		imgSrc: transparentGlassImg,
		alt: "На изображении отображено как выглядит бесцветное стекло для душевых перегородок.",
	},
	{
		id: "glasses_types_1",
		title: "Осветленное",
		spanText: `— максимально прозрачное полотно, обладающее наибольшей
		светопропускающей способностью и естественной передачей цвета.`,
		aria: "Открыть изображение осветленного стекла",
		imgSrc: brightenedGlassImg,
		alt: "На изображении отображено как выглядит осветленное стекло для душевых перегородок.",
	},
	{
		id: "glasses_types_2",
		title: "Матовое",
		spanText: `— полупрозрачное с матовой поверхностью.`,
		aria: "Открыть изображение стекла с матовой поверхностью",
		imgSrc: frostedGlassImg,
		alt: "На изображении отображено как выглядит матовое стекло для душевых перегородок.",
	},
	{
		id: "glasses_types_3",
		title: "Цветное",
		spanText: `(тонированное или окрашенное в массе) — бронзовое, черное, другие цвета.`,
		aria: "Открыть изображение  цветного стекла",
		imgSrc: tonedGraphiteGlassImg,
		alt: "На изображении отображено как выглядит цветное стекло для душевых перегородок.",
	},
]

export default typeOfGlassesData
