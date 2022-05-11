import React from "react";

export const TaskCardDeleteButton = (props) => {
  const { taskCardsList, setTaskCardsList, taskCard } = props;
  const taskCardDeleteButton = (taskCardId) => {
    setTaskCardsList(
      taskCardsList.filter((taskCardList) => taskCardList.id !== taskCardId)
    );
  };

  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};
