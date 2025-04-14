import { Helmet } from "react-helmet"
import notFoundImg from "../../assets/notFoundPage/not-found-img.webp"
import NotFound from "./NotFound"

const NotFoundPage = () => {
	return (
		<>
			<Helmet>
				<title>404 - Страница не найдена</title>
				<meta name="robots" content="noindex, nofollow" />
				<link rel="preload" href={notFoundImg} as="image" type="image/webp" />
			</Helmet>
			<NotFound />
		</>
	)
}

export default NotFoundPage
