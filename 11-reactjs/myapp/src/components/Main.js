// import { useState } from 'react';
import '../App.css';
// import Timer from './Timer';
// import DisplayList from './DisplayList';
// import Task from './Task';
// import TaskDisplay from './TaskDisplay';
import InventoryTracker from './InventoryTracker';

const Main = () => {
  // const [taskLog, setTaskLog] = useState([]);
  // const addTaskLog = log => {
  //   let logs = [...taskLog, log];
  //   setTaskLog(logs);
  // };

  return (
    <main>
      {/* <Timer /> */}
      {/* <DisplayList /> */}
      {/* <Task addTaskLog={addTaskLog} /> */}
      {/* <TaskDisplay taskLog={taskLog} /> */}

      <InventoryTracker />
    </main>
  );
};

export default Main;
