import styles from "./SocialLinks.module.scss"
import socialLinksData from "../../../data/socialLinksData"

const SocialLinks = ({ gap, sizes }) => {
	return (
		<div
			className={`socials ${styles[gap] || ["socials-header"]}`}
			aria-label="Наши социальные сети"
		>
			{socialLinksData.map((link) => {
				return (
					<a
						key={link.ariaLabel}
						className={`socials__link ${styles.socials__link} ${styles[sizes] || ["socials__link-sizes"]}`}
						href={link.href}
						target="_blank"
						aria-label={link.ariaLabel}
						rel="noopener noreferrer"
					>
						<link.element aria-hidden={true} width={45} height={45} />
					</a>
				)
			})}
		</div>
	)
}

export default SocialLinks
