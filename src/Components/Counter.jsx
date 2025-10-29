import { useEffect, useState } from "react";
import { animate, easeIn } from "framer-motion"

const Counter = ({ target }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const controls = animate(0, target, {
            duration: 2,
            ease: easeIn,
            onUpdate: (v) => setValue(Math.floor(v))
        });

        return () => controls.stop();
    }, [target])
    return (
        <p>
            {value}%
        </p>
    );
};

export default Counter;