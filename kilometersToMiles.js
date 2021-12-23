//Converting Kilometers to Miles

const distanceConverter = (kilometers) => {
    // convert kilometers to miles 
    let miles = kilometers *0.6213;
    // round down for a clean number and add units
    return `${Math.floor(miles)} miles`;
  }
  
  console.log(distanceConverter(100))