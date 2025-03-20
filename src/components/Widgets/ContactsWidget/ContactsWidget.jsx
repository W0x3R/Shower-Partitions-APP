import styles from "./ContactsWidget.module.scss"
import TelegramIcon from "../../../assets/MainPage/telegram-contacts-widget.svg?react"
import CallIcon from "../../../assets/MainPage/call-contacts-widget.svg?react"

const ContactsWidget = () => {
	return (
		<div className={styles.contacts__widget}>
			<a
				className={styles["contacts__widget-telegram"]}
				href="#"
				aria-label="Открыть чат в Telegram"
				target="_blank"
				rel="noopener noreferrer"
			>
				<TelegramIcon aria-hidden="true" />
				<span className={styles["contacts__widget-text"]}>Написать</span>
			</a>
			<a
				className={styles["contacts__widget-phone"]}
				href="tel:+375447625856"
				aria-label="Связаться с нами по номеру телефона"
				rel="noopener noreferrer"
			>
				<CallIcon aria-hidden="true" />
				<span className={styles["contacts__widget-text"]}>Позвонить</span>
			</a>
		</div>
	)
}
export default ContactsWidget
