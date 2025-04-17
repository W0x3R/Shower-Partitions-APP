import styles from "./Socials.module.scss"
import SocialLinks from "../../../Widgets/SocialsLinks/SocialLinks"

const Socials = () => {
	return (
		<div
			className={`socials__media ${styles.socials__media}`}
			aria-labelledby="online-question"
		>
			<p className={`header__animation header__texts`} id="online-question">
				<strong>Задайте вопрос, мы онлайн:</strong>
			</p>
			<SocialLinks gap="socials-header" sizes="socials__link-sizes" />
		</div>
	)
}

export default Socials
