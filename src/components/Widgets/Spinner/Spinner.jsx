import styles from "./Spinner.module.scss"
import SpinnerImg from "../../../assets/spinner/spinner.svg?react"
import { useEffect } from "react"
import {
	disableBodyScrollIncludeScrollbar,
	enableBodyScrollIncludeScrollbar,
} from "../../../utils/setBodyScroll"

export const Spinner = () => {
	useEffect(() => {
		disableBodyScrollIncludeScrollbar()

		return () => enableBodyScrollIncludeScrollbar()
	}, [])

	return (
		<div className={styles.spinner}>
			<SpinnerImg
				className={styles.spinner__img}
				width={120}
				height={120}
				aria-hidden={true}
			/>
			<br />
			<h1 className={styles.spinner__text}>Загрузка...</h1>
		</div>
	)
}
