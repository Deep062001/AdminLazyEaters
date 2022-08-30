import React from 'react'
import { useSelector } from 'react-redux';
import FoodCard from '../FoodCard/FoodCard';
import './FoodDiv.scss'

const FoodDiv = () => {
    const foodPosts = useSelector((state) => state.foodPosts);
    console.log(foodPosts);
    return (
        <div className='foods-div'>
            {foodPosts.map(food => {
                return <FoodCard name={food.name} id={food._id} key={food.id} image={food.image} price={food.price} tags={food.tags} />
            })
            }
        </div>
    )
}

export default FoodDiv