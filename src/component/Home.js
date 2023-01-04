import React, { useEffect } from 'react';
import { useCartContext } from '../context/Context';
import Sidebar from './Sidebar';
import SingleCard from './SingleCard';

const Home = () => {
    // console.log(state1.byprice)
    // const {state} = useCartContext();
    // or
    const {state:{products , cart}} = useCartContext()
    const {byStock,
        byFastDelivery,
        byRating,
        searchQuery} = useCartContext()
        console.log(products)
        
    const {state1} = useCartContext()
useEffect(()=>{

    console.log('rate',state1.byRating)
})

const filterProducts=()=>{
   
    let sortProducts = products
    if(state1.searchQuery){
        console.log('search', state1.searchQuery)
        sortProducts = sortProducts.filter((e)=> 
        e.name.toLowerCase().includes(state1.searchQuery))
       
    }
    if(state1.byRating){
        sortProducts = sortProducts.filter((e)=> e.ratings >= state1.byRating)
    }
    if(state1.byPrice === 'lowToHigh'){
        sortProducts = sortProducts.sort((a,b)=> a.price - b.price)   
    }
    if(state1.byPrice === 'highToLow'){
        sortProducts = sortProducts.sort((a,b)=> b.price - a.price)   
    }
    if(state1.byStock){
        sortProducts = sortProducts.filter((e)=> e.inStock == 0)
    }
    if(state1.byFastDelivery){
        sortProducts = sortProducts.filter((e)=> e.fastDelivery == true)
        console.log('fast',sortProducts)
    }


    return sortProducts
}

    return (
        <div className='homediv'>
        <Sidebar/>
    <div className='cards'>
       {filterProducts().map((prod)=>
       <SingleCard product={prod} key={prod.id}/>
       )}

    </div>
       </div>
  )
}

export default Home