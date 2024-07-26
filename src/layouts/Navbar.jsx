import './Navbar.scss'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
	return (<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a className="navbar-item">
						SONYA
					</a>
					<span className="navbar-burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
				</div>


				<div id="navbarMenuHeroB" className="navbar-menu">
					<div className="navbar-end">
						<NavLink to={'./home'} className={isActive =>
							"navbar-item" + (!isActive ? " is-active" : "")
						}> ДАМОЙ </NavLink>
						<NavLink to={'./secret'} className="navbar-item"> Правила </NavLink>
						<NavLink to={'./secret'} className="navbar-item"> Контакты </NavLink>
						<span className="navbar-item">
              <a href="https://www.instagram.com/sshapoval_/" target="_blank" className="button is-info is-inverted">
                <span className="icon">
                  <i className="fab fa-instagram"></i>
                </span>
                <span>Падписаться</span>
              </a>
            </span>
					</div>
				</div>
			</div>
		</nav>
	);
}

