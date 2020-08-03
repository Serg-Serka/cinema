import React, {Component} from "react";
import "./app.css";
import PlaceButton from "../place-button";
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
        console.log(id);
        let x = false;
        const selected = this.state.selected;
        selected.forEach((el) => {
            if ( (el[0] === id[0]) && (el[1] === id[1]) ) {
                x = true;
                return this.deleteFromSelected(id);

            }
        });
        if (x) {
            console.log('Here!!!');
            return true;
        }

        this.setState(({selected}) => {
            // console.log(selected);
            const newArr = [
                ...selected,
                id
            ];
            return {
                selected: newArr
            };
        });
        setTimeout(() => {
            console.log(this.state.selected);
        }, 5000);
    };

    deleteFromSelected = (id) => {
      const selected = this.state.selected;

      const newSelected = selected.filter(item => {
         if (item[0] === id[0] && item[1] === id[1]) {
             return false;
         }
         return true;
      });
      this.setState({
          selected: newSelected,
      })

    };

    render() {
        const {all, selected, booked} = this.state;
        return (
            <div className="app">

                <div className="row app-row">
                    <Header />
                </div>
                <div className="row app-row">
                    {/*<PlaceButton isAble={true} isBooked={false} isSelected={false} row={1} place={1} />*/}
                    <Hall seats={all}
                          selected={selected}
                          booked={booked}
                          onSelected={this.onSelected}/>
                </div>
                <div className="row app-row">
                    <AddButton />
                </div>

            </div>

        );
    }
}
