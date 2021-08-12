import React from 'react';

const TaskDisplay = props => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Task Description</th>
            <th>Name</th>
            <th>Task Date</th>
          </tr>
        </thead>
        <tbody>
          {props.taskLog.map(item => (
            <tr>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskDisplay;
