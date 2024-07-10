import React, { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleYearCahnge(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function handleMakeCahnge(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  function handleModelCahnge(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Your favorite car is {car.year} {car.make} {car.model}
      </p>

      <input type="number" value={car.year} onChange={handleYearCahnge} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeCahnge} />
      <br />
      <input type="text" value={car.model} onChange={handleModelCahnge} />
    </div>
  );
}
export default MyComponent;
