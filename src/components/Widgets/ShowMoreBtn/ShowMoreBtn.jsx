import styles from "./ShowMoreBtn.module.scss"
import ShowMoreImgBtn from "../../../assets/MainPage/example-moreImg-btn.svg?react"

const ShowMoreBtn = ({ onClick, aria, text }) => {
	return (
		<button
			type="button"
			className={styles["more__btn"]}
			onClick={onClick}
			aria-label={aria}
		>
			{text}
			<ShowMoreImgBtn aria-hidden="true" width={18} height={18} />
		</button>
	)
}

export default ShowMoreBtn
