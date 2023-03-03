import { useState } from "react";
import Button from "../../UI/Button";
import "./CourseInput.css";

const CourseInput = (properties) => {
  const [inputValue, setInputValue] = useState("");

  const goalInputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    properties.onAddGoal(inputValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Set Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Submit Goal</Button>
    </form>
  );
};

export default CourseInput;
