import React from 'react'

export default function Product() {
    return (
        <div className="card">
        <img className="product--image" src="https://millzkarta.ru/blog/wp-content/uploads/2022/10/tout.jpg" alt="symka"></img>
        <h2>Сумка</h2>
        <p className="price">$20.99</p>
        <p>Крутая сумка</p>
          <button>Add to Cart</button>

       </div>
    )
}