import React from "react";

const Social = ({ Data }) => {
  return (
    <div className="social_icons">
      {Data.map(({ plat, link }) => (
        <a href={link} title={plat} rel="noreferrer" target="_blank">
          <i className={`fa fa-${plat}`}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
