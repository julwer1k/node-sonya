import {
	HashRouter as Router,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SecretPage } from './pages/SecretPage.jsx'

export const Root = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<HomePage />} />
					<Route path="home" element={<Navigate to=".." replace />} />
					<Route path="/secret">
						<Route index element={<SecretPage />} />
					</Route>
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Router>
	);
};
