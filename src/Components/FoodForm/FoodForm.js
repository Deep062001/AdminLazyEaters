import React, { useState } from 'react'
import FileBase from 'react-file-base64';
import { createFoodPost } from '../../actions/foodPost';
import { useDispatch } from 'react-redux';
import './FoodForm.scss';


const foodObj = { name: '', price: '', tags: '', image: '' };
const FoodForm = () => {
    const [foodData, setFoodData] = useState({ ...foodObj });
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createFoodPost(foodData));
        clearForm();
    }

    function handleChange(e) {
        const { name, value } = e.target;

        setFoodData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    function clearForm() {
        setFoodData(foodObj);
    }


    return (
        <div className='outer-form-div'>
            <form onSubmit={handleSubmit} autoComplete={"off"}>
                <div className='input-div'>
                    <label>Dish Name:</label>
                    <input type="text" name="name" onChange={handleChange} value={foodData.name} />
                </div>
                <div className='input-div'>
                    <label>Price:</label>
                    <input type="number" name="price" onChange={handleChange} value={foodData.price} />
                </div>
                <div className='input-div'>
                    <label>Tags:</label>
                    <input type="text" name="tags" onChange={handleChange} value={foodData.tags} />
                </div>
                <div>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setFoodData({ ...foodData, image: base64 })} />
                </div>
                <div className='btn-div'>
                    {/* <button onClick={clearForm}>Clear</button> */}
                    <button className='btn' type='submit'>Upload</button>
                </div>
            </form>
        </div>
    )
}

export default FoodForm