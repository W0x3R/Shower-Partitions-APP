import { useEffect, useState } from "react"
import Cross from "../../../assets/main/cross.svg?react"
import QuestionsShowMoreImgBtn from "../../../assets/main/example-moreImg-btn.svg?react"
import questionImg from "../../../assets/main/questions-img.png"
import styles from "./Questions.module.scss"
import { accordionData } from "../../data/accordionData"

export const Questions = () => {
	const [expandedIndex, setExpandedIndex] = useState([])
	const [visibleCount, setVisibleCount] = useState(2)

	const handleShowMoreQuestions = () => {
		setVisibleCount((prev) => Math.min(prev + 2, accordionData.length))
		const liveRegion = document.getElementById("aria-accordion-live-status")
		if (liveRegion) {
			liveRegion.textContent = "Добавлены два новых вопроса"
			setTimeout(() => (liveRegion.textContent = ""), 100)
		}
	}

	const renderQuestions = () =>
		accordionData.slice(0, visibleCount).map(({ id, title, answer }) => {
			return (
				<div key={id} className={styles["questions__accordion-section"]}>
					<button
						type="button"
						id={`accordion-btn-${id}`}
						className={styles["questions__accordion-btn"]}
						onClick={() => handleToggleAccordion(id)}
						aria-expanded={expandedIndex.includes(id)}
						aria-controls={`subtitle-${id}`}
					>
						<span className={styles["questions__accordion-text"]}>{title}</span>
						<Cross
							className={`${styles["questions__accordion-icon"]} ${expandedIndex.includes(id) ? styles.open : ""}`}
							aria-hidden="true"
						/>
					</button>
					<div
						id={`subtitle-${id}`}
						className={`${styles["questions__accordion-content"]} ${expandedIndex.includes(id) ? styles.open : ""}`}
						role="region"
						aria-labelledby={`accordion-btn-${id}`}
					>
						<p className={styles["questions__accordion-subtext"]}>{answer}</p>
					</div>
					<div
						id="aria-accordion-live-status"
						aria-live="polite"
						className="sr-only"
					></div>
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
			const timer = setTimeout(() => {
				section.classList.add(styles.visible)
			}, i * 40)

			return () => clearTimeout(timer)
		})
	}, [visibleCount])

	return (
		<section className={styles.questions}>
			<div className="container">
				<div className={styles.questions__inner}>
					<h3 className={styles.questions__title}>Часто задаваемые вопросы</h3>
					<img className={styles.questions__img} src={questionImg} alt="" />
					<div className={styles["questions__accordion-wrapper"]}>
						<div className={styles["questions__accordion"]}>
							{renderQuestions()}
							{visibleCount < accordionData.length && (
								<button
									className={styles["questions__more-btn"]}
									onClick={handleShowMoreQuestions}
									aria-label="Показать еще 2 вопроса"
								>
									Показать еще вопросы
									<QuestionsShowMoreImgBtn aria-hidden="true" />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
