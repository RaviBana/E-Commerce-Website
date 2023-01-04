import React from 'react';
import { useCartContext } from '../context/Context';
import { AiOutlineShoppingCart, AiFillDelete } from 'react-icons/ai';
import { BiRupee } from 'react-icons/bi';
import Ratings from './Ratings';

const CartDetail = () => {
  const { state: { cart }, dispatch } = useCartContext()

  console.log('cart', cart)
  return (
    <div className='cartbox'>
      {
        cart.length ? (
          cart && cart.map((data) =>
            <>
              <div id="modal-body" key={data.id} >

                <img src={data.image} alt="" width={"100px"} />

                <div id='cartname'>
                  <p>{data.name}</p>
                </div>

                <div>

                  <p>Price: <BiRupee />{data.price*data.qty}</p>
                </div>
                <div>
                  <select name="" id="select" onChange={(e) => dispatch({ type: 'change_qty', payload: { Id: data.id, qty: e.target.value } })}>
                    {
                      [...Array(data.inStock)].map((e, i) =>
                        <option value={i + 1} >{i + 1}</option>
                       
                      )

                    }
                  </select>
                </div>

                <div>
                  <Ratings ratings={data.ratings} />
                </div>

                <i onClick={() => { dispatch({ type: 'delete_from_cart', payload: data.id }) }}><AiFillDelete /></i>
              </div>
            </>
          )
        ) : (<h5 className='mx-5 my-5'> Your Cart is Empty</h5>)
      }
<div className='totalamount'> 
<span className='btn btn-outline-success mx-5 '>

Total Amount : {cart.reduce((a,b)=> a + b.price*b.qty  ,0)}
</span>
</div>




    </div>
  )
}

export default CartDetail