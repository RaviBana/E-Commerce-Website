import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import React from 'react'
import { useCartContext } from '../context/Context'


const Sidebar = () => {
    const { state1, dispatch1 } = useCartContext()
    // console.log('side',state1.byRating)
    return (
        <div className='sidebar'>
            <div id='sideItem'>
            <div onClick={()=>dispatch1({type:'price-filter',payload:'lowToHigh'})}>
                <input type="radio" name="price" id="1" checked={state1.byPrice==='lowToHigh'?true:false}/>
                <label htmlFor="1" className='mx-2'>Low-High</label>
                </div>
                <div onClick={()=>dispatch1({type:'price-filter',payload:'highToLow'})}>
                    <input type="radio" name="price" id="2" checked={state1.byPrice==='highToLow'?true:false}/>
                    <label htmlFor="2" className='mx-2'>High-Low</label>
                </div>
                <div onClick={()=>dispatch1({type:'stock-filter', payload: !state1.byStock})}>
                    <input type="checkbox" name="" id="3"  checked={state1.byStock}/>
                    <label htmlFor="3" className='mx-2'>Include Out of Stock</label>
                </div>
                <div onClick={()=>dispatch1({type:'delivery-filter', payload: !state1.byFastDelivery})}>
                    <input type="checkbox" name="" id="4" checked={state1.byFastDelivery}/>
                    <label htmlFor="4" className='mx-2'>Fast Delivery Only</label>
                </div>
                <div id='rating-btn'>
                    Ratings - &nbsp; 
                    {
                        [...Array(5)].map((e, i) => {
                            if (state1.byRating > i) {

                                return <span key={i} onClick={() => { dispatch1({ type: 'Rating_click', payload: (i + 1) }) }}>
                                    <AiFillStar />
                                </span>
                            }
                            else {
                                return <span key={i} onClick={() => { dispatch1({ type: 'Rating_click', payload: (i + 1) }) }}>
                                    <AiOutlineStar />
                                </span>
                            }
                        }
                        )}
                </div>
                <button className='btn btn-light btn-sm' onClick={()=>dispatch1({type:'clear-filter', payload: ''})}>Clear All Filters</button>
            </div>

        </div>
    )
}

export default Sidebar