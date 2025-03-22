import styles from "./Contacts.module.scss"
import callUsImg from "../../assets/ContactsPage/callUs.png"
import LocationIcon from "../../assets/ContactsPage/location.svg?react"
import QuestionIcon from "../../assets/ContactsPage/question.svg?react"
import TimeIcon from "../../assets/ContactsPage/time.svg?react"
import CallIcon from "../../assets/ContactsPage/call.svg?react"
import MailIcon from "../../assets/ContactsPage/mail.svg?react"
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
						<address className={styles.contacts__adress}>
							<LocationIcon
								className={styles.contacts__icon}
								aria-hidden="true"
							/>
							Наш адрес: Беларусь,
							<br /> г.Гомель, ул. Гомельская 25
						</address>
						<div className={styles.contacts__time}>
							<TimeIcon className={styles.contacts__icon} aria-hidden="true" />
							<p aria-labelledby="working-time-description-footer">
								Пн-Пт: 9:00 - 18:00 <br />
								Сб-Вс - выходные
							</p>
							<span id="working-time-description-footer" className="sr-only">
								Мы работаем с понедельника по пятницу с 9 утра до 6 часов вечера
							</span>
						</div>
						<div className={styles.contacts__call}>
							<CallIcon className={styles.contacts__icon} aria-hidden="true" />
							<a
								className={styles["contacts__number-link"]}
								href="tel:+375447625856"
								aria-label="Связаться с нами по номеру телефона"
								title="Позвонить по номеру +375 44 762 58 56"
								tabIndex={0}
								rel="noopener noreferrer"
							>
								+375 (44) 762-58-56
							</a>
						</div>
						<div className={styles.contacts__mail}>
							<MailIcon className={styles.contacts__icon} aria-hidden="true" />
							<a
								className={styles["contacts__mail-link"]}
								href="mailto:vyr4376@yandex.ru"
								aria-label="Связаться с нами по email"
								tabIndex={0}
								rel="noopener noreferrer"
							>
								mail@garderobsystem.ru
							</a>
						</div>
						<div
							className={styles.contacts__social}
							aria-labelledby="online-question-contacts"
						>
							<img
								className={styles["contacts__info-img"]}
								src={callUsImg}
								width="256"
								height="256"
								alt=""
							/>
							<div className={styles["contacts__socials-inner"]}>
								<QuestionIcon
									className={styles.contacts__icon}
									aria-hidden="true"
								/>
								<p
									className={styles["contacts__socials-text"]}
									id="online-question-contacts"
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
