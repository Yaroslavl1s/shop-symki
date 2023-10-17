import React from 'react'
import 'react-multi-carousel/lib/styles.css';


export default function Product(props) {
    return (
        <div className="card">
        <img className="product--image" src={props.url} alt="symka"></img>
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>
        <p>{props.description}</p>
          <button>Add to Cart</button>

       </div>
    )
}