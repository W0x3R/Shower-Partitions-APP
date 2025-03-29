import { memo } from "react"
import Carousel from "../FancyApp/Carousel"
import Fancybox from "../FancyApp/FancyBox"
import styles from "./Portfolio.module.scss"

const PortfolioItem = memo(({ data }) => {
	const { carouselId, descriptionId, title, images, descriptions } = data

	return (
		<div className={styles["portfolio__item-wrapper"]}>
			<Fancybox
				styles={styles["portfolio__item-inner"]}
				options={{
					Carousel: {
						infinite: true,
					},
					Toolbar: {
						display: {
							left: [],
							middle: ["infobar"],
							right: ["slideshow", "thumbs", "close"],
						},
					},
				}}
			>
				<h2 className={styles["portfolio__item-title"]}>{title}</h2>
				<Carousel options={{ Thumbs: { type: "classic", minCount: 1 } }}>
					{images.map((image, id) => {
						return (
							<div
								key={carouselId + `${id}`}
								className={`f-carousel__slide ${styles.portfolio__carousel}`}
								data-fancybox="gallery"
								data-src={image}
								data-thumb-src={image}
							>
								<img
									alt=""
									src={image}
									width="440"
									height="580"
									loading="lazy"
								/>
							</div>
						)
					})}
				</Carousel>
				<div className={styles["portfolio__description"]}>
					{descriptions.map((description, id) => {
						return (
							<p
								key={descriptionId + `${id}`}
								className={styles["portfolio__description-header"]}
							>
								{description}
							</p>
						)
					})}
				</div>
			</Fancybox>
			<div
				id="aria-portfolio-live-status"
				aria-live="polite"
				className="sr-only"
			></div>
		</div>
	)
})

PortfolioItem.displayName = "PortfolioItem"
export default PortfolioItem
