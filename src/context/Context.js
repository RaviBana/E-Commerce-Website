import React, { useReducer, useContext } from 'react';
import faker from 'faker';
import { createContext } from 'react';
import { Reducer ,FilterReducer} from './Reducers';

const cartContext = createContext()
faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
  // console.log(products)
  const initialState = {
    cart: [],
    products: products
  }
  const initialState1 = {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  }
  const [state, dispatch] = useReducer(Reducer, initialState)
  const [state1, dispatch1] = useReducer(FilterReducer, initialState1)

  // console.log('helo',state1.byRating)
  return (
    <div>
      <cartContext.Provider value={{ state, dispatch, state1, dispatch1 }} >{children}</cartContext.Provider>
    </div>
  )
}
const useCartContext = () => {
  return useContext(cartContext)
}
export { Context, useCartContext }