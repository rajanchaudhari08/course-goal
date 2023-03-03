import "./CourseGoalItem.css";

const CourseGoalItem = (properties) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    properties.onDelete(properties.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {properties.children}
    </li>
  );
};

export default CourseGoalItem;
