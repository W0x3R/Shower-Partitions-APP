import { Helmet } from "react-helmet"
import notFoundGif from "../../assets/notFoundPage/not-found-gif.gif"
import NotFound from "./NotFound"

const NotFoundPage = () => {
	return (
		<>
			<Helmet>
				<title>404 - Страница не найдена</title>
				<meta name="robots" content="noindex, nofollow" />
				<link rel="preload" href={notFoundGif} as="image" type="image/gif" />
			</Helmet>
			<NotFound />
		</>
	)
}

export default NotFoundPage
