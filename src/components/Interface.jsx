

export default function Interface({ current, onValueChange, clearCalculator }) {
    return (
        <div className="all">
            <p>{current}</p>
            <div className="interface">
            
            <div className="numbers">
                <button onClick={() => onValueChange('1')}> 1 </button>
                <button onClick={() => onValueChange('2')}> 2 </button>
                <button onClick={() => onValueChange('3')}> 3 </button>
                <br />
                <button onClick={() => onValueChange('4')}> 4 </button>
                <button onClick={() => onValueChange('5')}> 5 </button>
                <button onClick={() => onValueChange('6')}> 6 </button>
                <br />
                <button onClick={() => onValueChange('7')}> 7 </button>
                <button onClick={() => onValueChange('8')}> 8 </button>
                <button onClick={() => onValueChange('9')}> 9 </button>
                <br />
                <button onClick={() => onValueChange('0')}> 0 </button>
            </div>
            <div className="operators">
                <button onClick={() => onValueChange('=')}> = </button>
                <br />
                <button onClick={() => onValueChange('+')}> + </button>
                <br />
                <button onClick={() => onValueChange('-')}> - </button>
                <br />
                <button onClick={() => onValueChange('*')}> * </button>
                <br />
                <button onClick={() => onValueChange('/')}> / </button>
                <br />
                <button onClick={() => clearCalculator()}> Clear </button>
            </div>
        </div>
        </div>
        
    );
}
