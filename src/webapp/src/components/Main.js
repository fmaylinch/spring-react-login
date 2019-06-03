import React from 'react';
import axios from 'axios';

class Main extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            notes: [ ]
        };
    }

    componentDidMount() {

        axios.get("/api/notes").then(response => {

            const notes = response.data;
            console.log(notes);

            this.setState({ notes: notes })
        });
    }

    render() {

        return (
            <div>
                <h1>Notes App</h1>
                <h2>Notes:</h2>
                <ul>
                    { this.state.notes.map(x => <li>{x}</li>) }
                </ul>
            </div>
        );
    }
}

export default Main;