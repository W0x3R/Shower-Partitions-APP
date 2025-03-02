import InputMask from "@mona-health/react-input-mask"
import { useForm } from "react-hook-form"
import { useContext, useEffect, useRef } from "react"
import PopupFormContext from "../../../context/PopupFormContext"
import styles from "./CallBackForm.module.scss"
import clickHandImg from "../../../assets/main/click-hand.svg?url"

export const CallBackForm = () => {
	const { isFormPopupOpen } = useContext(PopupFormContext)
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

	const callBackBtnRef = useRef(null)

	useEffect(() => {
		if (isFormPopupOpen) {
			setTimeout(() => {
				callBackBtnRef.current?.focus()
			}, 50)
		}
	}, [isFormPopupOpen])

	return (
		<form
			onClick={(e) => e.stopPropagation()}
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
			aria-labelledby="contact-form-title"
		>
			<h2 className={styles.form__title} id="contact-form-title">
				Ответим в течение дня, заполните форму
			</h2>
			<input
				className={`${styles.form__input} ${errors.name?.message ? styles.resetIndent : ""}`}
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
				ref={callBackBtnRef}
			/>
			{errors.name && (
				<p role="alert" className={styles.form__error}>
					{errors.name?.message}
				</p>
			)}
			<InputMask
				className={`${styles.form__input} ${errors.phone?.message ? styles.resetIndent : ""}`}
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
				<p role="alert" className={styles.form__error}>
					{errors.phone?.message}
				</p>
			)}
			<input
				className={`${styles.form__input} ${errors.email?.message ? styles.resetIndent : ""}`}
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
				<p role="alert" className={styles.form__error}>
					{errors.email?.message}
				</p>
			)}
			<textarea
				className={`${styles.form__textarea} ${errors.text?.message ? styles.resetIndent : ""}`}
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
				<p role="alert" className={styles.form__error}>
					{errors.text?.message}
				</p>
			)}
			<button
				className={styles.form__btn}
				type="submit"
				disabled={Object.keys(errors).length > 0}
			>
				<span>Отправить</span>
				<img src={clickHandImg} alt="" />
			</button>
		</form>
	)
}
