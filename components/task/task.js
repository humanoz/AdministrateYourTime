import { useState } from 'react';

const Task = ( {data} ) => { 
    
    const click = () => {
        console.log(data);
    }
    return(
        <div>
            <button onClick={click}>click me</button>
            <section>
               
           </section>
        </div> 
    );
};


export default Task;

