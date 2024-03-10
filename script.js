// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

    window.addEventListener("load", function() {
    //  get form
    const form = document.querySelector('form[data-testid="testForm"]');

    // add event listener for submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
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