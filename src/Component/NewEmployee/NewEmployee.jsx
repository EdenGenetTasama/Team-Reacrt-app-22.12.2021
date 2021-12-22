import React, { useState } from "react";

function NewEmployee() {
  let [fName, setFName] = useState(" ");
  let [lName, setLName] = useState("");
  let [birthYear, setBirthYear] = useState("");
  let [city, setCity] = useState("");
  let [gender, setGender] = useState("");
  let [ifPass, setIfPass] = useState("");
  let [array, arrayOfUser] = useState([]);

  function getNameForm(event) {
    fName = event.target.value;
  }

  function getLNameForm(event) {
    lName = event.target.value;
  }
  function getYearForm(event) {
    birthYear = event.target.value;
  }
  function getCityForm(event) {
    city = event.target.value;
  }
  function getGenderForm(event) {
    gender = event.target.value;
  }

  function getIfPassForm(event) {
    ifPass = event.target.value;
  }

  function buttonOnClick(e) {
    e.preventDefault();
    setFName(fName);
    setLName(lName);
    setBirthYear(birthYear);
    setCity(city);
    setGender(gender);
    setIfPass(ifPass);

    array.push({
      name: lName,
      lastName: lName,
      year: birthYear,
      city: city,
      gender: gender,
      ifPass: ifPass,
    });
  }

  return (
    <div>
      <form>
        <h1>Form</h1>
        <label>Enter Name: </label>
        <input type="text" onChange={getNameForm} />
        <br />

        <label>Enter Last Name: </label>
        <input type="text" onChange={getLNameForm} />
        <br />

        <label>Enter Year Of Birth: </label>
        <input type="number" onChange={getYearForm} />
        <br />

        <label>Enter City: </label>
        <input type="text" onChange={getCityForm} />
        <br />

        <label>Enter Gender: </label>
        <input onChange={getGenderForm} />
        <br />

        <label>Is pass Course: </label>
        <input onChange={getIfPassForm} />
        <br />

        <button onClick={buttonOnClick}>Send</button>
      </form>

      <div>
        {array.map((ele) => (
          <p>
            name: {ele.name}, LastName: {ele.lastName}, year Of birth:
            {ele.year}, city: {ele.city}, Gender: {ele.gender}, If Pass Test:
            {ele.ifPass}.
          </p>
        ))}
      </div>
      <div>
        {array.map((ele) => {
            <table>
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Year</th>
                <th>City</th>
                <th>Gender</th>
                <th>Is Pass?</th>
              </tr>
              <tr>
                <tr>{ele.name}</tr>
                <tr>{ele.lastName}</tr>
                <tr>{ele.year}</tr>
                <tr>{ele.city}</tr>
                <tr>{ele.gender}</tr>
                <tr>{ele.ifPass}</tr>
              </tr>
            </table>
        })}
      </div>
    </div>
  );
}

export default NewEmployee;
