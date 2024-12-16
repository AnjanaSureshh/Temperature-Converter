import React, { useState } from "react";
import './App.css'
function App() {
  const [temperature, setTemperature] = useState(""); 
  const [unit, setUnit] = useState("Celsius"); 
  const [convertedTemp, setConvertedTemp] = useState(""); 

 
  const handleConversion = (temp, unit) => {
    if (unit === "Celsius") {
      return ((temp * 9) / 5 + 32).toFixed(2); // Celsius to Fahrenheit
    } else {
      return (((temp - 32) * 5) / 9).toFixed(2); // Fahrenheit to Celsius
    }
  };


  const handleInputChange = (e) => {
    const value = e.target.value;
    setTemperature(value);

    if (!isNaN(value) && value !== "") {
      const converted = handleConversion(parseFloat(value), unit);
      setConvertedTemp(converted);
    } else {
      setConvertedTemp("");
    }
  };

 
  const handleUnitChange = (e) => {
    const newUnit = e.target.value;
    setUnit(newUnit);

    if (temperature !== "" && !isNaN(temperature)) {
      const converted = handleConversion(parseFloat(temperature), newUnit);
      setConvertedTemp(converted);
    }
  };

  
  const handleClear = () => {
    setTemperature("");
    setConvertedTemp("");
    setUnit("Celsius");
  };

  return (
    <div style={styles.container}>
      <h1>Temperature Converter</h1>
      <div style={styles.inputGroup}>
        <input
          type="text"
          value={temperature}
          onChange={handleInputChange}
          placeholder="Enter temperature"
          style={styles.input}
        />
        <select value={unit} onChange={handleUnitChange} style={styles.dropdown}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
      </div>
      <h2>
        {convertedTemp && (
          <span>
            Converted Temperature: {convertedTemp} °{unit === "Celsius" ? "F" : "C"}
          </span>
        )}
      </h2>
      <button onClick={handleClear} style={styles.clearButton}>
        Clear
      </button>
    </div>
  );
}


const styles = {
  
  container: {
    textAlign: "center",
    padding: "100px",
    fontFamily: "Arial, sans-serif",
  },
  inputGroup: {
    margin: "20px 0",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "200px",
    marginRight: "10px",
  },
  dropdown: {
    padding: "10px",
    fontSize: "16px",
  },
  clearButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
