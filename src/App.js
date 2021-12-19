import { Container, Stack } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import { loginError, loginSuccess } from './Redux/Auth/action';

import Home from './Routes/Home';

function App() {
	const dispatch = useDispatch();
	const handleLogin = (userData) => {
		axios
			.post('https://reqres.in/api/login', userData)
			.then(({ data }) => dispatch(loginSuccess(data.token)))
			.catch((err) => dispatch(loginError()));
	};

	return (
		<div className='App'>
			<Container>
				<Stack direction='column'>
					<Stack direction='row' spacing={1}>
						<Link to='/'>Home</Link>
						<Link to='/login'>Login</Link>
					</Stack>

					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/login'>
							<LoginPage handleLogin={handleLogin} />
						</Route>
					</Switch>
				</Stack>
			</Container>
		</div>
	);
}

export default App;
