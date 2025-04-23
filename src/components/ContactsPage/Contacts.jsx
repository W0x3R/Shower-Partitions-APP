import styles from "./Contacts.module.scss"
import callUsImg from "../../assets/ContactsPage/callUs.png"
import questionIcon from "../../assets/ContactsPage/question.svg?url"
import timeIcon from "../../assets/ContactsPage/time.svg?url"
import callIcon from "../../assets/ContactsPage/call.svg?url"
import mailIcon from "../../assets/ContactsPage/mail.svg?url"
import SocialLinks from "../Widgets/SocialsLinks/SocialLinks"
import CallBackForm from "../Widgets/CallBackForm/CallBackForm"

const Contacts = () => {
	return (
		<section className={styles.contacts}>
			<div className="container">
				<h1 className={styles.contacts__title}>
					<b>Наши контакты</b>
				</h1>
				<div className={styles["contacts__wrapper"]}>
					<div className={styles["contacts__info-wrapper"]}>
						<h2 className={styles["contacts__info-title"]}>
							Наши <b>контакты</b>
						</h2>
						<div className={styles.contacts__time}>
							<img
								className={styles.contacts__icon}
								src={timeIcon}
								width="23"
								height="23"
								alt=""
							/>
							<p aria-labelledby="working-time-description-footer">
								Пн-Пт: 9:00 - 18:00 <br />
								Сб-Вс - выходные
							</p>
							<span id="working-time-description-footer" className="sr-only">
								Мы работаем с понедельника по пятницу с 9 утра до 6 часов вечера
							</span>
						</div>
						<div className={styles.contacts__call}>
							<img
								className={styles.contacts__icon}
								src={callIcon}
								width="23"
								height="23"
								alt=""
							/>
							<a
								className={styles["contacts__number-link"]}
								href="tel:+375447854381"
								aria-label="Связаться с нами по номеру телефона"
								title="Позвонить по номеру +375 44 785 43 81"
								tabIndex={0}
								rel="noopener noreferrer"
							>
								+375 (44) 785-43-81
							</a>
						</div>
						<div className={styles.contacts__mail}>
							<img
								className={styles.contacts__icon}
								src={mailIcon}
								width="23"
								height="23"
								alt=""
							/>
							<a
								className={styles["contacts__mail-link"]}
								href="mailto:showers.gomel@mail.ru"
								aria-label="Связаться с нами по email"
								tabIndex={0}
								rel="noopener noreferrer"
							>
								showers.gomel@mail.ru
							</a>
						</div>
						<div
							className={styles.contacts__social}
							aria-labelledby="online-question-contacts-footer"
						>
							<img
								className={styles["contacts__info-img"]}
								src={callUsImg}
								width="256"
								height="256"
								alt=""
								loading="lazy"
							/>
							<div className={styles["contacts__socials-inner"]}>
								<img
									className={styles.contacts__icon}
									src={questionIcon}
									width="23"
									height="23"
									alt=""
								/>
								<p
									className={styles["contacts__socials-text"]}
									id="online-question-contacts-footer"
								>
									<strong>Задайте вопрос, мы онлайн:</strong>
								</p>
							</div>
							<SocialLinks
								gap="socials-contacts"
								sizes="socials__link-contacts-sizes"
							/>
						</div>
					</div>
					<CallBackForm
						title="Ответим в течение дня, заполните форму"
						isEmailShow={true}
					/>
				</div>
			</div>
		</section>
	)
}

export default Contacts
