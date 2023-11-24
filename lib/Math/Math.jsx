import "./Math.css";
import "//unpkg.com/mathlive";
import { useState, useEffect, useRef } from "react";

export function Math({ formula }) {
    const [value, setValue] = useState(formula);

    return (
        <div className="Math__Wrapper">
            <math-field
                readonly
                className="Math__Field"
                onInput={evt => setValue(evt.target.value)}
            >
                {value}
            </math-field>
        </div>
    );
}
