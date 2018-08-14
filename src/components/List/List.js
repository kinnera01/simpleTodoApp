import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
   <div >
      <ul className="todoitem" >
       <span> {children}</span>

      </ul>
    </div>
  );
};