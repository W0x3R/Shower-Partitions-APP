import { useForm } from "react-hook-form"
import InputMask from "@mona-health/react-input-mask"
import styles from "./Contacts.module.scss"
import callUsImg from "../../assets/contacts/callUs.png"
import clickHandImg from "../../assets/main/click-hand.svg?url"
import SocialLinks from "../Widgets/SocialsLinks/SocialLinks"
import LocationIcon from "../../assets/contacts/location.svg?react"
import TimeIcon from "../../assets/contacts/time.svg?react"
import CallIcon from "../../assets/contacts/call.svg?react"
import MailIcon from "../../assets/contacts/mail.svg?react"
import QuestionIcon from "../../assets/contacts/question.svg?react"

export const Contacts = () => {
	const {
		register,
		handleSubmit,
		setValue,
		trigger,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: { name: "", phone: "", email: "", text: "" },
	})

	const onSubmit = async (data) => {
		console.log("Отправка данных:", data)
		reset()
	}

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
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={styles.contacts__form}
					>
						<h2 className={styles["contacts__form-title"]}>
							Ответим в течение дня, заполните форму
						</h2>
						<input
							className={`${styles["contacts__form-input"]} ${errors.name?.message ? styles.resetIndent : ""}`}
							{...register("name", {
								required: "Имя обязательно",
								validate: (value) => {
									if (value.length < 2)
										return "Имя должно содержать хотя бы 2 символа"
									const namePattern = /^[A-Za-zА-Яа-яЁё\s-]+$/
									if (!namePattern.test(value))
										return "Имя должно содержать только буквы и пробелы"
									return true
								},
							})}
							placeholder="Ваше имя"
							onChange={(e) => {
								setValue("name", e.target.value)
								trigger("name")
							}}
							aria-invalid={errors.name ? "true" : "false"}
						/>
						{errors.name && (
							<p role="alert" className={styles["contacts__form-error"]}>
								{errors.name?.message}
							</p>
						)}
						<InputMask
							className={`${styles["contacts__form-input"]} ${errors.phone?.message ? styles.resetIndent : ""}`}
							mask="+375 (99) 999-99-99"
							{...register("phone", {
								required: "Телефон обязателен",
								validate: (value) => {
									const digits = value.replace(/\D/g, "")
									const operatorCode = value.match(/\+375 \((\d{2})\)/)?.[1]
									if (!operatorCode) return "Введите код оператора"
									if (!["44", "25", "29"].includes(operatorCode))
										return "Неверный код оператора"
									if (digits.length < 12) return "Введите номер полностью"
									return true
								},
							})}
							placeholder="Ваш номер телефона"
							alwaysShowMask
							onChange={(e) => {
								setValue("phone", e.target.value)
								trigger("phone")
							}}
							aria-invalid={errors.phone ? "true" : "false"}
						/>
						{errors.phone && (
							<p role="alert" className={styles["contacts__form-error"]}>
								{errors.phone?.message}
							</p>
						)}
						<input
							className={`${styles["contacts__form-input"]} ${errors.email?.message ? styles.resetIndent : ""}`}
							{...register("email", {
								required: "Email обязателен",
								pattern: {
									value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
									message: "Неверный формат email",
								},
							})}
							placeholder="Ваш email"
							onChange={(e) => {
								setValue("email", e.target.value)
								trigger("email")
							}}
							aria-invalid={errors.email ? "true" : "false"}
						/>
						{errors.email && (
							<p role="alert" className={styles["contacts__form-error"]}>
								{errors.email?.message}
							</p>
						)}
						<textarea
							className={`${styles["contacts__form-textarea"]} ${errors.text?.message ? styles.resetIndent : ""}`}
							{...register("text", {
								required: "Сообщение обязателено",
								minLength: {
									value: 5,
									message: "Сообщение должно содержать минимум 5 символов",
								},
								maxLength: {
									value: 500,
									message: "Сообщение не может превышать 500 символов",
								},
								validate: (value) => {
									const forbiddenChars = /[^A-Za-zА-Яа-яЁё\w\s.,!?-]/
									if (forbiddenChars.test(value))
										return "Сообщение содержит недопустимые символы"
									return true
								},
							})}
							placeholder="Текст сообщения"
							onChange={(e) => {
								setValue("text", e.target.value)
								trigger("text")
							}}
							aria-invalid={errors.text ? "true" : "false"}
						></textarea>
						{errors.text && (
							<p role="alert" className={styles["contacts__form-error"]}>
								{errors.text?.message}
							</p>
						)}
						<button
							className={styles["contacts__form-btn"]}
							type="submit"
							disabled={Object.keys(errors).length > 0}
						>
							<span>Отправить</span>
							<img src={clickHandImg} alt="" />
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
