import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Components/Navigation'
import { useBasket } from '../../CartContext'
import { MdCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";


function Cart() {

  const { items, addItem, removeItem, getTotalPrice, deleteButton } = useBasket();

  const [quantities, setQuantities] = useState(
      items.reduce((acc, item) => {
          acc[item.product.id] = item.quantity;
          return acc;
      }, {})
    );

  const handleLocalIncrement = (productId) => {
    setQuantities(prevQuantities => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] + 1
    }));
  };

  const handleLocalDecrement = (productId) => {
      setQuantities(prevQuantities => ({
          ...prevQuantities,
          [productId]: Math.max(prevQuantities[productId] - 1, 1)
      }));
    };

  const handleUpdateCart = () => {
      items.forEach(item => {
          const localQuantity = quantities[item.product.id];
          const currentCartQuantity = item.quantity;

          if (localQuantity > currentCartQuantity) {
              for (let i = 0; i < localQuantity - currentCartQuantity; i++) {
                  addItem(item.product);
              }
          } else if (localQuantity < currentCartQuantity) {
              for (let i = 0; i < currentCartQuantity - localQuantity; i++) {
                  removeItem(item.product);
              }
          }
      });
    };



    const handleDelete = (productId) => {
      deleteButton(productId)
    }

  return (
    <>
        <Navigation/>
        
        <div className="CartPage">
            <div className="CartPageContainer">
                <div className="CartHeading">
                    <h1>Cart</h1>
                    <p>Check and complete your order</p>
                </div>
                <div className="CartContent">
                    <div className="CartContentProduct">
                        <div className="CartContentProductTittleParent">
                            <div className="CartContentProductTittles">
                                <p>Product</p>
                                <p>Price</p>
                                <p>Quantity</p>
                                <p>Subtotal</p>
                            </div>
                        </div>

                        <div className="CartContentProductContentParent">
                          {items.length > 0 ? (
                            items.map((item, index) => (
                              <div className={`CartContentProductContent CartContentProductContent-${item.product.id} ${index > 0 ? 'has-border' : ''}`} key={item.product.id}>

                                <div className="CartContentProductContentChild">
                                  <div className="CartContentProductName">
                                    <button onClick={() => handleDelete(item.product.id)}><MdCancel /></button>
                                    <img src={item.product.imgUrl} alt={item.product.name} />
                                    <Link to={`/products/${item.product.id}`}>
                                      <h2>{item.product.name}</h2>
                                    </Link>
                                  </div>

                                  <div className="CartContentProductNumber">
                                    <div className="CartContentProductPrice">
                                      <h3>${item.product.price.toFixed(2)}</h3>
                                    </div>

                                    <div className="CartContentProductQuantityParent">
                                      <div className="CartContentProductQuantity">
                                        <FiMinus onClick={() => handleLocalDecrement(item.product.id)}/>
                                        <h3>{quantities[item.product.id]}</h3>
                                        <FaPlus onClick={() => handleLocalIncrement(item.product.id)}/>
                                      </div>
                                    </div>

                                    <div className="CartContentProductTotalPrice">
                                      <h3>${(item.product.price * quantities[item.product.id]).toFixed(2)}</h3>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            ))
                          ) : (
                            <p>Your cart is empty.</p>
                          )}
                      </div>
                    </div>

                    <div className="CartContentCalculate">

                      <div className="CartContentCalculateTop">
                        <div className="CartCalculateCupon">
                          <input type="text" placeholder='Cupon Code'/>
                          <button>APPLY</button>
                        </div>
                        <div className="CartCalculateUpdate">
                          <button onClick={handleUpdateCart}>UPDATE CART</button>
                        </div>
                      </div>

                      <div className="CartContentCalculateBottom">
                        <div className="CartContentCalculateTotal">
                          <div className="CartCalculateTotalHeading">
                            <h3>CartTotals</h3>
                          </div>
                          <div className="CartContentCalculateContent">

                            <div className="CartCalculateTotalSubtotal border-top">
                              <h4>Subtotal</h4>
                              <span>${getTotalPrice().toFixed(2)}</span>
                            </div>

                            <div className="CartCalculateTotalShipping border-top">
                              <h4>Shipping</h4>
                              <span>Flate rate: <span>${15}.00</span></span>
                            </div>

                            <div className="CartCalculateTotalTotal border-top">
                              <h4>Total</h4>
                              <span>${getTotalPrice() + 15}.00</span>
                            </div>

                            <div className="CartCalculateTotalButton">
                              <button>PROCEED TO CHECKOUT</button>
                            </div>

                          </div>
                        </div>
                      </div>

                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Cart