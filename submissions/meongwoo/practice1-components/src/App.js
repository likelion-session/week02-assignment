import React from "react";

function Welcome({ name = "Guest" }) {
  return <h2>{name} ㅎㅇ</h2>;
}

function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

function App() {
  const handleClick = () => {
    alert("!");
  };

  return (
    <div>
      <Welcome name="성우" />
      <Welcome name="수빈" />
      <Welcome name="석현" />

      <Button text="클릭" onClick={handleClick} />
    </div>
  );
}

export default App;