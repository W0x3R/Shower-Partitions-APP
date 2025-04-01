import styles from "./Delivery.module.scss"
import carImg from "../../assets/deliveryPage/car-gif.gif"

const Delivery = () => {
	return (
		<section className={styles.delivery}>
			<div className="container">
				<h1 className={styles.delivery__title}>
					<b>Оплата и доставка</b>
				</h1>
				<div className={styles.delivery__wrapper}>
					<div className={styles["delivery__content-wrapper"]}>
						<img
							className={styles.delivery__img}
							src={carImg}
							width="704"
							height="371"
							alt=""
							loading="lazy"
						/>
						<h2 className={styles.delivery__subtitle}>Этапы заказа</h2>
						<div className={styles["delivery__stages-wrapper"]}>
							<div className={styles["delivery__stages-item"]}>
								<div className={styles["delivery__stages-content"]}>
									<h3 className={styles["delivery__stage-title"]}>
										Предварительный просчёт
									</h3>
									<p className={styles["delivery__stage-text"]}>
										Менеджер вас консультирует, показывает фотографии
										выполненных работ необходимой вам конструкции. Делает
										предварительный просчёт, как правило, стоимость после замера
										не увеличивается если все предоставленные данные были верны
									</p>
								</div>
								<div className={styles["delivery__stage-line"]}></div>
								<div className={styles["delivery__stage-circle"]}></div>
							</div>
							<div className={styles["delivery__stages-item"]}>
								<div className={styles["delivery__stages-content"]}>
									<h3 className={styles["delivery__stage-title"]}>Замер</h3>
									<p className={styles["delivery__stage-text"]}>
										Замерщик приезжает на объект, с собой имеются образцы стекол
										и часто используемой фурнитуры. Во время замера мастер
										проконсультирует и оставит ТЗ (техническое задание)
										строителям если оно необходимо
									</p>
								</div>
								<div className={styles["delivery__stage-line"]}></div>
								<div className={styles["delivery__stage-circle"]}></div>
							</div>
							<div className={styles["delivery__stages-item"]}>
								<div className={styles["delivery__stages-content"]}>
									<h3 className={styles["delivery__stage-title"]}>
										Согласование после замера
									</h3>
									<p className={styles["delivery__stage-text"]}>
										Если при замере выявились особенности в конструкции,
										менеджер вносит изменения и согласовывает с вами.
									</p>
								</div>
								<div className={styles["delivery__stage-line"]}></div>
								<div className={styles["delivery__stage-circle"]}></div>
							</div>
							<div className={styles["delivery__stages-item"]}>
								<div className={styles["delivery__stages-content"]}>
									<h3 className={styles["delivery__stage-title"]}>
										Разработка чертежей/оплата
									</h3>
									<p className={styles["delivery__stage-text"]}>
										Наши конструктора подготавливают чертежную документацию для
										запуска стекла в производство, после готовности чертежей,
										они направляются заказчику для проверки. За размеры мы несем
										ответственность, вам достаточно проверить общий вид. Вносите
										предоплату 50% от стоимости душевой перегородки.
									</p>
								</div>
								<div className={styles["delivery__stage-line"]}></div>
								<div className={styles["delivery__stage-circle"]}></div>
							</div>
							<div className={styles["delivery__stages-item"]}>
								<div className={styles["delivery__stages-content"]}>
									<h3 className={styles["delivery__stage-title"]}>
										Производство
									</h3>
									<p className={styles["delivery__stage-text"]}>
										Стекло запускается в производство, а отдел снабжения
										резервирует за вами выбранную фурнитуру.
									</p>
								</div>
								<div className={styles["delivery__stage-line"]}></div>
								<div className={styles["delivery__stage-circle"]}></div>
							</div>
							<div className={styles["delivery__stages-item"]}>
								<div className={styles["delivery__stages-content"]}>
									<h3 className={styles["delivery__stage-title"]}>
										Доставка/доплата
									</h3>
									<p className={styles["delivery__stage-text"]}>
										После изготовления и проверки заказа, вам придет
										автоматическое сообщение для подтверждения готовности
										принять продукцию. Если нет необходимости хранения на нашем
										складе, информация передаётся в службу доставки. Дату и
										время доставки согласовываете непосредственно с
										экспедитором. При доставке доплачиваете оставшиеся 50% за
										продукцию и услуги доставки.
									</p>
								</div>
								<div className={styles["delivery__stage-line"]}></div>
								<div className={styles["delivery__stage-circle"]}></div>
							</div>
							<div className={styles["delivery__stages-item"]}>
								<div className={styles["delivery__stages-content"]}>
									<h3 className={styles["delivery__stage-title"]}>Монтаж</h3>
									<p className={styles["delivery__stage-text"]}>
										После согласования даты доставки с экспедитором, данная
										информация сразу попадает к нам и автоматически создается
										заявку на монтаж, с вами свяжется руководитель сервисной
										службы для выбора удобной даты и времени монтажа. Монтаж
										оплачивается после монтажа.
									</p>
								</div>
								<div className={styles["delivery__stage-line"]}></div>
								<div className={styles["delivery__stage-circle"]}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Delivery
