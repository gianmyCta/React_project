import React, { Component } from "react";


class Card extends Component {
    render() {
        return (
            <div className="col">
                <div className="card" style={{ width: "18rem", textAlign: "center", position: "relative", marginBottom: "1rem" }}>
                    <div className="badge bg-secondary" style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>{this.props.card.quantità}</div>
                    <div className="d-flex align-items-center gap-2 justify-content-center">
                        <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary">Aggiungi </button>
                        <button onClick={() => this.props.onDecrement(this.props.card)} className="btn btn-primary">Rimuovi </button>
                    </div>
                    <img src={this.props.card.immagine} className="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 className="card-title">{this.props.card.nome}</h5>
                        <p className="card-text">€ {this.props.card.prezzo} </p>
                        <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Elimina</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;