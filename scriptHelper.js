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
    let formReady = true; 
    if (validateInput(pilot) === "Empty" || 
        validateInput(copilot) === "Empty" || 
        validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoLevel) === "Empty") {
            alert("All fields are required!");
            return false;
        } else if (validateInput(pilot) === "Is a Number") {
            alert("Please enter Pilot's name.");
            return false;
        } else if (validateInput(copilot) === "Is a Number") {
            alert("Please enter Copilot's name.");
            return false;
        } else if (validateInput(fuelLevel) === "Not a Number") {
            alert("Please enter a number for the current Fuel Level");
            return false;
        } else if (validateInput(cargoLevel) === "Not a Number") {
            alert("Please enter a number for the current Cargo Mass");
            return false;
        }
     
        //faultyItems list visibility
        list.style.visibility = "visible";

        // status variables
        let pilotStatus = document.getElementbyId("pilotStatus");
        let copilotStatus = document.getElementbyId("copilotStatus");
        let launchStatus = document.getElementbyId("launchStatus");
        let fuelStatus = document.getElementbyId("fuelStatus");
        let cargoStatus = document.getElementbyId("cargoStatus");
    
        // faultyItems div ready for launch 
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilott ${copilot} is ready for launch`;

        // check fuel level and cargo level
        if (fuelLevel >= 10000 && cargoLevel <= 10000) {
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = 'green';
        } else {
            if (fuelLevel < 10000) {
                fuelStatus.innerHTML = "Fuel level too low for launch";
                launchStatus.innerHTML = "Shuttle not Ready for launch";
                launchStatus.style.color = "red";
                formReady = false;
            } 
            if (cargoLevel > 10000) {
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
                launchStatus.innerHTML = "Shuttle not Ready for launch";
                launchStatus.style.color = "red";
                formReady = false;
            }
        }
    return formReady;
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