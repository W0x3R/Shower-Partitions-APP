import bathCurtain from "../../assets/main/Шторка в ванную.webp"
import bathCurtainPopup from "../../assets/main/Шторка в ванную popup.webp"
import showerPartition from "../../assets/main/Душевая перегородка.webp"
import showerPartitionPopup from "../../assets/main/Душевая перегородка popup.webp"
import alcoveDoor from "../../assets/main/Дверь в нишу.webp"
import alcoveDoorPopup from "../../assets/main/Дверь в нишу popup.webp"
import alcoveShower from "../../assets/main/Душевая в нишу.webp"
import alcoveShowerPopup from "../../assets/main/Душевая в нишу popup.webp"
import cornerShower from "../../assets/main/Угловая душевая.webp"
import cornerShowerPopup from "../../assets/main/Угловая душевая popup.webp"
import trapezoidalShower from "../../assets/main/Трапециевидная душевая.webp"
import trapezoidalShowerPopup from "../../assets/main/Трапециевидная душевая popup.webp"
import showerCabin from "../../assets/main/Душевая кабина.webp"
import showerCabinPopup from "../../assets/main/Душевая кабина popup.webp"
import transparentGlass from "../../assets/main/бесцветное стекло.webp"
import transparentGlassPopup from "../../assets/main/бесцветное стекло popup.webp"
import brightenedGlass from "../../assets/main/осветленное стекло.webp"
import brightenedGlassPopup from "../../assets/main/осветленное стекло popup.webp"
import frostedGlass from "../../assets/main/матовое стекло.webp"
import frostedGlassPopup from "../../assets/main/матовое стекло popup.webp"
import tonedBronzeGlass from "../../assets/main/тонированое бронзовое стекло.webp"
import tonedBronzeGlassPopup from "../../assets/main/тонированое бронзовое стекло popup.webp"
import tonedGraphiteGlass from "../../assets/main/тонированное графитовое стекло.webp"
import tonedGraphiteGlassPopup from "../../assets/main/тонированное графитовое стекло popup.webp"
import blackFurniture from "../../assets/main/черная фурнитура.webp"
import blackFurniturePopup from "../../assets/main/черная фурнитура popup.webp"
import goldFurniture from "../../assets/main/золотая фурнитура.webp"
import goldFurniturePopup from "../../assets/main/золотая фурнитура popup.webp"
import bronzeFurniture from "../../assets/main/бронзовая фурнитура.webp"
import bronzeFurniturePopup from "../../assets/main/бронзовая фурнитура popup.webp"
import nickelFurniture from "../../assets/main/никелевая фурнитура.webp"
import nickelFurniturePopup from "../../assets/main/никелевая фурнитура popup.webp"
import chromeFurniture from "../../assets/main/хромовая фурнитура.webp"
import chromeFurniturePopup from "../../assets/main/хромовая фурнитура popup.webp"
import swingingDoor from "../../assets/main/распашная дверь.webp"
import swingingDoorPopup from "../../assets/main/распашная дверь popup.webp"
import rollingDoor from "../../assets/main/откатная дверь.webp"
import rollingDoorPopup from "../../assets/main/откатная дверь popup.webp"

