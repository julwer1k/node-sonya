import './Form.scss'
import classNames from 'classnames'
import { useState } from 'react'


const initialTime = {
	timePart: '',
	timeNumber: '',
}

export const Form = ({ setTicket, setIsSubmit }) => {
	const [field, setField] = useState('')
	const [time, setTime] = useState(initialTime)
	const [message, setMessage] = useState('')
	const [isErrorTime, setIsErrorTime] = useState(false)

	const handleInputChange = (e) => {
		setIsErrorTime(false)
		setField(e.target.value)
	}

	const handleTimeChange = (e) => {
		setIsErrorTime(false)

		const value = e.target.value

		if (value.length !== 5) {
			setIsErrorTime(true)
		} else {
			setTime({...time, timeNumber: value})
		}
	}

	const submitForm = (e) => {
		e.preventDefault()

		if (field.length === 0) {
			return
		}

		if (isErrorTime || time.timeNumber.length === 0) {
			return;
		}

		const ticket = {
			name: field,
			time,
			message,
		}

		setTicket(ticket)
		setIsSubmit(true)
		resetForm();
	}

	const resetForm = () => {
		setField('')
		setTime(initialTime)
		setMessage('')
		setIsErrorTime(false)
	}

	return (<>
		<form className="form" onSubmit={submitForm} onReset={resetForm}>
			<div className="field">
				<label className="label">Имя</label>

				<div className="control has-icons-left has-icons-right">

					<input
						className="input is-success"
						type="text"
						placeholder="Дружище как тебя зовут?"
						value={field}
						onChange={handleInputChange}
					/>

					<span className="icon is-small is-left">
						<i className="fas fa-user"></i>
          </span>

					<span className="icon is-small is-right">
            <i className="fas fa-check"></i>
					</span>
				</div>

				<p className="help is-white">Друг найден</p>
			</div>

			<div className="field has-addons has-addons-centered">
				<p className="control">
        <span className="select">
        <select onChange={e => setTime({ ...time, timePart: e.target.value })}>
        <option>Выбери время суток</option>
        <option>Утра</option>
        <option>Вечера</option>
        <option>Ночи</option>
        </select>
        </span>
				</p>
				<p className="control">
					<input
						className={classNames('input', {
							'is-danger': isErrorTime,
						})} type="text" placeholder="Время" onChange={handleTimeChange}
					/>
				</p>

				<p className="control">
					<button className="button is-primary">
						Хочу
					</button>
				</p>
			</div>

			<div className="field">
				{isErrorTime && <p className="help is-danger">Неверное время. Пример: 14:00</p>}
			</div>


			<div className="field">
				<label className="label">Message</label>
				<div className="control">
					<textarea value={message} className="textarea" placeholder="Сообщение" onChange={e => setMessage(e.target.value)}></textarea>
				</div>
			</div>

			<div className="field is-grouped buttons">
				<div className="control">
					<button type="submit" className="button is-link">Отправить</button>
				</div>
				<div className="control">
					<button type="reset" className="button is-link is-light">Передумал</button>
				</div>
			</div>
		</form>
	</>)
}
