import styles from "./UnsuccessfulMessageSending.module.scss"
import clickHand from "../../assets/MainPage/click-hand.svg?url"
import unsuccessfulImg from "../../assets/unsuccessfulPage/unsuccessful-gif.gif"

const UnsuccessfulMessageSending = () => {
	return (
		<section className={styles.unsuccessful}>
			<div className="container">
				<div className={styles.unsuccessful__wrapper}>
					<div className={styles["unsuccessful__text-wrapper"]}>
						<h1 className={styles.unsuccessful__title}>
							<b>Упс! Кажется, что-то пошло не так</b>
						</h1>
						<img
							className={styles.unsuccessful__img}
							src={unsuccessfulImg}
							width={672}
							height={504}
						/>
						<h2 className={styles.unsuccessful__subtitle}>
							Вы можете связаться с нами по номеру телефона
						</h2>
						<a
							className={styles["unsuccessful__link"]}
							href="tel:+375447854381"
							aria-label="Связаться с нами по номеру телефона"
						>
							<span>Связаться с нами</span>
							<img src={clickHand} alt="" />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default UnsuccessfulMessageSending
