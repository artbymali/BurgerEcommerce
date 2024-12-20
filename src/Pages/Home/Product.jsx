import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import { useBasket } from '../../CartContext';

function Product(props) {

    const {product, id} = props;
    const {addItem} = useBasket();

    const handleAddItem = () => {
        addItem(product)
    }

  return (
    <>
        <div className={`card card-${id}`}>
            <div className="Heading">
                <p>{product.definer}</p>
                <Link to={`/products/${product.id}`}><h2>{product.name}</h2></Link>
            </div>
            <div className="Image">
                <img src={product.imgUrl} alt="" />
            </div>
            <div className="Bottom">
                <div className="Price">
                    <h2>${product.price.toFixed(2)}</h2>
                    <p>200gr / 600cal</p>
                </div>
                <div className="Button">
                    <NavLink>
                        <i onClick={handleAddItem}>
                            <FaPlus className="icon" />
                        </i>
                    </NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product