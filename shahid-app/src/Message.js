import React, { memo }  from "react";

function Message()
{
    console.log("Message")
    return(
        <>
        <h1></h1>
        </>
    )
}

export default memo(Message);