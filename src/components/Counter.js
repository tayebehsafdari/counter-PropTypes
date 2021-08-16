import React, {useState} from "react";
import PropTypes from "prop-types";

const Counter = React.memo(function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    /* static defaultProps = {
        name: 'Counter'
    }; */
    return (
        <div className="input-group my-5">
            <span className="input-group-text" onClick={() => setCount(initialCount)}>Reset</span>
            <span className="input-group-text" onClick={() => setCount(count - 1)}>-</span>
            <input type="text" className="form-control" value={count}
                   onChange={(e) => setCount(e.target.value)}/>
            <span className="input-group-text" onClick={() => setCount(count + 1)}>+</span>
        </div>
    );
});

Counter.propTypes = {
    initialCount: PropTypes.number.isRequired
};

Counter.defaultProps = {
    name: 'Counter'
};

export default Counter;