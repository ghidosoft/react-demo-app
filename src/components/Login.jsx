import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { requestLogin } from '../actions/authActions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleChangeUsername = this.handleChange.bind(this, 'username');
        this.handleChangePassword = this.handleChange.bind(this, 'password');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field, event) {
        this.setState({[field]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.requestLogin(this.state.username, this.state.password);
    }

    render() {
        const {error, loading, logged} = this.props;
        if (logged) {
            return <Redirect to={{pathname: '/', state: {from: this.props.location}}} />;
        }
        return (
            <>
                <div className="login">
                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <div className="logo text-center">
                            <span>React Demo App</span>
                        </div>
                        <div className="separator" />
                        <div className="form-content">
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" id="inputEmail" className="form-control" placeholder="" required autoFocus
                                    value={this.state.username} onChange={this.handleChangeUsername} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">Password</label>
                                <input type="password" id="inputPassword" className="form-control" placeholder="" required
                                    value={this.state.password} onChange={this.handleChangePassword} />
                                {error && <div>Invalid credentials</div>}
                            </div>
                            <div className="text-center login-button">
                                <button className="btn btn-primary" type="submit" disabled={loading}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}
// Invalid email or password.
const mapStateToProps = (state) => ({
    error: state.auth.error,
    loading: state.auth.loading,
    logged: state.auth.logged,
});

export default connect(mapStateToProps, {requestLogin})(Login);
