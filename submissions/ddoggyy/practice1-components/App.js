import Welcome from "./Welcome";
import Button from "./Button";

function App(){
    return (
        <div>
            <Welcome name="이상민" />
            <Welcome name="신한목" />
            <Welcome name="김석현" />        
            <Button text="버튼" onClick="클릭했네요"/>
        </div>
    ); 
}

export default App