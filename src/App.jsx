import { useState } from "react";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Complete the course sections?", id: "c1" },
    { text: "Finish the course!!!", id: "c2" },
  ]);

  const addGoalHandler = (userInputText) => {
    setCourseGoals((previousGoals) => {
      const updatedGoals = [...previousGoals];
      updatedGoals.unshift({ text: userInputText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteCourseHandler = (goalId) => {
    setCourseGoals((previousGoals) => {
      const updatedGoals = previousGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteCourseHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteCourseHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
