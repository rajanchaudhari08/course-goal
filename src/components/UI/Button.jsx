import "./Button.css";

const Button = (properties) => {
  return (
    <button type={properties.type} className="button" onClick={properties.onClick}>
      {properties.children}
    </button>
  );
};

export default Button;
