// const { formSubmission } = require("./scriptHelper");
// const { addDestinationInfo } = require("./scriptHelper");
// STOP IT VSCODE YOU KEEP MAKING ME THINK I BROKE IT 

// Write your JavaScript code here!
window.addEventListener("load", function() {
  
    //  get form
    const form = document.querySelector("form");

    // add event listener for submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        

    });





    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        selectPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(
            document,
            selectPlanet["name"],
            selectPlanet["diameter"],
            selectPlanet["star"],
            selectPlanet["distance"],
            selectPlanet["moons"],
            selectPlanet["image"]
        );
    });
    
});