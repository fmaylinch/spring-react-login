import React from 'react';

export default class LoginForm extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            user: {
                email: "",
                password: ""
            }
        }
    }

    updateField(event, property) {

        const value = event.target.value;

        //console.log("New value for " + property + ": " + value);

        this.setState( (currentState) => {
            currentState.user[property] = value;
            return currentState;
        } );
    }

    login() {
        console.log("email:", this.state.user.email);
        console.log("password:", this.state.user.password);

        this.props.onLogin(this.state.user);
    }

    render() {

        return (
            <div>
                <h3>{this.props.title}</h3>
                <div>
                    Email: <input type="text" onChange={event => this.updateField(event, "email")} />
                </div>
                <div>
                    Password: <input type="text" onChange={event => this.updateField(event, "password")} />
                </div>
                <div>
                    <button onClick={event => this.login()}>Login</button>
                </div>
            </div>
        );
    }
}
