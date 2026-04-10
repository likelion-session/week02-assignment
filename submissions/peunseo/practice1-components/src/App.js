import './App.css';
import Welcome from './components/Welcome';
import Button from './components/Button';

function App() {
  const handleClick = () => {
      alert('😏');
  };

  return (
    <div className="App">
      <Welcome name="나의 그리운 그" />
      <Welcome name="어디서 뭐하" />
      <Welcome name="보고 싶" />
      
      <Button text="민감한 부위" onClick={handleClick} />
    </div>
  );
}

export default App;