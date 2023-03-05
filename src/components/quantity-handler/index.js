import React, { useState } from "react";
import PropTypes from 'prop-types';
/**
 * QuantityHandler
 * 
 * @param {func}               AddtoCart
 * @param {func}               RemoveFromCart 
 * @param {func}               removeAll 
 * 
 * @returns {Component}
 */
const QuantityHandler = ({ AddtoCart, RemoveFromCart, removeAll }) => {
    const [quantity, setQuantity] = useState(0);
    const handleChangeQuantity = (increment) => {
        if (increment) { AddtoCart() }
        else {
            RemoveFromCart()
        }
        setQuantity((prevQuantity) => increment ? prevQuantity + 1 : prevQuantity - 1);
    }
    const handleRemoveAll = () => {
        removeAll();
        setQuantity(0);
    }
    return (
        <>
            <div className="d-grid">
                <div className="btn-group">
                    <button data-testid="increment" onClick={() => handleChangeQuantity(true)} type="button" className="btn btn-dark">+</button>
                    <input name="Quantity Counter" data-testid="counter" disabled={true} type="text" value={quantity} className="form-control quantity-input" />
                    <button data-testid="decrement" disabled={quantity === 0} onClick={() => handleChangeQuantity(false)} type="button" className="btn btn-dark">-</button>
                </div>
                <button onClick={handleRemoveAll} type="button" className="btn btn-link">Remove</button>
            </div>
        </>
    )
}
QuantityHandler.defaultProps = {
    AddtoCart: () => { },
    RemoveFromCart: () => { },
    removeAll: () => { },
}
QuantityHandler.propTypes = {
    AddtoCart: PropTypes.func,
    RemoveFromCart: PropTypes.func,
    removeAll: PropTypes.func,
}

export default QuantityHandler;