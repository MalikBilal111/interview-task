const getCartTotal = (array) => {
    let sum = 0;
    for (const item of array) {
        sum += item.price;
    }
    return `${sum.toFixed(2)}$`;

}
const colors = ["Red", "Black"]
export { getCartTotal, colors }