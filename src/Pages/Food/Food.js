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

  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    dispatch(getFoodPost()).then(()=>{
      console.log();
    }).catch((error)=>{
      console.log(error);
    }).finally(()=>{
      console.log("Hello");
      setLoading(false);
    });
  }, [dispatch]);
  return (
    <div className="food">
      <div className="form">
        <FoodForm values={formValues} clearValues={clearValues} />
      </div>
      {loading? "Loading..." :  <FoodDiv updateValues={updateValues} />}
     
    </div>
  );
};

export default Food;
