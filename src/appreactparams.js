import React from 'react';
import { BrowserRouter as Router, Route, Link,Redirect,withRouter } from "react-router-dom";
{/*
const App = () => (
	<Router>
		<div>
			<h2>Accounts</h2>
			<ul>
				<li>
					<Link to="/netflix">Netflix</Link>
				</li>
				<li>
					<Link to="/amazon-prime">Amazon Prime</Link>
				</li>
				<li>
					<Link to="/dishwale">Dish tv</Link>
				</li>
				<li>
					<Link to="/cablewale">Cable tv</Link>
				</li>
			</ul>
			<Route path="/:id" component={Child}/>
			<Route 
				path="/order/:direction(asc|desc)"
				component={ComponentWithRegex} /> 
		</div>
	</Router>
)
const ComponentWithRegex = ({match}) =>(
	<div>
		<h3>Only asc/desc are allowed{match.params.direction}</h3>
	</div>
);

const Child = ({match}) =>{
	return(
	<div>
		<h3>ID: {match.params.id}</h3>
	</div>
)};

*/}

const App = () => (
	<Router>
		<div>
			<AuthButton />
			<ul>
				<li>
					<Link to="/public" >Public Page</Link>
				</li>
				<li>
					<Link to="/protected">Protected Page</Link>
				</li>
			</ul>
			<Route path="/public" component = {Public}/>
			<Route path="/login" component = {Login}/>
			<PrivateRoute path="/protected" component ={Protected}/>
		</div>
	</Router>
)

const PrivateRoute = ({component: Component,...rest}) =>(
	<Route
		{...rest}
		render={
			props => 
				fakeAuth.isAuthenticated ? (
					<Component {...props}/>
				):(
					<Redirect
						to = {{
							pathname:"/login",
							state:{from:props.location}
							
							}}/>	
				)			
		}/>
)

const AuthButton = withRouter(
	({history}) =>
		fakeAuth.isAuthenticated ? (
			<p>
				Welcome!{" "}
				<button
					onClick={()=>{
						fakeAuth.signout(()=> history.push("/"));
					}}
				>
				Sign out
				</button>	
			</p>
		):(
		<p>You are not logged in.</p>
		)
)

const Public = () =>(
	<div>
		<h3>Public page</h3>
	</div>
)

const Protected = () => (
	<div>
		<h3>Protected Page</h3>
	</div>
)

const fakeAuth = {
	isAuthenticated:false,
	authenticate(cb) {
		this.isAuthenticated = true;
		setTimeout(cb,100);
	},
	signout(cb) {
		this.isAuthenticated = false;
		setTimeout(cb,100)
	}
}; 

class Login extends React.Component {
	state = {
		redirectToReferrer: false
	};

	login = () => {
		fakeAuth.authenticate(()=>{
			this.setState({redirectToReferrer:true});
		});
	};

	render() {
		const {from} = this.props.location.state || {from: {pathname:"/"}};
		const {redirectToReferrer} = this.state;

		if(redirectToReferrer) {
			return <Redirect to = {from} />
		}
		return (
			<div>
				<p> >You must log in to view the page at {from.pathname}</p>
				<button onClick={this.login}>Login in</button>
			</div>
		);
	}
}

export default App

