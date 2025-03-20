import bathCurtainImg from "../assets/MainPage/products/шторка в ванную.webp"
import showerPartitionImg from "../assets/MainPage/products/душевая перегородка.webp"
import alcoveDoorImg from "../assets/MainPage/products/дверь в нишу.webp"
import alcoveShowerImg from "../assets/MainPage/products/душевая в нишу.webp"
import cornerShowerImg from "../assets/MainPage/products/угловая душевая.webp"
import trapezoidalShowerImg from "../assets/MainPage/products/трапециевидная душевая.webp"
import showerCabinImg from "../assets/MainPage/products/душевая кабина.webp"
import transparentGlassImg from "../assets/MainPage/products/бесцветное стекло.webp"
import brightenedGlassImg from "../assets/MainPage/products/осветленное стекло.webp"
import frostedGlassImg from "../assets/MainPage/products/матовое стекло.webp"
import tonedBronzeGlassImg from "../assets/MainPage/products/тонированое бронзовое стекло.webp"
import tonedGraphiteGlassImg from "../assets/MainPage/products/тонированное графитовое стекло.webp"
import blackFurnitureImg from "../assets/MainPage/products/черная фурнитура.webp"
import goldFurnitureImg from "../assets/MainPage/products/золотая фурнитура.webp"
import bronzeFurnitureImg from "../assets/MainPage/products/бронзовая фурнитура.webp"
import nickelFurnitureImg from "../assets/MainPage/products/никелевая фурнитура.webp"
import chromeFurnitureImg from "../assets/MainPage/products/хромовая фурнитура.webp"
import swingingDoorImg from "../assets/MainPage/products/распашная дверь.webp"
import rollingDoorImg from "../assets/MainPage/products/откатная дверь.webp"

export const productsData = {
	showers: [
		{
			id: "1_showers",
			title: "Шторка в ванную",
			ImgSrc: bathCurtainImg,
			alt: "На изображении отображено как выглядит стеклянная шторка для ванной.",
		},
		{
			id: "2_showers",
			title: "Душевая перегородка",
			ImgSrc: showerPartitionImg,
			alt: "На изображении отображено как выглядит стеклянная душевая перегородка.",
		},
		{
			id: "3_showers",
			title: "Дверь в нишу",
			ImgSrc: alcoveDoorImg,
			alt: "На изображении отображено как выглядит стеклянная дверь в нишу.",
		},
		{
			id: "4_showers",
			title: "Душевая в нишу",
			ImgSrc: alcoveShowerImg,
			alt: "На изображении отображено как выглядит стеклянная душевая в нишу.",
		},
		{
			id: "5_showers",
			title: "Угловая душевая",
			ImgSrc: cornerShowerImg,
			alt: "На изображении отображено как выглядит стеклянная угловая душевая.",
		},
		{
			id: "6_showers",
			title: "Трапециевидная душевая",
			ImgSrc: trapezoidalShowerImg,
			alt: "На изображении отображено как выглядит стеклянная трапециевидная душевая.",
		},
		{
			id: "7_showers",
			title: "Душевая кабина",
			ImgSrc: showerCabinImg,
			alt: "На изображении отображено как выглядит душевая кабина.",
		},
	],
	glasses: [
		{
			id: "1_glasses",
			title: "Бесцветное стекло",
			ImgSrc: transparentGlassImg,
			alt: "На изображении отображено как выглядит бесцветное стекло для душевых перегородок.",
		},
		{
			id: "2_glasses",
			title: "Осветленное стекло",
			ImgSrc: brightenedGlassImg,
			alt: "На изображении отображено как выглядит осветленное стекло для душевых перегородок.",
		},
		{
			id: "3_glasses",
			title: "Матовое стекло (Обычное,бронзовое,графит)",
			ImgSrc: frostedGlassImg,
			alt: "На изображении отображено как выглядит матовое стекло для душевых перегородок. Также указано что матовое стекло бывает трех цветов: обычное, бронзовое и графитовое",
		},
		{
			id: "4_glasses",
			title: "Тонированное стекло с оттенком бронзы",
			ImgSrc: tonedBronzeGlassImg,
			alt: "На изображении отображено как выглядит тонированное стекло с оттенком бронзы для душевых перегородок.",
		},
		{
			id: "5_glasses",
			title: "Тонированное cтекло с оттенком графита",
			ImgSrc: tonedGraphiteGlassImg,
			alt: "На изображении отображено как выглядит тонированное стекло с оттенком графита для душевых перегородок.",
		},
	],
	furniture: [
		{
			id: "1_furniture",
			title: "Черный",
			ImgSrc: blackFurnitureImg,
			alt: "На изображении отображено как выглядит фурнитура черного цвета для душевых перегородок.",
		},
		{
			id: "2_furniture",
			title: "Золото",
			ImgSrc: goldFurnitureImg,
			alt: "На изображении отображено как выглядит фурнитура золотого цвета для душевых перегородок.",
		},
		{
			id: "3_furniture",
			title: "Бронза",
			ImgSrc: bronzeFurnitureImg,
			alt: "На изображении отображено как выглядит фурнитура бронзового цвета для душевых перегородок.",
		},
		{
			id: "4_furniture",
			title: "Никель",
			ImgSrc: nickelFurnitureImg,
			alt: "На изображении отображено как выглядит фурнитура никелевого цвета для душевых перегородок.",
		},
		{
			id: "5_furniture",
			title: "Хром",
			ImgSrc: chromeFurnitureImg,
			alt: "На изображении отображено как выглядит фурнитура хромового цвета для душевых перегородок.",
		},
	],
	typeOpening: [
		{
			id: "1_typeOpening",
			title: "Распашная",
			ImgSrc: swingingDoorImg,
			alt: "На изображении отображено как выглядит душевая перегородка с распашным типом открытия",
		},
		{
			id: "2_typeOpening",
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
