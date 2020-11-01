import { Fragment } from "react";

function App() {
  let name = "test";
  
  return (
    <Fragment>
      {name === 'jisang' ? (<h1>{name} 안녕하세요1</h1>) : (<h1>안녕하세요2</h1>)}
    </Fragment>
  );
}

export default App;
