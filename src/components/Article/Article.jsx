import articleBgImg from "../../assets/article/bg.webp"
import styles from "./Article.module.scss"
import constructionsData from "../../data/article/constructionsData"
import typesData from "../../data/article/typesData"
import openingTypes from "../../data/article/openingTypes"
import glassesTypes from "../../data/article/glassesTypes"
import usefulTipsData from "../../data/article/usefulTipsData"
import reasonsToContactData from "../../data/article/reasonsToContactData"

export const Article = (children) => {
	return (
		<section className={styles.article}>
			<div className="container">
				<div className={styles["article__title-wrapper"]}>
					<h1 className={styles.article__title}>
						<b>Душевая перегородка из стекла — советы по выбору</b>
					</h1>
					<img
						className={styles.article__img}
						width="100%"
						height="430px"
						src={articleBgImg}
						alt=""
					/>
				</div>
				<div className={styles["article__wrapper"]}>
					<div className={styles["article__block"]}>
						<h2 className={styles["article__block-title"]}>
							Перегородки из стекла для душа — как выбрать
						</h2>
						<p className={styles["article__block-text"]}>
							Все чаще вместо душевой кабины устанавливается трап — сливная
							система в полу — и защитная перегородка, которую обычно
							изготавливают из стекла. В этой статье поговорим о плюсах такого
							решения для ванной комнаты и поможем выбрать идеальную стеклянную
							перегородку для вашего душа. Для этого расскажем об основных видах
							душевых перегородок и их особенностях.
						</p>
						<h2 className={styles["article__block-title"]}>
							Стеклянные перегородки в душ — функции и преимущества
						</h2>
						<p className={styles["article__block-text"]}>
							Стеклянная перегородка предназначена для защиты ванной комнаты от
							брызг во время принятия душа — она должна защищать другие стены,
							пол, системы хранения вещей от воды. Она также служит декоративным
							элементом ванной комнаты, который можно вписать в любой стиль
							дизайна. Перечислим главные преимущества данной конструкции:
						</p>
						<ul className={styles.article__list}>
							{constructionsData.map(({ id, text }) => {
								return (
									<li key={id} className={styles.article__item}>
										{text}
									</li>
								)
							})}
						</ul>
						<p className={styles["article__block-text"]}>
							От душевой кабины ограждение отличается тем, что приобретается и
							устанавливается отдельно от слива и самого душа, смесителя.
							Подобрать перегородку, хорошо вписывающуюся в уже существующий
							интерьер ванной комнаты проще, так как она визуально сохраняет
							единство пространства и стиля. Однако в отличие от полноценного
							душевого уголка или кабины стеклянное ограждение менее
							функционально, но при этом оно не загромождает помещение,
							сохраняет ощущение легкости и позволяет организовать душевую зону
							со стандартным набором функций.
						</p>
						<h2 className={styles["article__block-title"]}>
							Какими бывают перегородки
						</h2>
						<p className={styles["article__block-text"]}>
							Стеклянная душевая перегородка может отличаться по конструкции,
							форме, типу открывания двери и виду остекления. Рассказываем о
							возможных вариантах душевого ограждения.
						</p>
						<h3 className={styles["article__block-subtitle"]}>
							По конструкции
						</h3>
						<p className={styles["article__block-text"]}>
							По типу конструкции выделяют перегородки:
						</p>
						<ul className={styles.article__list}>
							{typesData.map(({ id, text }) => {
								return (
									<li key={id} className={styles.article__item}>
										{text}
									</li>
								)
							})}
						</ul>
						<p className={styles["article__block-text"]}>
							В последнем случае душевая перегородка может быть квадратной,
							прямоугольной и даже трапециевидной.
						</p>
						<h3 className={styles["article__block-subtitle"]}>
							По типу открывания двери
						</h3>
						<p className={styles["article__block-text"]}>
							Душевые ограждения могут быть с дверями и без них (статичные
							перегородки). У статичных моделей одна сторона остается свободной
							для входа. В остальных случаях предусматривают двери, которые
							могут быть:
						</p>
						<ul className={styles.article__list}>
							{openingTypes.map(({ id, text }) => {
								return (
									<li key={id} className={styles.article__item}>
										{text}
									</li>
								)
							})}
						</ul>
						<h3 className={styles["article__block-subtitle"]}>
							По типу остекления
						</h3>
						<p className={styles["article__block-text"]}>
							Перегородка для ванной может быть исполнена из следующих видов
							стекла:
						</p>
						<ul className={styles.article__list}>
							{glassesTypes.map(({ id, text }) => {
								return (
									<li key={id} className={styles.article__item}>
										{text}
									</li>
								)
							})}
						</ul>
						<p className={styles["article__block-text"]}>
							Тип остекления подбирается с учетом стиля дизайна ванной комнаты,
							личных пожеланий клиента. Часто используют стеклянные блоки,
							панели для реализации самых сложных дизайнерских идей.
						</p>
						<h3 className={styles["article__block-subtitle"]}>
							На что обращать внимание при выборе перегородки в ванную
						</h3>
						<p className={styles["article__block-text"]}>
							При выборе перегородки из стекла для душевой обращайте внимание на
							следующие параметры:
						</p>
						<ul className={styles.article__list}>
							{usefulTipsData.map(({ id, text }) => {
								return (
									<li key={id} className={styles.article__item}>
										{text}
									</li>
								)
							})}
						</ul>
						<p className={styles["article__block-text"]}>
							Также берите в учет, какое количество людей может одновременно
							находиться в душе. Если только один человек, возможен монтаж любой
							перегородки, в том числе линейной статичной из прозрачного стекла
							с открытым входом. В других случаях лучше отдать предпочтение
							угловым или П-образным конструкциям из непрозрачных материалов —
							матового или тонированного стекла, с распечатанным фото, узорами и
							другими способами обработки, позволяющими сделать полотно
							непрозрачным.
						</p>
						<h3 className={styles["article__block-title"]}>
							Изготовление перегородок из стекла под заказ в Гомеле
						</h3>
						<p className={styles["article__block-text"]}>
							В Гомеле заказать изготовление душевых перегородок по
							индивидуальным размерам можно в нашей компании DZ System. Вот
							почему стоит обратиться к нам:
						</p>
						<ul className={styles.article__list}>
							{reasonsToContactData.map(({ id, text }) => {
								return (
									<li key={id} className={styles.article__item}>
										{text}
									</li>
								)
							})}
						</ul>
						<p className={styles["article__block-text"]}>
							Чтобы оформить заказ на изготовление стеклянной перегородки в
							ванную, позвоните нам или оставьте заявку на сайте компании на
							обратный звонок. Тогда мы скоро перезвоним и выберем день для
							выезда замерщика на дом.
						</p>
					</div>
					{children.aside}
				</div>
			</div>
		</section>
	)
}
