import SocialLinks from "../../../SocialsLinks/SocialLinks"
import styles from "./Socials.module.scss"

export const Socials = () => {
	return (
		<div className={styles.socials}>
			<p className={`header__animation header__texts`}>
				<b>Задайте вопрос, мы онлайн:</b>
			</p>
			<SocialLinks gap="socials-header" sizes="socials__link-sizes" />
		</div>
	)
}
