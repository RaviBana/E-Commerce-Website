import React from 'react';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'

const Ratings = ({ratings}) => {
  return (
    <>
    {[...Array(5)].map((e,i)=>{
            if(ratings> i){
                return <span key={i}> <AiFillStar/></span> 
            }
            else{
                return   <span key={i}><AiOutlineStar/> </span>
              }
        }
    )
    }
   {ratings} </>
  )
}

export default Ratings