import React, {Component} from "react";
import "./app.css";
import PlaceButton from "../place-button";
import AddButton from "../add-button";
import Header from "../header";
import Hall from "../hall";

export default class App extends Component {


    constructor() {
        super();
        const hall = this.createHall();
        this.state = {
            all: hall,
            selected: [],
            notAble: [],
            booked: [],
        };
    }
    createHall() {
        let hall = [];
        for (let i = 0; i < 40; i++) {
            for (let j = 0; j < 20; j++) {
                let elem = [[i+1], [j+1]];
                hall.push(elem);
            }

        }
        return hall;
    };
    render() {
        return (
            <div className="app">

                <div className="row app-row">
                    <Header />
                </div>
                <div className="row app-row">
                    {/*<PlaceButton isAble={true} isBooked={false} isSelected={false} row={1} place={1} />*/}
                    <Hall places={this.state.all}/>
                </div>
                <div className="row app-row">
                    <AddButton />
                </div>

            </div>

        );
    }
}
