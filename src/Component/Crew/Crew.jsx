import React, { useState } from "react";

function Team() {
  const [numberEmployee, setNumberEmployee] = useState(10);
  const [workDay, setWorkDay] = useState(300);
  const [hoursOfWork, setHoursOfWork] = useState(400);

  function upNumEmployee() {
    setNumberEmployee(numberEmployee + 1);
  }

  function downNumEmployee() {
    setNumberEmployee(numberEmployee - 1);
  }

  function resetNumEmployee(){
      setNumberEmployee(0);
  }

  function upWorkDay(){
    setWorkDay(workDay+1);
  }

  function downWorkDay(){
      setWorkDay(workDay-1);
  }

  function restWorkDay(){
      setWorkDay(0);
  }


  function upHoursOfWork(){
    setHoursOfWork(hoursOfWork+1) ;
  }

  function downHoursOfWork(){
    setHoursOfWork(hoursOfWork-1);
  }

  function restHoursOfWork(){
    setHoursOfWork(0);

  }


  function doubleDaysAndHours(){
    setHoursOfWork(workDay * hoursOfWork)
  }

  const inputValue = (event)=>{setNumberEmployee(event.target.value);
  }





  return (
    <div>
        <input  onChange={inputValue}  />
      <p>Number of employees : {numberEmployee}</p>
      <button onClick={upNumEmployee} value={numberEmployee}>+</button>
      <button onClick={downNumEmployee}>-</button>
      <button onClick={resetNumEmployee}>0</button>


      <p>Numbers of work Days : {workDay}</p>
      <button onClick={upWorkDay} value={workDay}>+</button>
      <button onClick={downWorkDay}>-</button>
      <button onClick={restWorkDay}>0</button>

      <p>Numbers of hours per Day : {hoursOfWork}</p>
      <button onClick={upHoursOfWork} value={hoursOfWork}>+</button>
      <button onClick={downHoursOfWork}>-</button>
      <button onClick={restHoursOfWork}>0</button>
      <button onClick={doubleDaysAndHours}>Show Double</button>

    </div>
  );
}

export default Team;
