import { useEffect, useState } from "react"
import Cross from "../../../assets/main/cross.svg?react"
import questionImg from "../../../assets/main/questions-img.png"
import styles from "./Questions.module.scss"
import { accordionData } from "../../data/accordionData"

export const Questions = () => {
	const [expandedIndex, setExpandedIndex] = useState([])
	const [visibleCount, setVisibleCount] = useState(2)

	const handleShowMoreQuestions = () => {
		setVisibleCount((prev) => Math.min(prev + 2, accordionData.length))
	}

	const renderQuestions = () =>
		accordionData.slice(0, visibleCount).map(({ id, title, answer }) => {
			return (
				<div key={id} className={styles["questions__accordion-section"]}>
					<button
						className={styles["questions__accordion-btn"]}
						onClick={() => handleToggleAccordion(id)}
					>
						<span>{title}</span>
						<Cross
							className={`${styles["questions__accordion-icon"]} ${expandedIndex.includes(id) ? styles.open : ""}`}
							aria-hidden="hidden"
						/>
					</button>
					<div
						className={`${styles["questions__accordion-content"]} ${expandedIndex.includes(id) ? styles.open : ""}`}
					>
						<p>{answer}</p>
					</div>
				</div>
			)
		})

	const handleToggleAccordion = (id) => {
		setExpandedIndex((prev) =>
			prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
		)
	}

	useEffect(() => {
		const accordionSections = document.querySelectorAll(
			`.${styles["questions__accordion-section"]}`
		)
		accordionSections.forEach((section, i) => {
			setTimeout(() => {
				section.classList.add(styles.visible)
			}, i * 40)
		})
	})

	return (
		<section className={styles.questions}>
			<div className="container">
				<div className={styles.questions__inner}>
					<h3 className={styles.questions__title}>Часто задаваемые вопросы</h3>
					<img src={questionImg} />
					<div className={styles["questions__accordion-wrapper"]}>
						<div className={styles["questions__accordion"]}>
							{renderQuestions()}
							{visibleCount < accordionData.length && (
								<button
									className={styles["questions__items-btn"]}
									onClick={handleShowMoreQuestions}
								>
									Показать еще вопросы
									<span>&#10549;</span>
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
