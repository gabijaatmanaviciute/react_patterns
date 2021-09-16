import React from 'react';
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import List from "./components/List";

function App() {
  const list = ["June", "July", "August"]

  return (
    <React.Fragment>
      <Greeting name="Carlos" className="afternoon" id="greeting" />
      <Counter className="btn-green"/>
      <List listItems={list}/>
    </React.Fragment>
  );
}

export default App;

// destructuring props
// JSX spread attributes ( spread syntax )

// Conditional rendering
// children types
// style component
// layout component
// controlled input
