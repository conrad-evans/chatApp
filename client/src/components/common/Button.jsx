function Button({ styleClass, buttonText, onButtonClick }) {
  return (
    <button className={styleClass} onClick={onButtonClick}>
      {buttonText}
    </button>
  );
}

export default Button;
