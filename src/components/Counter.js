import {useState} from 'react'

function Counter({className, ...props}) {
  const [counter, setCounter] = useState(0);
  const classes = ["btn", className].join(" ");

  return (
    <div id="counter">
      <h3 className="counted">{counter}</h3>
      {counter % 2 === 0 ? <h5>Even number</h5> : <h5>Odd number</h5>}
      <button className={classes}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase Counter
      </button>
      <button className="btn"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrease Counter
      </button>
    </div>
  );
}

export default Counter;