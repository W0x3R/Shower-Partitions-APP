import styles from "./ServicesCost.module.scss"
import priceDescriptionData from "../../data/priceDescriptionData"
import priceTableData from "../../data/priceTableData"

const Price = () => {
	return (
		<section className={styles.cost}>
			<div className="container">
				<h1 className={styles.cost__title}>
					<b>Стоимость</b>
				</h1>
				<table className={styles.cost__table}>
					<thead className={styles["cost__table-head"]}>
						<tr>
							<th>Наименование работ</th>
							<th>Стоимость</th>
							<th>Доп. информация</th>
						</tr>
					</thead>
					<tbody className={styles["cost__table-body"]}>
						{priceTableData.map(({ id, name, cost, extraInfo }) => {
							return (
								<tr key={id}>
									<td>{name}</td>
									<td>{cost}</td>
									<td>{extraInfo}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
				<p className={styles.cost__text}>
					*Стоимость может отличаться от указанной на сайте.{" "}
					<b>Точную стоимость уточняйте</b>
				</p>
				<h2 className={styles.cost__subtitle}>
					Стоимость услуг доставки и монтажа: все, что вам нужно знать о наших
					изделиях
				</h2>
				{priceDescriptionData.map(({ id, text }) => {
					return (
						<p key={id} className={styles.cost__description}>
							{text}
						</p>
					)
				})}
			</div>
		</section>
	)
}

export default Price
