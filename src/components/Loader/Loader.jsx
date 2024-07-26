import './Loader.scss'

export const Loader = () => {
	return (<div className="loader-item">
		<div className="loader-item__container">
			<img src="/loader_gif.gif" alt="Loader" className="loader-item__image" />

			<div className="loader-item__content">
				<p className="loader-item__text">Пачекай я перелажу</p>
				<span className="loader-item__dots"></span>
			</div>
		</div>
	</div>)
}