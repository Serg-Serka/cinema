import React, {Component} from "react";
import "./app.css";
import AddButton from "../add-button";
import Header from "../header";
import Hall from "../hall";

export default class App extends Component {

    hall = this.createHall();
    booked = this.randomBooking();
    state = {
        all: this.hall,
        selected: [],
        booked: this.booked,
        inCart: []
    };


    createHall() {
        let hall = [];
        for (let i = 0; i < 40; i++) {
            hall.push([]);
            for (let j = 1; j <= 20; j++) {
                hall[i].push(j);
            }
        }
        return hall;
    };

    randomBooking() {
        let booked = [];
        for (let i = 0; i < 40; i++) {
            booked.push([]);
            for (let j = 1; j <= 20; j++) {
                if (Math.random() < 0.25)
                booked[i].push(j);
            }
        }
        return booked;
    }

    onSelected = (id) => {
        let x = false;
        const selected = this.state.selected;
        selected.forEach((el) => {
            if ( (el[0] === id[0]) && (el[1] === id[1]) ) {
                x = true;
                return this.deleteFromSelected(id);

            }
        });
        if (x) {
            return true;
        }

        this.setState(({selected}) => {
            const newArr = [
                ...selected,
                id
            ];
            return {
                selected: newArr
            };
        });
    };

    deleteFromSelected = (id) => {
      const selected = this.state.selected;

      const newSelected = selected.filter(item => {
         return !(item[0] === id[0] && item[1] === id[1]);

      });
      this.setState({
          selected: newSelected,
      });
    };

    onAddingTickets = () => {
        const tickets = this.state.selected;
        tickets.forEach((ticket) => {
            this.setState(({inCart, booked}) => {
                const newCarted = [
                    ...inCart,
                    ticket
                ];
                const newBooked = [
                    ...booked,
                    ticket
                ];
                return {
                    inCart: newCarted,
                    selected: [],
                    booked: newBooked
                }
            });
        });
    };

    onCartClick = () => {
        const cart = this.state.inCart;
        console.log(cart);
    };


    render() {
        const {all, selected, booked, inCart} = this.state;
        let count = selected.length;
        let nonTickets = selected.length <= 0;
        return (
            <div className="app">

                <div className="row app-row">
                    <Header inCart={inCart} onCartClick={this.onCartClick} />
                </div>
                <div className="row app-row">
                    <AddButton count={count} disabled={nonTickets} onAddingTickets={this.onAddingTickets} />
                </div>
                <div className="row app-row">
                    <Hall seats={all}
                          selected={selected}
                          booked={booked}
                          onSelected={this.onSelected}/>
                </div>
                <div className="row app-row">
                    <AddButton count={count} disabled={nonTickets} onAddingTickets={this.onAddingTickets} />
                </div>

            </div>
        );
    }
}
