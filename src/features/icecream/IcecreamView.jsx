import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

function IcecreamView() {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  const [value, setValue] = useState(1);

  function handleRestock (event) {
    setValue(parseInt(event.target.value))
  }

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of icecream - {numOfIcecream} </h2>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>

      <input type= 'number' value={value} onChange={handleRestock} />
      <button onClick={() => dispatch(restocked(value))}>restock Icecream</button>
    </div>
  );
}

export default IcecreamView;
