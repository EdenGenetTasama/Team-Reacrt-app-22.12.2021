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
      name: fName,
      lastName: lName,
      year: birthYear,
      city: city,
      gender: gender,
      ifPass: ifPass,
    });

    arrayOfUser(array)
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
        <table>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Year</th>
            <th>City</th>
            <th>Gender</th>
            <th>Is Pass?</th>
          </tr>
          {array.map((ele) => (
            <tr>
              <td>{ele.name}</td>
              <td>{ele.lastName}</td>
              <td>{ele.year}</td>
              <td>{ele.city}</td>
              <td>{ele.gender}</td>
              <td>{ele.ifPass}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default NewEmployee;
