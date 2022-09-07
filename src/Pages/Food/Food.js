import React, { useEffect, useState } from "react";
import FoodCard from "../../Components/FoodCard/FoodCard";
import FoodForm from "../../Components/FoodForm/FoodForm";
import { useDispatch, useSelector } from "react-redux";
import { getFoodPost } from "../../actions/foodPost";
import "./Food.scss";
import FoodDiv from "../../Components/FoodDiv/FoodDiv";

const Food = () => {
  const [formValues, setFormValues] = useState({
    id: "",
    name: "",
    price: "",
    tags: [],
    image: "",
  });

  const dispatch = useDispatch();
  function updateValues(obj) {
    setFormValues(obj);
  }
  const clearValues = () => {
    console.log("vlaue cleareed");
    setFormValues({ id: "", name: "", price: "", tags: [], image: "" });
  };
  useEffect(() => {
    //dispatch(getFoodPost());
    dispatch(getFoodPost());
  }, [dispatch]);
  return (
    <div className="food">
      <div className="form">
        <FoodForm values={formValues} clearValues={clearValues} />
      </div>
      <FoodDiv updateValues={updateValues} />
    </div>
  );
};

export default Food;
