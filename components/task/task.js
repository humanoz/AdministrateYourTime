import {useEffect, useState} from 'react';

const Task = () => {
  const [ taskInfo, setTaskInfo ] = useState('');
  
  useEffect(() => {
    const info = JSON.parse(localStorage.getItem('tasklist'));
    setTaskInfo(info);
    console.log(taskInfo);
  }, []);

  return(
    <div></div>
  );
}

export default Task;
