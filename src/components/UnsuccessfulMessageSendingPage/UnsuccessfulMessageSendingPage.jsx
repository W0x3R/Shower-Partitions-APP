import { Helmet } from "react-helmet"
import unsuccessfulImg from "../../assets/unsuccessfulPage/unsuccessful-gif.gif"
import UnsuccessfulMessageSending from "./UnsuccessfulMessageSending"

const UnsuccessfulMessageSendingPage = () => {
	return (
		<>
			<Helmet>
				<title>Сообщение не отправлено</title>
				<meta name="robots" content="noindex, nofollow" />
				<link
					rel="preload"
					href={unsuccessfulImg}
					as="image"
					type="image/gif"
				/>
			</Helmet>
			<UnsuccessfulMessageSending />
		</>
	)
}

export default UnsuccessfulMessageSendingPage
