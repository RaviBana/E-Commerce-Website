import React from 'react';
import {BiRupee} from 'react-icons/bi'
import Ratings from './Ratings';
import { useCartContext } from '../context/Context';

const SingleCard = ({product}) => {

    const {state:{products, cart}, dispatch}= useCartContext()
    // console.log('carts',cart)

  return (
    <div>

    <div className="card" style={{width: '14rem'}}>
    <img src={product.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{product.name.substring(0,15)}..</h5>
      <p className="card-text my-1"> Price: <BiRupee/>{product.price.split('.')[0]}</p>
      <p className="card-text my-1">4 days delivery</p>
      <p className="card-text">Ratings: <Ratings ratings={product.ratings}/></p>

{
   cart &&  cart.some((e)=> e.id === product.id)?(
        <a className="btn btn-warning" onClick={()=>{dispatch({type: 'delete_from_cart',payload: product.id})}}>Remove from cart</a>
    ):(
        !product.inStock?(

            <a className="btn btn-danger" disabled={false}   onClick={()=>{dispatch({type: 'Add_to_cart',payload: product})}} >Out Of Stock</a>
        )
        :(

            <a className="btn btn-primary" onClick={()=>{dispatch({type: 'Add_to_cart',payload: product})}}>Add to cart</a>
        )

    )
}
    </div>
  </div>
    </div>
  )
}

export default SingleCard