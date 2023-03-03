import { useState } from "react";
import Button from "../../UI/Button";
import "./CourseInput.css";

const CourseInput = (properties) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setInputValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim().length === 0) {
      // console.log("string.length is empty");
      setIsValid(false);
      return;
    }
    properties.onAddGoal(inputValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Set Course Goal</label>
        <input
        /* Conditional Inline CSS */
          // style={{ borderColor: !isValid ? "red" : "grey" }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Submit Goal</Button>
    </form>
  );
};

export default CourseInput;
