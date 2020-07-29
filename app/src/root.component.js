import React, {useState, useEffect} from "react";
import Parcel from "single-spa-react/parcel";
import * as MyParcel from "@/parcel"

export default function Example(props) {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <div>{count}</div>
      <div>
        <Parcel config={MyParcel} count={count} />
      </div>
    </div>
  );
};
