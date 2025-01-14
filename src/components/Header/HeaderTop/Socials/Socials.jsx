import SocialLinks from "../../../SocialsLinks/SocialLinks"
import styles from "./Socials.module.scss"

export const Socials = () => {
	return (
		<div className={styles.socials}>
			<p className={`header__animation header__texts`}>
				<strong>Задайте вопрос, мы онлайн:</strong>
			</p>
			<SocialLinks gap="socials-header" sizes="socials__link-sizes" />
		</div>
	)
}
