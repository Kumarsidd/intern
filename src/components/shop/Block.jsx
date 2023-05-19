import React from "react";

function Block(props) {
  return (
    <div className="block">
      <h3>{props.title}</h3>
      <ul>
        {props.list.map((item, index) => {
          return (
            <li className="item">
              <div>
                <input
                  type="checkbox"
                  id={props.type + index}
                  name="checkbox"
                  value="1"
                />
                <label for={props.type + index}>{item}</label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Block;
