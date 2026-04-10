import Welcome from "./Welcome";
import Button from "./Button";

function App() {
   const handleOnClick= () => {
    alert("클릭");
   }


    return (
        <div>
            <Welcome name="김석현" />
            <Welcome name="이상민" />
            <Welcome name="신한목" />
            <Button text="버튼" onClick={handleOnClick} /> 
        </div>
    );
}
export default App;