import { useState } from "react";
import Button from "../../UI/Button";
// import "./CourseInput.css";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
  }
`;

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
      {/* <FormControl className={`form-control ${!isValid ? "invalid" : ""}`}> */}
      <FormControl className={!isValid && "invalid"}>
        <label>Set Course Goal</label>
        <input
          /* Conditional Inline CSS */
          // style={{ borderColor: !isValid ? "red" : "grey" }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Submit Goal</Button>
    </form>
  );
};

export default CourseInput;
