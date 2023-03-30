import React, { useState, useRef } from "react";
import Form from "./Components/form/form";
import Orders from "./Components/orders/orders";
function App() {
  let ref = useRef();
  return (
    <div>
      <Form ref={ref} />
      <Orders ref={ref} />
    </div>
  );
}
export default App;
