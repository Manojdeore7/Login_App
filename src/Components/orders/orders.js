import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
const Arr = JSON.parse(localStorage.getItem("data")) || [];
function Orders(props, ref) {
  const [data, setData] = useState(Arr);
  useImperativeHandle(ref, () => {
    return {
      fun: () => {
        setData(JSON.parse(localStorage.getItem("data")));
      },
    };
  });

  let Table1 = data.filter((e) => {
    return e.tableNO === "table-1";
  });

  let Table2 = data.filter((e) => {
    return e.tableNO === "table-2";
  });
  let Table3 = data.filter((e) => {
    return e.tableNO === "table-3";
  });

  function DelteD(el) {
    let initial = JSON.parse(localStorage.getItem("data")) || [];
    let ar = initial.filter((e) => {
      return e.id !== el.target.value;
    });
    localStorage.setItem("data", JSON.stringify(ar));
    setData(ar);
  }
  return (
    <div>
      <div>
        <h2>Table 1</h2>
        <ul>
          {Table1.map((e) => {
            return (
              <li>
                {`${e.id}-${e.price}-${e.dishType}`}
                <button onClick={DelteD} value={e.id}>
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
                {`${e.id}-${e.price}-${e.dishType}`}{" "}
                <button onClick={DelteD} value={e.id}>
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
                {`${e.id}-${e.price}-${e.dishType}`}{" "}
                <button onClick={DelteD} value={e.id}>
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

export default forwardRef(Orders);
