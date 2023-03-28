import React, { useState } from "react";

function Form() {
  const [id, setId] = useState("0");
  const [price, setPrice] = useState("0");
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
    let obj = {
      key: id,
      price: price,
      dishType: dishType,
      tableNO: tableNO,
    };
    let Arr = JSON.parse(localStorage.getItem("data")) || [];
    Arr.push(obj);
    localStorage.setItem("data", JSON.stringify(Arr));

    setId("");
    setDishType("");
    setTableNo("");
    setPrice("");
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <label>Unique Order Id</label>
      <input type="number" onChange={onIdHnadler} />
      <label>Choose Price</label>
      <input type="number" onChange={onPriceHnadler} />
      <label>Choose Dish</label>
      <input type="text" onChange={onDishHnadler} />
      <label>Choose A Table</label>
      <select onChange={onTableHnadler}>
        <option value="table-1">Table 1</option>
        <option value="table-2">Table 2</option>
        <option value="table-3">Table 3</option>
      </select>
      <button tyep="submit">Add Bill</button>
    </form>
  );
}
export default Form;
