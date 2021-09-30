import Icon from "./common/Icon";

import sprites from "../svgs/symbol-defs.svg";
import { useState } from "react";

function Header() {
  const [toggleModal, setToggleModal] = useState(true);

  const showModal = () => {
    setToggleModal(true);
  };

  const closeModal = () => {
    setToggleModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header className="header">
        <Icon styleClass="logo-icon" iconUrl={`${sprites}#icon-chatApp`} />
        <h1 className="heading-one">Chattie</h1>
        <Icon
          handleIconClick={showModal}
          styleClass="icon"
          iconUrl={`${sprites}#icon-addContact`}
        />
        <Icon styleClass="icon" iconUrl={`${sprites}#icon-settings`} />
      </header>
      {toggleModal && (
        <div className="modal">
          <form className="modal-content" onSubmit={handleSubmit}>
            <input type="text" placeholder="email@gmail.com" />
            <button onClick={closeModal} type="submit">
              Add Contact
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Header;
