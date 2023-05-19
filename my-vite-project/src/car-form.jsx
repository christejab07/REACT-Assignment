import React, { useState } from 'react';
import './car-form.css'
//import Datepicker from 'react-datepicker'
export default function CarForm() {
     const [carIndustry, setcarIndustry] = useState("");
     const [carModel, setcarModel] = useState("");
     const [date, setdate] = useState(new Date());
     const [mileage, setmileage] = useState(0);
     const [condition, setcondition] = useState("");
     const [features, setFeatures] = useState("");
     const [priceRange, setpriceRange] = useState(new Range());
     const [transmission, setTransmission] = useState("");
     const [phoneNumber, setPhoneNumber] = useState("")

     function handleFormSubmit(event) {
          event.preventDefault();
          const data = new FormData(event.target);
          setcarIndustry(data.get("carIndustry"));
     setcarModel(data.get("carModel"));
  setdate(data.get("date"));
  setmileage(data.get("mileage"));
  setcondition(data.get("condition"));
  setpriceRange(data.get("priceRange"));
  setTransmission(data.get("transmission"));
  setPhoneNumber(data.get("phoneOrEmail"));
  const featureNames = ["airConditioning", "powerSteering", "powerWindows", "abs", "navigationSystem"];
  const selectedFeatures = featureNames.filter(name => data.get(`features-${name}`) === "on");
  setFeatures(selectedFeatures);
  
  // Log contents of FormData object
  console.log('Form data:');
  for (const [key, value] of data.entries()) {
    console.log(key + ': ' + value);
  }
}
     return (
          <div className='container'>
               <h3>Car Sell App Form</h3>
               <form onSubmit={handleFormSubmit}>
                    <input required name="carIndustry" className="input" type="text" placeholder="Enter car industry" />
                    <br />
                    <input required name="carModel" className="input" type="text" placeholder="Enter car model" />
                    <br />
                    <input required type="date" className="input" name="date" />
                    <br />
                    <input required type="number" className="input" name="mileage" placeholder="Enter car mileage" />
                    <br />
                    <p>Condition:</p>
                    <div>
                         <input type="radio" name="condition" value="excellent" />Excellent
                         <br />
                         <input type="radio" name="condition" value="good" />Good
                         <br />
                         <input type="radio" name="condition" value="fair" />Fair
                         <br />
                         <input type="radio" name="condition" value="poor" />Poor
                         <br />
                    </div>
                    <p>Features:</p>
                    <div>
                         <input type="checkbox" name="features-airConditioning" value="airConditioning" />Air Conditioning
                         <br />
                         <input type="checkbox" name="features-powerSteering" value="powerSteering" />Power Steering
                         <br />
                         <input type="checkbox" name="features-powerWindows" value="powerWindows" />Power Windows
                         <br />
                         <input type="checkbox" name="features-abs" value="abs" />ABS
                         <br />
                         <input type="checkbox" name="features-navigationSystem" value="navigationSystem" />Navigation System
                         <br />
                         {/**Air Conditioning, Power Steering, Power Windows, ABS, Navigation System */}
                    </div>
                    Transmission:
                    <select required name="transmission">
                         <option value="automatic">Automatic</option>
                         <option value="manual">Manual</option>
                    </select>
                    <br />
                    Price Range:
                    <input type="range" min="1000" max="20000" step="1" name="priceRange" />
                    <br />
                    <input type="text" className="input" placeholder="Enter your phone or email address" required name="phoneOrEmail" />
                    <button type="submit" title='register'>Submit</button>
               </form>
          </div>
     )
}