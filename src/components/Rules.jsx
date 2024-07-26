import './Rules.scss'


export const Rules = () => {
	return (
		<div className="rules">
			<h1 className="title">Шановні друзі!</h1>
			<ul className="rules__list">
				<li className="rules__item">Попередній запис можливо здійснити лише <span>чотири рази на місяць</span>.</li>
				<li className="rules__item">Для регистрации надо внести Имя, Время и Сообщение (не обязательно)</li>
				<li className="rules__item">Запис є ІНДИВІДУАЛЬНИМ. Передавати талон стороннім особам заборонено.</li>
			</ul>
		</div>

	);
}

