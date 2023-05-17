import React ,{useState} from 'react';


const ChildComponent=({handleClick}) => {
  return <button onClick={handleClick} className="increment-btn">Increment</button>;
}
export default ChildComponent;
