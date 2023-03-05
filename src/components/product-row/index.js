import React from "react";
import QuantityHandler from "../quantity-handler";
import PropTypes from 'prop-types';
/**
 * ProductRow
 * 
 * @param {Object}               product
 * @param {Function}             cartUpdate 
 * @param {Array}                cart 
 * 
 * @returns {Component}
 */
const ProductRow = ({ product, cartUpdate, cart }) => {
    const handleAddCart = () => {
        cartUpdate([...cart, product])
    }
    const handleRemoveFromCart = () => {
        const index = cart.findIndex(x => x.id === product.id);
        if (index !== -1) {
            let tempcart = [...cart];
            tempcart.splice(index, 1);
            cartUpdate([...tempcart])
        }
    }
    const handleRemoveAll = () => {
        cartUpdate([...cart.filter(x => x.id !== product.id)])
    }
    return (
        <>
            <div data-testid="todo" className="d-flex align-items-center justify-content-between mb-2">
                <div className="d-flex align-items-center">
                    <img src={product?.img} width="80" />
                    <div className="ms-2">
                        <h6 className="mb-0">{product?.name}</h6>
                        <p className="mb-0">{`${product?.price}$ each`}</p>
                        <span className="badge rounded-pill" style={{ backgroundColor: product?.colour }}>{product?.colour}</span>
                    </div>
                </div>
                <QuantityHandler removeAll={handleRemoveAll} RemoveFromCart={handleRemoveFromCart} AddtoCart={handleAddCart} cartUpdate={cartUpdate} />
            </div>
        </>
    )
}
ProductRow.defaultProps = {
    cartUpdate: () => { },
    cart: [],
    product: {},
}
ProductRow.propTypes = {
    cartUpdate: PropTypes.func,
    cart: PropTypes.array,
    product: PropTypes.object,
}
export default ProductRow;