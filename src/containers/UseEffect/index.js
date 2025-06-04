import { useEffect, useState } from "react";


const UseEffect = () => {
    const [counter, setCounter] = useState (0);
    
    useEffect( () => {
        document.title=`clicked ${counter} time`
    }, [counter]);

    return (
        <div>
            <h1>UseEffect</h1>

            <h2>Counter: {counter}</h2>
            <button onClick={()=>setCounter(counter + 1)}>dfdfdf</button>
        </div>
    )
}

export default UseEffect;