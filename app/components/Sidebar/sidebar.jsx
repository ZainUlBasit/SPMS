// Sidebar.js

import React from 'react';


const Sidebar = () => {
  // Replace these placeholder items with your actual menu items
  const menuItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

  return (
    <div className="w-">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
