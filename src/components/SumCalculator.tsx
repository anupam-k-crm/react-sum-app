import React, { useState } from 'react';

const SumCalculator: React.FC = () => {
    const [NUM1, SET_NUM1] = useState<number>(0);
    const [NUM2, SET_NUM2] = useState<number>(0);
    const [RESULT, SET_RESULT] = useState<number | null>(null);

    const HANDLE_CALCULATE = () => {
        SET_RESULT(NUM1 + NUM2);
    };

    return (
        <div>
            <h1>Sum Calculator</h1>
            <input
                type="number"
                value={NUM1}
                onChange={(e) => SET_NUM1(Number(e.target.value))}
                placeholder="Enter first number"
            />
            <input
                type="number"
                value={NUM2}
                onChange={(e) => SET_NUM2(Number(e.target.value))}
                placeholder="Enter second number"
            />
            <button onClick={HANDLE_CALCULATE}>Calculate Sum</button>
            {RESULT !== null && <h2>Result: {RESULT}</h2>}
        </div>
    );
};

export default SumCalculator;