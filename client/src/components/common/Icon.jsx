import React from "react";

function Icon({ styleClass, iconUrl, handleIconClick }) {
  return (
    <button onClick={handleIconClick} className="icon-btn">
      <svg className={styleClass}>
        <use xlinkHref={iconUrl} />
      </svg>
    </button>
  );
}

export default Icon;
