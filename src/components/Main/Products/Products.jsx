import { useState } from "react"
import styles from "./Products.module.scss"
import { combinedData } from "../../data/productsData"
import curtain from "../../../assets/main/Шторка в ванную.webp"
import curtain11 from "../../../assets/main/Шторка в ванную.jpg?"
import curtain1 from "../../../assets/main/Душевая перегородка.webp"
import curtain2 from "../../../assets/main/Дверь в нишу.webp"
import curtain3 from "../../../assets/main/Душевая в нишу.webp"
import curtain4 from "../../../assets/main/Угловая душевая small.webp"
import curtain5 from "../../../assets/main/Трапециевидная душевая.webp"
import curtain6 from "../../../assets/main/Душевая кабина.webp"

export const Products = () => {
	const [activeBtn, setActiveBtn] = useState("showers")

	const handleButtonActive = (value) => {
		setActiveBtn(value)
	}

	return (
		<section className={styles.products}>
			<div className="container">
				<h2 className={styles.products__title}>
					Душевые перегородки по вашим размерам
				</h2>
				<p className={styles.products__text}>
					Виды душевых перегородок и комплектующих
				</p>
				<div className={styles.products__types}>
					<button
						onClick={() => handleButtonActive("showers")}
						className={`${styles["products__types-btn"]} ${activeBtn === "showers" ? styles.active : ""}`}
					>
						Формы душевых
					</button>
					<button
						onClick={() => handleButtonActive("glasses")}
						className={`${styles["products__types-btn"]} ${activeBtn === "glasses" ? styles.active : ""}`}
					>
						Виды стекла
					</button>
					<button
						onClick={() => handleButtonActive("furniture")}
						className={`${styles["products__types-btn"]} ${activeBtn === "furniture" ? styles.active : ""}`}
					>
						Цвета фурнитуры
					</button>
					<button
						onClick={() => handleButtonActive("typeOpening")}
						className={`${styles["products__types-btn"]} ${activeBtn === "typeOpening" ? styles.active : ""}`}
					>
						Типы открывания дверей
					</button>
				</div>
				<div className={styles.products__items}>
					<div className={styles.products__item}>
						<a href={curtain11} target="_blink">
							<img className={styles["products__item-img"]} src={curtain}></img>
						</a>

						<p className={styles["products__item-text"]}>Шторка в ванную</p>
					</div>
					<div className={styles.products__item}>
						<img className={styles["products__item-img"]} src={curtain1}></img>
						<p className={styles["products__item-text"]}>Душевая перегородка</p>
					</div>
					<div className={styles.products__item}>
						<img className={styles["products__item-img"]} src={curtain2}></img>
						<p className={styles["products__item-text"]}>Дверь в нишу</p>
					</div>
					<div className={styles.products__item}>
						<img className={styles["products__item-img"]} src={curtain3}></img>
						<p className={styles["products__item-text"]}>Дверь в нишу</p>
					</div>
					<div className={styles.products__item}>
						<img className={styles["products__item-img"]} src={curtain4}></img>
						<p className={styles["products__item-text"]}>Дверь в нишу</p>
					</div>
					<div className={styles.products__item}>
						<img className={styles["products__item-img"]} src={curtain5}></img>
						<p className={styles["products__item-text"]}>Дверь в нишу</p>
					</div>
					<div className={styles.products__item}>
						<img className={styles["products__item-img"]} src={curtain6}></img>
						<p className={styles["products__item-text"]}>Дверь в нишу</p>
					</div>
				</div>
			</div>
		</section>
	)
}
