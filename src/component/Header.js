import React from 'react';
import {AiOutlineShoppingCart,AiFillDelete} from 'react-icons/ai';
import {BiRupee} from 'react-icons/bi';
import { useCartContext } from '../context/Context';
import { Link } from 'react-router-dom';

const Header = () => {

    const {state:{cart}, dispatch} = useCartContext()
    const {dispatch1} = useCartContext()
    
  return (
    <>
    <div className='header'>
       <div> <Link to={'/'} id='link'>sHopPing Cart</Link> </div>

       <div>
        <input type="text" placeholder='Enter to search..' onChange={(e)=>dispatch1({type:'search', payload:e.target.value.toLowerCase()})}/>
       </div>

       <div id='batch'  data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i>
                <AiOutlineShoppingCart/>
        </i>
        <p>{cart.length}</p>
       </div>
</div>


{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}


<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Your Cart Details</h1>
        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
      </div>
      {
        cart.length?(
            cart && cart.map((data)=>{
                return <div className="modal-body" key={data.id} >

                 <img src={data.image} alt="" width={"70px"}/>
                 
                 <div>
                     <p>{data.name}</p>
                     <p>Price: <BiRupee/>{data.price}</p>
                 </div>
                 <i onClick={()=>{dispatch({type:'delete_from_cart', payload: data.id})}}><AiFillDelete/></i>
               </div>
            })
        ):( <h6 className='mx-5 '> Your Cart is Empty</h6>
            )
       
      }
     
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"> <Link to={'/cartdetail'}  className="cartbtn"  disabled>Go to Cart</Link></button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Header