export const productsData = {
	showers: [
		{
			id: "1_showers",
			title: "Шторка в ванную",
			imgSrc: bathCurtain,
			popupImgSrc: bathCurtainPopup,
			alt: "На изображении отображено как выглядит стеклянная шторка для ванной.",
		},
		{
			id: "2_showers",
			title: "Душевая перегородка",
			imgSrc: showerPartition,
			popupImgSrc: showerPartitionPopup,
			alt: "На изображении отображено как выглядит стеклянная душевая перегородка.",
		},
		{
			id: "3_showers",
			title: "Дверь в нишу",
			imgSrc: alcoveDoor,
			popupImgSrc: alcoveDoorPopup,
			alt: "На изображении отображено как выглядит стеклянная дверь в нишу.",
		},
		{
			id: "4_showers",
			title: "Душевая в нишу",
			imgSrc: alcoveShower,
			popupImgSrc: alcoveShowerPopup,
			alt: "На изображении отображено как выглядит стеклянная душевая в нишу.",
		},
		{
			id: "5_showers",
			title: "Угловая душевая",
			imgSrc: cornerShower,
			popupImgSrc: cornerShowerPopup,
			alt: "На изображении отображено как выглядит стеклянная угловая душевая.",
		},
		{
			id: "6_showers",
			title: "Трапециевидная душевая",
			imgSrc: trapezoidalShower,
			popupImgSrc: trapezoidalShowerPopup,
			alt: "На изображении отображено как выглядит стеклянная трапециевидная душевая.",
		},
		{
			id: "7_showers",
			title: "Душевая кабина",
			imgSrc: showerCabin,
			popupImgSrc: showerCabinPopup,
			alt: "На изображении отображено как выглядит душевая кабина.",
		},
	],
	glasses: [
		{
			id: "1_glasses",
			title: "Бесцветное стекло",
			imgSrc: transparentGlass,
			popupImgSrc: transparentGlassPopup,
			alt: "На изображении отображено как выглядит бесцветное стекло для душевых перегородок.",
		},
		{
			id: "2_glasses",
			title: "Осветленное стекло",
			imgSrc: brightenedGlass,
			popupImgSrc: brightenedGlassPopup,
			alt: "На изображении отображено как выглядит осветленное стекло для душевых перегородок.",
		},
		{
			id: "3_glasses",
			title: "Матовое стекло (Обычное,бронзовое,графит)",
			imgSrc: frostedGlass,
			popupImgSrc: frostedGlassPopup,
			alt: "На изображении отображено как выглядит матовое стекло для душевых перегородок. Также указано что матовое стекло бывает трех цветов: обычное, бронзовое и графитовое",
		},
		{
			id: "4_glasses",
			title: "Тонированное стекло с оттенком бронзы",
			imgSrc: tonedBronzeGlass,
			popupImgSrc: tonedBronzeGlassPopup,
			alt: "На изображении отображено как выглядит тонированное стекло с оттенком бронзы для душевых перегородок.",
		},
		{
			id: "5_glasses",
			title: "Тонированное cтекло с оттенком графита",
			imgSrc: tonedGraphiteGlass,
			popupImgSrc: tonedGraphiteGlassPopup,
			alt: "На изображении отображено как выглядит тонированное стекло с оттенком графита для душевых перегородок.",
		},
	],
	furniture: [
		{
			id: "1_furniture",
			title: "Черный",
			imgSrc: blackFurniture,
			popupImgSrc: blackFurniturePopup,
			alt: "На изображении отображено как выглядит фурнитура черного цвета для душевых перегородок.",
		},
		{
			id: "2_furniture",
			title: "Золото",
			imgSrc: goldFurniture,
			popupImgSrc: goldFurniturePopup,
			alt: "На изображении отображено как выглядит фурнитура золотого цвета для душевых перегородок.",
		},
		{
			id: "3_furniture",
			title: "Бронза",
			imgSrc: bronzeFurniture,
			popupImgSrc: bronzeFurniturePopup,
			alt: "На изображении отображено как выглядит фурнитура бронзового цвета для душевых перегородок.",
		},
		{
			id: "4_furniture",
			title: "Никель",
			imgSrc: nickelFurniture,
			popupImgSrc: nickelFurniturePopup,
			alt: "На изображении отображено как выглядит фурнитура цвета никель для душевых перегородок.",
		},
		{
			id: "5_furniture",
			title: "Хром",
			imgSrc: chromeFurniture,
			popupImgSrc: chromeFurniturePopup,
			alt: "На изображении отображено как выглядит фурнитура цвета хром для душевых перегородок.",
		},
	],
	typeOpening: [
		{
			id: "1_typeOpening",
			title: "Распашная",
			imgSrc: swingingDoor,
			popupImgSrc: swingingDoorPopup,
			alt: "На изображении отображено как выглядит душевая перегородка с распашным типом открытия",
		},
		{
			id: "2_typeOpening",
			title: "Откатная",
			imgSrc: rollingDoor,
			popupImgSrc: rollingDoorPopup,
			alt: "На изображении отображено как выглядит душевая перегородка с откатным типом открытия",
		},
	],
}

export {
	showerPartitionPopup,
	cornerShowerPopup,
	showerCabinPopup,
	trapezoidalShowerPopup,
	swingingDoorPopup,
	rollingDoorPopup,
	alcoveDoorPopup,
	alcoveShowerPopup,
	transparentGlassPopup,
	brightenedGlassPopup,
	frostedGlassPopup,
	tonedGraphiteGlassPopup,
	blackFurniturePopup,
	goldFurniturePopup,
	bronzeFurniturePopup,
	nickelFurniturePopup,
	chromeFurniturePopup,
}
