import React ,{useState} from 'react';
import ChildComponent from './ChildComponent';
export default function ParentComponent() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      console.log('Function ran in Child component');
      setCount(count + 1);
    }
  
    return (
      <div className="counter">
        <h2>Count is: {count}</h2>
  
        <ChildComponent handleClick={handleClick} />
      </div>
    );
  }