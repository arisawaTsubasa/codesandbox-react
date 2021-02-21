import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">未完了のTODO</p>
      {todos.map((todo, index) => {
        return (
          <ul>
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </ul>
        );
      })}
    </div>
  );
};
