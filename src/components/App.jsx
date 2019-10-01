import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom';
import { logout } from '../actions/authActions';
import '../styles/App.css';
import Login from './Login';
import Header from './Header';

const Users = () => (<div>Users</div>);
const Dashboard = () => (<div>Dashboard</div>);

const App = ({authLoading, logged, user, logout}) => {
    if (authLoading) {
        return <div>LOADING (first time)...</div>;
    }

    if (!logged) {
        return <Login />;
    }

    return (
        <div>
            <Header user={user} onLogout={logout} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 sidebar">
                        <NavLink exact to="/">Dashboard</NavLink>
                        <NavLink to="/users">Users</NavLink>
                    </div>
                    <main className="col">
                        <Switch>
                            <Route path="/users" exact component={Users} />
                            <Route component={Dashboard} />
                        </Switch>
                    </main>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    authLoading: state.auth.firstLoading,
    logged: state.auth.logged,
    user: state.auth.user,
});

export default connect(mapStateToProps, {logout})(App);
