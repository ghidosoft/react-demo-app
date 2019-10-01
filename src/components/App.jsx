import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import './App.css';
import Login from './Login';

const App = ({authLoading, logged, user, logout}) => {
    if (authLoading) {
        return <div>LOADING (first time)...</div>;
    }

    if (!logged) {
        return <Login />;
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>Benvenuto <strong>{user.email}</strong>!</p>
                <button onClick={logout}>Logout</button>
            </header>
        </div>
    );
}

const mapStateToProps = (state) => ({
    authLoading: state.auth.firstLoading,
    logged: state.auth.logged,
    user: state.auth.user,
});

export default connect(mapStateToProps, {logout})(App);
