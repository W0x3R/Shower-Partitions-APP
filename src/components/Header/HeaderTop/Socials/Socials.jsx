import SocialLinks from "../../../SocialsLinks/SocialLinks"
import styles from "./Socials.module.scss"

export const Socials = () => {
	return (
		<div className={styles.socials} aria-labelledby="online-question">
			<p className={`header__animation header__texts`} id="online-question">
				<strong>Задайте вопрос, мы онлайн:</strong>
			</p>
			<SocialLinks gap="socials-header" sizes="socials__link-sizes" />
		</div>
	)
}
