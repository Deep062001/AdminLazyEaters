import React from "react";
import { useDispatch } from "react-redux";
import { deleteFoodPost } from "../../actions/foodPost";
import "./FoodCard.scss";

const FoodCard = (props) => {
    const dispatch = useDispatch();

    function handleDelete(e) {
        e.preventDefault();
        dispatch(deleteFoodPost(props.id));
    }

    function handleUpdate(){
        const obj ={ 
            id: props.id,
            name: props.name,
            price: props.price,
            tags: props.tags,
            image: props.image,
         };
        console.log(obj);
        props.updateValues(obj);
    }
    return (
        <div className="food-card">
            <img src={props.image} />
            <div className="details">
                <p>Name: {props.name}</p>
                <p>Price: {props.price}</p>
                <p>Tags: {props.tags[0]}</p>
                <button onClick={handleDelete} >delete</button>
                <button onClick={handleUpdate} >update</button>
            </div>

        </div>
    );
};

export default FoodCard;
