import React from 'react'
import { useSelector } from 'react-redux';
import FoodCard from '../FoodCard/FoodCard';
import './FoodDiv.scss'

const FoodDiv = (props) => {
    const foodPosts = useSelector((state) => state.foodPosts);
    return (
        <div className='foods-div'>
            {foodPosts.map(food => {
                return <FoodCard updateValues={(obj)=>{
                    props.updateValues(obj);
                }} name={food.name} id={food._id} key={food._id} image={food.image} price={food.price} tags={food.tags} />
            })
            }
        </div>
    )
}

export default FoodDiv