import './App.scss'
import { useEffect, useState } from 'react'
import { Hero } from './components/Hero/Hero.jsx'
import { Loader } from './components/Loader/Loader.jsx'


export const App = () => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 5000)
	}, [])

	if (isLoading) {
		return <Loader />
	}

	return (
		<>
			<Hero />
		</>
	)
}
