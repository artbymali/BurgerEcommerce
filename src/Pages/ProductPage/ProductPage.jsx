import React, { useEffect, useState } from 'react'
import Navigation from '../../Components/Navigation'
import storeItems from '../../data/items.json'
import { useParams } from 'react-router-dom'
import { useBasket } from '../../CartContext'
import { MdCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

function ProductPage() {

    const {items, addItem, removeItem, getTotalItemCount, deleteButton } = useBasket();
    const { id } = useParams();
    const product = storeItems.find(item => item.id === parseInt(id))

    const handleAddItem = (product)=> {
        addItem(product)
    }

    // const handleRemoveItem = () => {
    //     removeItem(product)
    // }

    const [localCount, setLocalCount] = useState(0);
    const [relatedProducts, setRelatedProducts] = useState([]);

    const handleLocalAddItem = () => {
        setLocalCount(prevCount => prevCount + 1);
    }

    const handleLocalRemoveItem = () => {
        setLocalCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
    }

    const handleAddToCart = () => {
        if (localCount > 0) {
            for (let i = 0; i < localCount; i++) {
                addItem(product)
            }
            setLocalCount(0)
        }
    }

    const handleDelete = (productId) => {
        deleteButton(productId)
      }

      useEffect(() => {
        if (product) {
            const related = storeItems.filter(item => 
                item.id !== product.id && item.tags?.some(tag => product.tags.includes(tag))
            ).slice(0, 3);
            setRelatedProducts(related)
        }
      }, [product])
      

    

    
    
  return (
    <>
        <Navigation/>

        <div className="ProductPage">
            <div className="ProductPageContainer">
                <div className="ProductContent">
                    <div className="ProductContentSelling">
                        <div className="ProductContentLeft">
                            <h1>{product.name}</h1>
                            <h2>{product.price.toFixed(2)}</h2>
                            <h3>Ingredients:</h3>
                            <p>onion, oregano, bacon, cheese, ketchup, mustard, green salad</p>
                            <div className="ProductSellingButton">
                                <div className="ButtonInput">
                                    {/* <button onClick={handleAddItem}>Add</button> */}
                                    <FiMinus onClick={handleLocalRemoveItem} className="minus" />
                                    <h3>{localCount}</h3>
                                    <FaPlus onClick={handleLocalAddItem} className="plus" />
                                </div>
                                <button onClick={handleAddToCart}>ADD TO CART</button>
                            </div>
                        </div>
                        <div className="ProductContentRight">
                            <img src={product.imgUrl} alt="" />
                        </div>
                    </div>

                    <div className="ProductContentDescription">
                        <h2>Description:</h2>
                        <p>{product.dis}</p>
                    </div>

                    <div className="ProductHashes">
                        <div className="ProductTags">
                            {product.tags?.map((tag, index) => (
                                <p key={index}>#{tag.toUpperCase()}</p>
                            ))}
                        </div>
                    </div>

                    <div className="ProductRelatedProucts">
                        <div className="ProductRelatedHeading">
                            <h2>Related Products:</h2>
                        </div>
                        <div className="RelatedProducts">
                            {relatedProducts.map((related) => (
                                <div key={related.id} className={`RelatedProductItems RelatedCard-${related.id}`}>
                                    <div className="RelatedProductItemsImg">
                                        <img src={related.imgUrl} alt="" />
                                    </div>
                                    <div className="RelatedProductItemsHeading">
                                        <p>{related.definer}</p>
                                        <h2>{related.name}</h2>
                                    </div>
                                    <div className="RelatedProductItemsPB">
                                        <div className="RelatedProductItemsPrice">
                                            <p>${related.price.toFixed(2)}</p>
                                            <button onClick={() => handleAddItem(related)}>ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="ProductBar">
                    <div className="ProductBarCart">
                        <div className="ProductBarCartHeading">
                            <h3>Cart</h3>
                        </div>
                        <div className="ProductBarCartProducts">
                            {items.length > 0 ? (
                                items.map((item) => (
                                    <li key={item.product.id}>
                                        <div className="CartBox">
                                            <div className="CartBoxLeft">
                                                <img src={item.product.imgUrl} alt="" />
                                            </div>
                                            <div className="CartBoxRight">
                                                <div className="CartBoxRightTop">
                                                    <h3>{product.name}</h3>
                                                </div>
                                                <div className="CartBoxRightBottom">
                                                    <span>{product.price.toFixed(2) } * {item.quantity}</span>
                                                    <button onClick={() => handleDelete(item.product.id)}><MdCancel /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <p className='EmptyCart'>your cart is empty</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default ProductPage