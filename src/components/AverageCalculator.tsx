import React, { useState } from 'react';

const AverageCalculator: React.FC = () => {
    const [NUMBERS, SET_NUMBERS] = useState<string>('');
    const [AVERAGE, SET_AVERAGE] = useState<number | null>(null);

    const HANDLE_CALCULATE = () => {
        const NUMS = NUMBERS
            .split(',')
            .map(N => Number(N.trim()))
            .filter(N => !isNaN(N));
        if (NUMS.length === 0) {
            SET_AVERAGE(null);
            return;
        }
        const AVG = NUMS.reduce((ACC, CURR) => ACC + CURR, 0) / NUMS.length;
        SET_AVERAGE(AVG);
    };

    return (
        <div>
            <h1>Average Calculator</h1>
            <input
                type="text"
                value={NUMBERS}
                onChange={(e) => SET_NUMBERS(e.target.value)}
                placeholder="Enter numbers separated by commas"
            />
            <button onClick={HANDLE_CALCULATE}>Calculate Average</button>
            {AVERAGE !== null && <h2>Average: {AVERAGE}</h2>}
        </div>
    );
};

export default AverageCalculator;
