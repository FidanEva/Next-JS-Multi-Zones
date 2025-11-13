"use client"
import { useState } from "react";

export function ClientComponent() {
  const [item, setItem] = useState<string>("");
  
  const handleGet = () => {
    const test = localStorage.getItem("test");
    console.log(test);
    setItem(test || ""); // Actually set the state!
  };
  
  return (
    <>
      <button onClick={handleGet}>get from storage</button>
      {item && <p>{item}</p>}
    </>
  );
}