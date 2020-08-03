import React from "react";
import "./add-button.css";

const AddButton = ({ count }) => {
    return (
        <button className="btn btn-success">Add tickets({count}) to cart</button>
    );
};

export default AddButton;
