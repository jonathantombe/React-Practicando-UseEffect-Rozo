import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        document.title = `Clicks's Number: ${count}`;
    }, [count]);

    return (
        <>
            <div>
                <h1>Clicks's Number: {count}</h1>
                <button onClick={incrementCount}>Click me!</button>
            </div>
        </>
    );
};

export default Counter;
