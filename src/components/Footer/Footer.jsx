import styles from "./Footer.module.scss"
import Contacts from "./Contacts/Contacts"
import Information from "./Information/Information"
import Benefits from "./Benefits/Benefits"

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.footer__wrapper}>
					<Contacts />
					<Benefits />
					<Information />
				</div>
			</div>
		</footer>
	)
}

export default Footer
