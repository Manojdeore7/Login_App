import { useState } from "react";

let Arr = JSON.parse(localStorage.getItem("data")) || [];

function Orders() {
  const [data, setData] = useState(Arr);

  let Table1 = data.filter((e) => {
    return e.tableNO === "table-1";
  });
  console.log(Table1);
  let Table2 = data.filter((e) => {
    return e.tableNO === "table-2";
  });
  let Table3 = data.filter((e) => {
    return e.tableNO === "table-3";
  });

  function DeleteDta(el) {
    let arr = Arr.filter((e) => {
      return e.id !== el.target.value;
    });
    setData(arr);
  }

  return (
    <div>
      <div>
        <h2>Table 1</h2>
        <ul>
          {Table1.map((e) => {
            return (
              <li>
                {`${e.price}-${e.tableNO}-${e.dishType}`}{" "}
                <button onClick={DeleteDta} value={e.id}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2>Table 2</h2>
        <ul>
          {Table2.map((e) => {
            return (
              <li>
                {`${e.price}-${e.tableNO}-${e.dishType}`}{" "}
                <button onClick={DeleteDta} value={e.id}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2>Table 3</h2>
        <ul>
          {Table3.map((e) => {
            return (
              <li>
                {`${e.price}-${e.tableNO}-${e.dishType}`}{" "}
                <button onClick={DeleteDta} value={e.id}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Orders;
