import React from 'react';
import axios from 'axios';

class Main extends React.Component {

    componentDidMount() {

        axios.get("/api/notes").then(response => {
            const notes = response.data;
            console.log(notes);
        });
    }

    render() {

        return (
            <div>
                <h1>Notes App</h1>
                <h2>Notes:</h2>
                <ul>
                    <li>One note</li>
                    <li>Another note</li>
                </ul>
            </div>
        );
    }
}

export default Main;