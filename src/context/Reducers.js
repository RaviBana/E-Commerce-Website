import state1 from './Context'

const Reducer = (state, action) => {
    console.log('sta',state.cart)
  switch(action.type){
    case 'Add_to_cart': return {...state, cart:[...state.cart, {...action.payload, qty:1}]}
    case 'delete_from_cart': return {...state, cart:state.cart.filter((e)=>e.id !== action.payload)}
    case 'change_qty':
      console.log('qty',action.payload)  
    return {...state, cart:state.cart.filter((e)=> 
      e.id === action.payload.Id ? (e.qty = action.payload.qty) : e.qty
      )}
      // e.id === action.payload.Id
      // break;
    default :
    return state
  }
}


const FilterReducer =(state1, action)=>{
    switch(action.type){
        case 'search':
            // console.log('search',action.payload)
            // break;
            return {...state1, searchQuery:action.payload }
        case 'Rating_click': return {...state1, byRating:action.payload }
        case 'price-filter': return {...state1, byPrice: action.payload }
        case 'stock-filter': return {...state1, byStock: action.payload }
        case 'delivery-filter': return {...state1, byFastDelivery: action.payload }
        case 'clear-filter': return {...state1,byStock: false, byFastDelivery: false, byRating: 0, byPrice:'' }
        default : return state1
    }
}
export  {Reducer, FilterReducer}