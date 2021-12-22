import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter/Counter';
import Team from "./Component/Crew/Crew";
import NewEmployee from "./Component/NewEmployee/NewEmployee";

function App() {
  return (
    <div className="App">
     <Counter/>
     <Team/>
     <NewEmployee/>
    </div>
  );
}

export default App;
