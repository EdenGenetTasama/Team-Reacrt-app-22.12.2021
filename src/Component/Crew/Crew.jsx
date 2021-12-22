import React, { useState } from "react";

function Team() {
  const [numberEmployee, setNumberEmployee] = useState(10);
  const [workDay, setWorkDay] = useState(300);
  const [hoursOfWork, setHoursOfWork] = useState(400);
  let [depName, setDepName] = useState("Name of Dep.");

  function upNumEmployee() {
    setNumberEmployee(numberEmployee + 1);
  }

  function downNumEmployee() {
    setNumberEmployee(numberEmployee - 1);
  }

  function resetNumEmployee() {
    setNumberEmployee(0);
  }

  function upWorkDay() {
    setWorkDay(workDay + 1);
  }

  function downWorkDay() {
    setWorkDay(workDay - 1);
  }

  function restWorkDay() {
    setWorkDay(0);
  }

  function upHoursOfWork() {
    setHoursOfWork(hoursOfWork + 1);
  }

  function downHoursOfWork() {
    setHoursOfWork(hoursOfWork - 1);
  }

  function restHoursOfWork() {
    setHoursOfWork(0);
  }

  function doubleDaysAndHours() {
    setHoursOfWork(workDay * hoursOfWork);
  }

  const inputValue = (event) => {
    setNumberEmployee(event.target.value);
  };

  const changeH1Value=(event)=>{
    depName= event.target.value;
  };

  function onClickRender(){
    setDepName(depName);
  }

  return (
    <div>
      <h1>{depName}</h1>
      <input type="text" onChange={changeH1Value} />
      <button onClick={onClickRender}></button>
      <p>Number of employees : {numberEmployee}</p>
      <button onClick={upNumEmployee} value={numberEmployee}>
        +
      </button>
      <button onClick={downNumEmployee}>-</button>
      <button onClick={resetNumEmployee}>0</button>
      <input type="number" onChange={inputValue} />

      <p>Numbers of work Days : {workDay}</p>
      <button onClick={upWorkDay} value={workDay}>
        +
      </button>
      <button onClick={downWorkDay}>-</button>
      <button onClick={restWorkDay}>0</button>

      <p>Numbers of hours per Day : {hoursOfWork}</p>
      <button onClick={upHoursOfWork} value={hoursOfWork}>
        +
      </button>
      <button onClick={downHoursOfWork}>-</button>
      <button onClick={restHoursOfWork}>0</button>
      <button onClick={doubleDaysAndHours}>Show Double</button>
    </div>
  );
}

export default Team;
