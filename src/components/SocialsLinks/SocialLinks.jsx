import Whatsapp from "../../assets/header/whatsapp.svg?react"
import Viber from "../../assets/header/viber.svg?react"
import Telegram from "../../assets/header/telegram.svg?react"
import Instagram from "../../assets/header/instagram.svg?react"
import styles from "./SocialLinks.module.scss"

const SocialLinks = ({ gap, sizes }) => {
	console.log(sizes)
	return (
		<article className={`${styles.socials} ${styles[gap]}`}>
			<a
				className={`${styles.socials__link} ${styles[sizes]}`}
				href="#"
				target="_blank"
			>
				<Whatsapp />
			</a>
			<a
				className={`${styles.socials__link} ${styles[sizes]}`}
				href="#"
				target="_blank"
			>
				<Viber />
			</a>
			<a
				className={`${styles.socials__link} ${styles[sizes]}`}
				href="#"
				target="_blank"
			>
				<Telegram />
			</a>
			<a
				className={`${styles.socials__link} ${styles[sizes]}`}
				href="#"
				target="_blank"
			>
				<Instagram />
			</a>
		</article>
	)
}

export default SocialLinks
