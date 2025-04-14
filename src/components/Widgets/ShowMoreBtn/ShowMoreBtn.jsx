import styles from "./ShowMoreBtn.module.scss"
import showMoreImgBtn from "../../../assets/MainPage/example-moreImg-btn.svg?url"

const ShowMoreBtn = ({ onClick, aria, text }) => {
	return (
		<button
			type="button"
			className={styles["more__btn"]}
			onClick={onClick}
			aria-label={aria}
		>
			{text}
			<img src={showMoreImgBtn} alt="" width="18" height="18" />
		</button>
	)
}

export default ShowMoreBtn
