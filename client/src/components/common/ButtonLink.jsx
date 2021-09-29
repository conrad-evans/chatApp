function ButtonLink({ styleClass, buttonText, onButtonClick, linkTo }) {
  return (
    <a href={linkTo} className={styleClass} onClick={onButtonClick}>
      {buttonText}
    </a>
  );
}

export default ButtonLink;
