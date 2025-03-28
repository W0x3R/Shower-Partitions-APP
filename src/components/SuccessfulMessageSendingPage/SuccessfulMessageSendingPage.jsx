import { Helmet } from "react-helmet"
import successfulImg from "../../assets/successfulPage/successful-gif.gif"
import { SuccessfulMessageSending } from "./SuccessfulMessageSending"

const SuccessfulMessageSendingPage = () => {
	return (
		<>
			<Helmet>
				<title>Сообщение успешно отправлено</title>
				<meta name="robots" content="noindex, nofollow" />
				<link rel="preload" href={successfulImg} as="image" type="image/gif" />
			</Helmet>
			<SuccessfulMessageSending />
		</>
	)
}

export default SuccessfulMessageSendingPage
