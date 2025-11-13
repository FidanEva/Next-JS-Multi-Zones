"use client";
export default function Page() {
  const handleSet = () => {
    localStorage.setItem("test", "worked");
    console.log(localStorage.getItem("test"));
  };
  return (
    <>
      <h1>main-app running on port 3000</h1>
      <button onClick={handleSet}>set to local storage</button>
    </>
  );
}
