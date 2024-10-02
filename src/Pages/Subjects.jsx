import React, { useState } from 'react';
import { StepA } from './StepA';
import { StepB } from './StepB';
import { StepC } from './StepC';


const Subjects = () => {
    const [type,setType]=useState(1)  

  switch (type) {
    case 1:
      return <StepA setType={setType} type={type} />;
      case 2:
        return <StepB setType={setType} type={type} />;
      case 3:
        return <StepC setType={setType} type={type} />;
    default:
      return <div>No Component Found</div>; 
  }
}

export default Subjects;

