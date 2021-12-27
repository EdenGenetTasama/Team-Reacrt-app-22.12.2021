import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter/Counter';
import Team from "./Component/Crew/Crew";
import NewEmployee from "./Component/NewEmployee/NewEmployee";
import Cat from "./Component/Cat/Cat";

function App() {
  return (
    <div className="App">
     <Counter/>
     <Team/>
     <NewEmployee/>
     <Cat/>
    </div>
  );
}

export default App;
