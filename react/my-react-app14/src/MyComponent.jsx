import React, { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setYear] = useState(new Date().getFullYear());
  const [carMake, setMake] = useState("");
  const [carModel, setModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);

    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  }

  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => index !== i));
  }

  function handleYearChange(e) {
    setYear(e.target.value);
  }

  function handleMakeChange(e) {
    setMake(e.target.value);
  }

  function handleModelChange(e) {
    setModel(e.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>

      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}
export default MyComponent;
