import React, { useState, forwardRef, useRef } from "react";

function Form(props, ref) {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [dishType, setDishType] = useState();
  const [tableNO, setTableNo] = useState("table-1");

  function onIdHnadler(e) {
    setId(e.target.value);
  }
  function onDishHnadler(e) {
    setDishType(e.target.value);
  }
  function onPriceHnadler(e) {
    setPrice(e.target.value);
  }
  function onTableHnadler(e) {
    setTableNo(e.target.value);
  }
  function onSubmitHandler(ex) {
    ex.preventDefault();
    let obj = {
      id: id,
      price: price,
      dishType: dishType,
      tableNO: tableNO,
    };
    let Arr = JSON.parse(localStorage.getItem("data")) || [];
    Arr.push(obj);
    localStorage.setItem("data", JSON.stringify(Arr));
    ref.current.fun();
    setId("");
    setDishType("");
    setTableNo("table-1");
    setPrice("");
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <label>Unique Order Id</label>
      <input type="number" onChange={onIdHnadler} value={id} />
      <label>Choose Price</label>
      <input type="number" onChange={onPriceHnadler} value={price} />
      <label>Choose Dish</label>
      <input type="text" onChange={onDishHnadler} value={dishType} />
      <label>Choose A Table</label>
      <select onChange={onTableHnadler} value={tableNO}>
        <option value="table-1">Table 1</option>
        <option value="table-2">Table 2</option>
        <option value="table-3">Table 3</option>
      </select>
      <button tyep="submit">Add Bill</button>
    </form>
  );
}
export default forwardRef(Form);
