import React from 'react'
import Product from './Product'
import storeItems from '../../data/items.json'

function BestSeller() {
  return (
    <>
        <section className="BestSellers">
          <div className="ProductsContainer">
              <div className="ProductsContent">
                <div className="ProductsHeading">
                  <h2><span>Bestsellers</span></h2>
                </div>
                <div className="box">
                    {
                        storeItems.map((product) => <Product key={product.id} product={product} id={product.id}/>)
                    }
                </div>
              </div>
          </div>
        </section>
    </>
  )
}

export default BestSeller