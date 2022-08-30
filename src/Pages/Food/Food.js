import React, { useEffect } from 'react';
import FoodCard from '../../Components/FoodCard/FoodCard';
import FoodForm from '../../Components/FoodForm/FoodForm';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodPost } from '../../actions/foodPost';
import './Food.scss';
import FoodDiv from '../../Components/FoodDiv/FoodDiv';

const Food = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        //dispatch(getFoodPost());
        dispatch(getFoodPost());
    }, [dispatch])
    return (
        <div className='food'>
            <div className='form'>
                <FoodForm />
            </div>
            <FoodDiv />
        </div>
    )
}

export default Food