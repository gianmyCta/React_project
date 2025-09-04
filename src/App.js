import React, { Component } from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";

import flash from "./pictures_project/flash.png"

class App extends Component {
  state = {
    cards: [
      { id: 0, immagine: flash, nome: "flash", prezzo: 10, quantità: 0 },
      { id: 1, immagine: flash, nome: "nino", prezzo: 10, quantità: 0 },
      { id: 2, immagine: flash, nome: "pippo", prezzo: 20, quantità: 0 },
      { id: 3, immagine: flash, nome: "ture", prezzo: 30, quantità: 0 },
      { id: 4, immagine: flash, nome: "alessandro", prezzo: 30, quantità: 0 },

    ]
  };
  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards });
  }
  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantità++;
    this.setState({ cards });
  }

  handleDecrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    if (cards[id].quantità > 0) {
      cards[id].quantità--;
      this.setState({ cards });
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-3">
          <h1>Cosa vuoi ordinare?</h1>
          <hr />
          <div className="row">
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                card={card} />
            ))}

          </div>
        </div>
      </>

    );
  }
}

export default App;
