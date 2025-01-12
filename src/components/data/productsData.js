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
import rolingDoor from "../../assets/main/откатная дверь.webp"
import rolingDoorPopup from "../../assets/main/откатная дверь popup.webp"

export const productsData = {
	showers: [
		{
			id: "1_showers",
			title: "Шторка в ванную",
			src: bathCurtain,
			popupSrc: bathCurtainPopup,
		},
		{
			id: "2_showers",
			title: "Душевая перегородка",
			src: showerPartition,
			popupSrc: showerPartitionPopup,
		},
		{
			id: "3_showers",
			title: "Дверь в нишу",
			src: alcoveDoor,
			popupSrc: alcoveDoorPopup,
		},
		{
			id: "4_showers",
			title: "Душевая в нишу",
			src: alcoveShower,
			popupSrc: alcoveShowerPopup,
		},
		{
			id: "5_showers",
			title: "Угловая душевая",
			src: cornerShower,
			popupSrc: cornerShowerPopup,
		},
		{
			id: "6_showers",
			title: "Трапецивидная душевая",
			src: trapezoidalShower,
			popupSrc: trapezoidalShowerPopup,
		},
		{
			id: "7_showers",
			title: "Душевая кабина",
			src: showerCabin,
			popupSrc: showerCabinPopup,
		},
	],
	glasses: [
		{
			id: "1_glasses",
			title: "Бесцветное стекло",
			src: transparentGlass,
			popupSrc: transparentGlassPopup,
		},
		{
			id: "2_glasses",
			title: "Осветленное стекло",
			src: brightenedGlass,
			popupSrc: brightenedGlassPopup,
		},
		{
			id: "3_glasses",
			title: "Матовое стекло (Обычное,бронзовое,графит)",
			src: frostedGlass,
			popupSrc: frostedGlassPopup,
		},
		{
			id: "4_glasses",
			title: "Тонированное стекло с оттенком бронзы",
			src: tonedBronzeGlass,
			popupSrc: tonedBronzeGlassPopup,
		},
		{
			id: "5_glasses",
			title: "Тонированное cтекло с оттенком графита",
			src: tonedGraphiteGlass,
			popupSrc: tonedGraphiteGlassPopup,
		},
	],
	furniture: [
		{
			id: "1_furniture",
			title: "Хром",
			src: blackFurniture,
			popupSrc: blackFurniturePopup,
		},
		{
			id: "2_furniture",
			title: "Черный",
			src: goldFurniture,
			popupSrc: goldFurniturePopup,
		},
		{
			id: "3_furniture",
			title: "Золото",
			src: bronzeFurniture,
			popupSrc: bronzeFurniturePopup,
		},
		{
			id: "4_furniture",
			title: "Бронза",
			src: nickelFurniture,
			popupSrc: nickelFurniturePopup,
		},
		{
			id: "5_furniture",
			title: "Никель",
			src: chromeFurniture,
			popupSrc: chromeFurniturePopup,
		},
	],
	typeOpening: [
		{
			id: "1_typeOpening",
			title: "Распашная",
			src: swingingDoor,
			popupSrc: swingingDoorPopup,
		},
		{
			id: "2_typeOpening",
			title: "Откатная",
			src: rolingDoor,
			popupSrc: rolingDoorPopup,
		},
	],
}
