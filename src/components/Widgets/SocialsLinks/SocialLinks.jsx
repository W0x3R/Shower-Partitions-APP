import styles from "./SocialLinks.module.scss"
import Whatsapp from "../../../assets/header/whatsapp.svg?react"
import Viber from "../../../assets/header/viber.svg?react"
import Telegram from "../../../assets/header/telegram.svg?react"
import Instagram from "../../../assets/header/instagram.svg?react"

const SocialLinks = ({ gap, sizes }) => {
	const socialLinksData = [
		{ element: Whatsapp, href: "#", ariaLabel: "Связаться с нами в Whatsapp" },
		{ element: Viber, href: "#", ariaLabel: "Связаться с нами в Viber" },
		{ element: Telegram, href: "#", ariaLabel: "Связаться с нами в Telegram" },
		{
			element: Instagram,
			href: "#",
			ariaLabel: "Связаться с нами в Instagram",
		},
	]
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
