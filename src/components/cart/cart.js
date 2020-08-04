import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Ticket from "../ticket/ticket";
import "./cart.css";

const TicketList = ({inCart, onDeleted}) => {
    let tickets = inCart.map((ticket) => {
        return (
            <li key={ticket} className="list-group-item">
                <Ticket row={ticket[0]} seat={ticket[1]} onDeleted={() => onDeleted(ticket)}/>
            </li>
        );
    });
    const msg =() => {
        return (
            <li className="list-group-item">
                <h6>"No one ticket here!"</h6>
            </li>
        );
    };
    return (
        <ul className="list-group">
            {tickets.length ? tickets : msg()}
        </ul>
    );
};

const Cart = ({inCart, onDeleted}) => {
    let count = inCart.length;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <button className="btn btn-dark"
                    onClick={handleShow}>
                Cart ({count})
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Yours tickets</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <TicketList inCart={inCart} onDeleted={onDeleted} />
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Cart;
