import { Outlet } from 'react-router-dom'
import { Navbar } from '../../layouts/Navbar.jsx'


export const Hero = () => {
	return (<section className="hero is-dark is-fullheight">
		<div className="hero-head">
			<Navbar />
		</div>

		<div className="hero-body">
			<div className="container has-text-centered">
				<Outlet />
			</div>
		</div>

		<footer className="footer">
			<div className="content has-text-centered">
				<p>
					© 2016 - 2024. Головний сервісний центр <a href="https://www.instagram.com/sshapoval_/">СОНИ</a>.
				</p>
				<p>Правила та умови використання сайту</p>
				<p>04085, м. Київ-52, вул. Лук'янiвська, 62 <strong>КИЕВ РУЛИТ!</strong></p>
			</div>
		</footer>
	</section>)
}

