import React, { useState } from 'react';

const Task = ({ addTaskLog }) => {
  const [taskDesc, setTaskDesc] = useState();
  const [taskUser, setTaskUser] = useState();
  const [taskDate, setTaskDate] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    addTaskLog([taskDesc, taskUser, taskDate]);
  };

  return (
    <div>
      <form action="" onSubmit={e => handleSubmit(e)}>
        <label htmlFor="">Task Description</label>
        <input
          type="text"
          value={taskDesc}
          onChange={e => setTaskDesc(e.target.value)}
        />

        <label htmlFor="">Assignment to:</label>
        <input
          type="text"
          value={taskUser}
          onChange={e => {
            setTaskUser(e.target.value);
          }}
        />

        <label htmlFor="">Date</label>
        <input
          type="date"
          value={taskDate}
          onChange={e => {
            setTaskDate(e.target.value);
          }}
        />

        <input type="submit" value="Add Task" />
      </form>
    </div>
  );
};

export default Task;
