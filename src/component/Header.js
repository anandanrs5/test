import React from "react";

const Header = () => {

  return (
    <div>
      <div>
        <ul
          style={{ display: "flex", listStyleType: "none", margin: '20px' }}>
          <li
            style={{ margin: '20px' }}
          >Home</li>
          <li style={{ margin: '20px' }} >Project</li>
          <li style={{ margin: '20px' }} >Contact</li>
          <li style={{ margin: '20px' }} >About</li>
          <li style={{ margin: '20px' }} >Profile</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

