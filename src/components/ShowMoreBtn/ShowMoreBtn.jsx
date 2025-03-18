import styles from "./ShowMoreBtn.module.scss"
import ShowMoreImgBtn from "../../assets/main/example-moreImg-btn.svg?react"

const ShowMoreBtn = ({ onClick, aria, text }) => {
	return (
		<button
			type="button"
			className={styles["more__btn"]}
			onClick={onClick}
			aria-label={aria}
		>
			{text}
			<ShowMoreImgBtn aria-hidden="true" />
		</button>
	)
}

export default ShowMoreBtn
