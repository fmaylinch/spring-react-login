import React from 'react';
import NoteList from './NoteList';
import LoginForm from './LoginForm';

export default class Main extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            user: null
        }
    }

    login(user) {
        console.log("User received", user);
        this.setState({ user: user });
    }

    render() {

        return (
            <div>
                <h1>Notes App</h1>

                { this.state.user != null ?
                    <NoteList />
                    :
                    <LoginForm title="Login to see your notes" onLogin={user => this.login(user)} />
                }

            </div>
        );
    }
}
