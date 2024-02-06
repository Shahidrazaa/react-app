import React, { memo, useMemo, useState } from "react";
import Message from "./Message";

function Service()
{
    const [count,setCount] = useState(0);

    const [num,setNum] = useState([]);

   
    const counterchange = () =>
    {
        let countVal = count;
        countVal = countVal +1;
        setCount(countVal++);

    }
    console.log("mata")
    return(
        <>
         <h1>Count : {count}</h1>
         <button onClick={() => counterchange ()}>Counter</button>
         
        </>
    )
}

export default Service;