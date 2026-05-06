import './App.css';
import { Welcome } from './Welcome';
import Button from './Button';

function App() {
  return (
    <div>
      <Welcome name="한목" />
      <Welcome name="상민" />
      <Welcome name="석현" />
      <Button />
    </div>
  );
}

export default App;