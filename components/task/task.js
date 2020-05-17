import {useEffect, useState, Fragment} from 'react';

const Task = () => {
  const [ taskInfo, setTaskInfo ] = useState([]);

  useEffect(() => {
    const requestData = () => {
        const URL = 'http://localhost:1337/tareas';
          fetch(URL)
            .then(response => response.json())
            .then(data => {
              setTaskInfo( prevState => prevState = data );
            });
    };

    requestData();

  }, []);
  
  return(
    <Fragment>
      {taskInfo.map( task => (
        <li key={task.id}>{task.nombre}</li>
      ))
      }
    </Fragment>
  );
}

export default Task;
