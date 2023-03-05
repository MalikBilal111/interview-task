import React, { useEffect, useState } from "react"
// Services
import { getAllProducts } from "./services";
import "./assets/stylesheet.css"
import ProductRow from "./components/product-row";
import { getCartTotal, colors } from "./utils";
function App() {
  const [productList, setProductList] = useState([]);
  const [searchedColour, setSearchColour] = useState("");
  const [cart, setCart] = useState([]); // Can Implement a State Management Library (Redux) to Handle Cart throughout the application
  useEffect(() => {
    const controller = new AbortController();
    getAllProducts(controller.signal).then((result) => {
      setProductList(result)
    })
    // return cleanup function to abort request
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {
        cart.length > 0
          ?
          <div className="w-100 bg-dark">
            <p className="text-white text-end me-2">Total : {getCartTotal(cart)}</p>
          </div>
          :
          null
      }
      <main className="container p-3">
        <div className="d-flex justify-content-between">
          <h4>Ready to Shop</h4>
          <select onChange={(e) => setSearchColour(e.target.value.toLowerCase())} className="form-control w-25">
            <option value="">Please Select</option>
            {
              colors.map((item, index) => (
                <option key={`Dashboard Color Select ${item} - ${index}`}>{item}</option>
              ))
            }
          </select>
        </div>
        {
          !!productList && productList.length > 0 && productList.filter((prod) =>
            prod?.colour.toLowerCase().includes(searchedColour)
          ).map((product, index) => (
            <ProductRow cart={cart} cartUpdate={setCart} product={product} key={`Home Page Product Row - ${product.name} - ${index}`} />
          ))
        }
      </main>
    </>
  );
}

export default App;
