import Icon from "./common/Icon";

import sprites from "../svgs/symbol-defs.svg";
import { useState } from "react";
import { saveContact } from "../store/reducers/contacts";
import { useDispatch } from 'react-redux';

function Header() {
  const [toggleModal, setToggleModal] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useDispatch()

  // function validateEmail(email) {
  //   const re =
  //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // }

  const showModal = () => {
    setToggleModal(true);
  };

  const closeModal = () => {
    setToggleModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(saveContact(value));
      setValue("");
    }
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
            <Icon
              handleIconClick={closeModal}
              styleClass="close-btn logo-icon"
              iconUrl={`${sprites}#icon-settings`}
            />
            <input
              type="text"
              placeholder="email@gmail.com"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">Add Contact</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Header;
