import React, { useState } from 'react';
import Interface from './Interface';

export default function Calculator() {
    const [number, setNumber] = useState("");
    const [calculations, setCalculations] = useState([]);

    const updateDisplay = (input) => {
        if (input === '=') {
            try {
                const result = eval(calculations.join(''));
                setNumber(result);
                setCalculations([result]);
            } catch (error) {
                setNumber("Error");
            }
        } else {
            const newCalculations = [...calculations, input];
            setCalculations(newCalculations);
            setNumber(newCalculations.join(''));
        }
    };

    const clearCalculator = () => {
        setCalculations([]);
        setNumber("");
    };

    return (
        <div className="calculator">
            <Interface
                current={number}
                onValueChange={updateDisplay}
                clearCalculator={clearCalculator}
            />
        </div>
    );
}
