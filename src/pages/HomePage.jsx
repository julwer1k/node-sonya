import { useState } from 'react'
import { Form } from '../components/Form/Form.jsx'
import { Rules } from '../components/Rules.jsx'
import { Ticket } from '../components/Ticket/Ticket.jsx'

export const HomePage = () => {
	const [ticket, setTicket] = useState(null)
	const [isSubmit, setIsSubmit] = useState(false)

	return (
		<>


			{!isSubmit &&
			<>
				<Rules/>
				<Form setTicket={data => setTicket(data)} setIsSubmit={setIsSubmit} />
			</>}

			{ticket && <Ticket ticket={ticket}/>}
		</>
	);
}

