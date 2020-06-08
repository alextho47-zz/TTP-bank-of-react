import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Credits extends Component {

    constructor () {

        super();

        this.state = {

            credits: []
            
        }

    }

    componentDidMount() {

        axios.get("https://moj-api.herokuapp.com/credits").then((response) => {

            const data = response.data;

            console.log(data);

            this.setState({ credits: data });

        })

    }

    render() {

        let display = (this.state.credits.map((credit) => {

                return (

                <>

                <div> Description: { credit.description } </div>

                <div> Amount: { credit.amount } </div>
                
                <div> Date: { credit.date } </div>

                <br />

                </>

                )

            })

        )

        return (
            
            <div className="App">

            <h1>Credits</h1>

            <Link to="/">Back to Home</Link>

            <br /><br />

            <div> { display } </div>

            </div>

        )

    }

}

export default Credits