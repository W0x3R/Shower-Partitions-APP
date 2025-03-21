import bathCurtainImg from "../../assets/mainPage/products/шторка в ванную.webp"
import showerPartitionImg from "../../assets/mainPage/products/душевая перегородка.webp"
import alcoveDoorImg from "../../assets/mainPage/products/дверь в нишу.webp"
import alcoveShowerImg from "../../assets/mainPage/products/душевая в нишу.webp"
import cornerShowerImg from "../../assets/mainPage/products/угловая душевая.webp"
import trapezoidalShowerImg from "../../assets/mainPage/products/трапециевидная душевая.webp"
import showerCabinImg from "../../assets/mainPage/products/душевая кабина.webp"
import transparentGlassImg from "../../assets/mainPage/products/бесцветное стекло.webp"
import brightenedGlassImg from "../../assets/mainPage/products/осветленное стекло.webp"
import frostedGlassImg from "../../assets/mainPage/products/матовое стекло.webp"
import tonedBronzeGlassImg from "../../assets/mainPage/products/тонированое бронзовое стекло.webp"
import tonedGraphiteGlassImg from "../../assets/mainPage/products/тонированное графитовое стекло.webp"
import blackFurnitureImg from "../../assets/mainPage/products/черная фурнитура.webp"
import goldFurnitureImg from "../../assets/mainPage/products/золотая фурнитура.webp"
import bronzeFurnitureImg from "../../assets/mainPage/products/бронзовая фурнитура.webp"
import nickelFurnitureImg from "../../assets/mainPage/products/никелевая фурнитура.webp"
import chromeFurnitureImg from "../../assets/mainPage/products/хромовая фурнитура.webp"
import swingingDoorImg from "../../assets/mainPage/products/распашная дверь.webp"
import rollingDoorImg from "../../assets/mainPage/products/откатная дверь.webp"

export const productsData = {
	showers: [
		{
			id: "showers_0",
			title: "Шторка в ванную",
			ImgSrc: bathCurtainImg,
			alt: "На изображении отображено как выглядит стеклянная шторка для ванной.",
		},
		{
			id: "showers_1",
			title: "Душевая перегородка",
			ImgSrc: showerPartitionImg,
			alt: "На изображении отображено как выглядит стеклянная душевая перегородка.",
		},
		{
			id: "showers_2",
			title: "Дверь в нишу",
			ImgSrc: alcoveDoorImg,
			alt: "На изображении отображено как выглядит стеклянная дверь в нишу.",
		},
		{
			id: "showers_3",
			title: "Душевая в нишу",
			ImgSrc: alcoveShowerImg,
			alt: "На изображении отображено как выглядит стеклянная душевая в нишу.",
		},
		{
			id: "showers_4",
			title: "Угловая душевая",
			ImgSrc: cornerShowerImg,
			alt: "На изображении отображено как выглядит стеклянная угловая душевая.",
		},
		{
			id: "showers_5",
			title: "Трапециевидная душевая",
			ImgSrc: trapezoidalShowerImg,
			alt: "На изображении отображено как выглядит стеклянная трапециевидная душевая.",
		},
		{
			id: "showers_6",
			title: "Душевая кабина",
			ImgSrc: showerCabinImg,
			alt: "На изображении отображено как выглядит душевая кабина.",
		},
	],
	glasses: [
		{
			id: "glasses_0",
			title: "Бесцветное стекло",
			ImgSrc: transparentGlassImg,
			alt: "На изображении отображено как выглядит бесцветное стекло для душевых перегородок.",
		},
		{
			id: "glasses_1",
			title: "Осветленное стекло",
			ImgSrc: brightenedGlassImg,
			alt: "На изображении отображено как выглядит осветленное стекло для душевых перегородок.",
		},
		{
			id: "glasses_2",
			title: "Матовое стекло (Обычное,бронзовое,графит)",
			ImgSrc: frostedGlassImg,
			alt: "На изображении отображено как выглядит матовое стекло для душевых перегородок. Также указано что матовое стекло бывает трех цветов: обычное, бронзовое и графитовое",
		},
		{
			id: "glasses_3",
			title: "Тонированное стекло с оттенком бронзы",
			ImgSrc: tonedBronzeGlassImg,
			alt: "На изображении отображено как выглядит тонированное стекло с оттенком бронзы для душевых перегородок.",
		},
		{
			id: "glasses_4",
			title: "Тонированное cтекло с оттенком графита",
			ImgSrc: tonedGraphiteGlassImg,
			alt: "На изображении отображено как выглядит тонированное стекло с оттенком графита для душевых перегородок.",
		},
	],
	furniture: [
		{
			id: "furniture_0",
			title: "Черный",
			ImgSrc: blackFurnitureImg,
			alt: "На изображении отображено как выглядит фурнитура черного цвета для душевых перегородок.",
		},
		{
			id: "furniture_1",
			title: "Золото",
			ImgSrc: goldFurnitureImg,
			alt: "На изображении отображено как выглядит фурнитура золотого цвета для душевых перегородок.",
		},
		{
			id: "furniture_2",
			title: "Бронза",
			ImgSrc: bronzeFurnitureImg,
			alt: "На изображении отображено как выглядит фурнитура бронзового цвета для душевых перегородок.",
		},
		{
			id: "furniture_3",
			title: "Никель",
			ImgSrc: nickelFurnitureImg,
			alt: "На изображении отображено как выглядит фурнитура никелевого цвета для душевых перегородок.",
		},
		{
			id: "furniture_4",
			title: "Хром",
			ImgSrc: chromeFurnitureImg,
			alt: "На изображении отображено как выглядит фурнитура хромового цвета для душевых перегородок.",
		},
	],
	typeOpening: [
		{
			id: "typeOpening_0",
			title: "Распашная",
			ImgSrc: swingingDoorImg,
			alt: "На изображении отображено как выглядит душевая перегородка с распашным типом открытия",
		},
		{
			id: "typeOpening_1",
			title: "Откатная",
			ImgSrc: rollingDoorImg,
			alt: "На изображении отображено как выглядит душевая перегородка с откатным типом открытия",
		},
	],
}

export {
	showerPartitionImg,
	cornerShowerImg,
	showerCabinImg,
	trapezoidalShowerImg,
	swingingDoorImg,
	rollingDoorImg,
	alcoveDoorImg,
	alcoveShowerImg,
	transparentGlassImg,
	brightenedGlassImg,
	frostedGlassImg,
	tonedGraphiteGlassImg,
	blackFurnitureImg,
	goldFurnitureImg,
	bronzeFurnitureImg,
	nickelFurnitureImg,
	chromeFurnitureImg,
}
