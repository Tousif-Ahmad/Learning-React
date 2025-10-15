import React from "react";
import "./App.css";
import Card from "./components/Card";
// function square(desc1, desc2){
//   return (
//     <div className='square'>
//       <h1>{desc1}</h1>
//       <h2>{desc2}</h2>
//     </div>
//   )
// }

// function Square({desc1, desc2}){
//   return (
//     <div className='square'>
//       <h1>{desc1}</h1>
//       <h2>{desc2}</h2>
//     </div>
//   )
// }
const App = () => {
  return (
    <>
      {/* <h1>Hello React pe React</h1> */}
      {/* ye function wala method he  */}
      {/* {square("Hello", "world")} */}

      {/* ye component wala method he  */}
      {/* <Square desc1="Hello" desc2="world"/> */}

      <div className="flex">
        <Card title="card1" desc="hksdjfhsdkjfhskdj"/>
        <Card title="card 2" desc="dhjkashdaksjfhsdfhuisdf"/>
        <Card title="card 3" desc="hskjfhiuefhiufs"/>
        <Card title="card 4" desc="tyeruithudfjghdfjkg"/>
      </div>


    </>
  );
};

export default App;
