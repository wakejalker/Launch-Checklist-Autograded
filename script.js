// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

    window.addEventListener("load", function() {
    //  get form
    const form = document.querySelector("form");

    // add event listener for submission
    form.addEventListener('submit', function(event) {
        let pilot = this.document.getElementsByName("pilotName")[0].value;
        let copilot = this.document.getElementsByName("copilotName")[0].    value;
        let fuelLevel = this.document.getElementsByName("fuelLevel")[0].value;
        let cargoLevel = this.document.getElementsByName("cargoMass")[0].value;
        let list = this.document.getElementsById("faultyItems");


        if (
        !formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
        ) {
            this.event.preventDefault();
        }

    });





    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });