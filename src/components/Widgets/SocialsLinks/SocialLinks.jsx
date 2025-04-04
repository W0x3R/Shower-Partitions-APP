import socialLinksData from "../../../data/socialLinksData"
import styles from "./SocialLinks.module.scss"

const SocialLinks = ({ gap, sizes }) => {
	return (
		<section
			className={`${styles.socials} ${styles[gap]}`}
			aria-label="Наши социальные сети"
		>
			{socialLinksData.map((link) => {
				return (
					<a
						key={link.ariaLabel}
						className={`${styles.socials__link} ${styles[sizes]}`}
						href={link.href}
						target="_blank"
						aria-label={link.ariaLabel}
						rel="noopener noreferrer"
					>
						<link.element aria-hidden="true" />
					</a>
				)
			})}
		</section>
	)
}

export default SocialLinks
