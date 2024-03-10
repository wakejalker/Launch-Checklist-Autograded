// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const allInput = document.getElementByTag('input');
    list = document.getElementByID('faultyItems');
    pilot = document.getElementByID('pilotName');
    copilot = document.getElementByID('copilotName');
    fuelLevel = document.querySelector('input[name===fuelLevel]');
    cargoLevel = document.querySelector('input[name=cargoMass]');

    if (validateInput(allInput) === 'Empty') {
        alert("All fields are required!")
        return false;
    } else if (validateInput(pilot) === "Is a Number") {
        alert("Please enter Pilot's name.");
        return false;
    } else if (validateInput(copilot) === "Is a Number") {
        alert("Please enter Copilot's name.");
        return false;
    } else if (validateInput(fuelLevel) === "Not a Number") {
        alert ("Please enter a number for the current Fuel Level");
        return false;
    } else if (validateInput(cargoLevel) === "Not a Number") {
        alert ("Please enter a number for the current Cargo Mass");
        return false;
    }





 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;