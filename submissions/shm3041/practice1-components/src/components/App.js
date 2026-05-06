import Button from "./Button";
import Welcome from "./Welcome";

function App() {
    const handleOnClick = () => {
    alert("onClick 이벤트 발생")
    }

    return (
        <div>
            <Welcome name="가씨"></Welcome>
            <Welcome name="나씨"></Welcome>
            <Welcome></Welcome>

            <Button text="버튼" onClick={handleOnClick}></Button>
        </div>
    );
}

export default App;