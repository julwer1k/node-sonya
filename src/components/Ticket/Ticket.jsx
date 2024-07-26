import './Ticket.scss'

export const Ticket = ({ ticket }) => {


	if (ticket) {
		const {name, time, message} = ticket;
		const {timeNumber, timePart} = time;

		return (<>
				<h2 className="title ticket__title">{`Тикет Букинг #${1}`}</h2>

				<div className="ticket">
					<div className="ticket__content">
						<p className="ticket__field">Имя пасажира погулять</p>
						<p className="ticket__name">{name}</p>
					</div>
					<div className="ticket__content">
						<p className="ticket__field">Гуляем:</p>
						<p className="ticket__time">{`В ${timeNumber} гребанних ${timePart} `}</p>
					</div>

					<div className="ticket__content">
						<p className="ticket__field">Сообщение:</p>
						<p className="ticket__message">{message}</p>
					</div>
				</div>
			</>
		)
	}
}
