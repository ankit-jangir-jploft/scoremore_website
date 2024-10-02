import React, { useState } from 'react';
import { StepA } from './StepA';
import { StepC } from './StepC';
import Exammode from '../Components/Exammode';


const Exammodetest = () => {
    const [type,setType]=useState(1)  

  switch (type) {
    case 1:
      return <StepA setType={setType} type={type} />;
      case 2:
        return <Exammode setType={setType} type={type} />;
      case 3:
        return <StepC setType={setType} type={type} />;
    default:
      return <div>No Component Found</div>; 
  }
}


export default Exammodetest;