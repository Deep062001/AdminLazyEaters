import React, { useEffect, useState } from 'react'
import FileBase from 'react-file-base64';
import { createFoodPost, updateFoodPost } from '../../actions/foodPost';
import { useDispatch } from 'react-redux';
import './FoodForm.scss';


const foodObj = { name: '', price: '', tags: '', image: '' };
const FoodForm = (props) => {
    console.log("render form");
    const [foodData, setFoodData] = useState({ 
        name: props.values.name?props.values.name:"",
        price: props.values.price,
        tags: props.values.tags.length>0?props.values.tags[0]:"",
        image: props.values.image,
     });

     useEffect(()=>{
        setFoodData({ 
            name: props.values.name?props.values.name:"",
            price: props.values.price,
            tags: props.values.tags.length>0?props.values.tags[0]:"",
            image: props.values.image,
         })
     },[props.values]);
    console.log(foodData);
    const dispatch = useDispatch();

    function handleSubmit(e) {
        console.log(props.values);
        e.preventDefault();
        if(props.values.id){
        dispatch(updateFoodPost(props.values.id,foodData))
        }
        else {
            dispatch(createFoodPost(foodData));
        }
        props.clearValues();
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