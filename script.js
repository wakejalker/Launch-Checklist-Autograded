// Write your JavaScript code here!

const { formSubmission, validateInput } = require("./scriptHelper");
    let document = this.document;
    window.addEventListener("load", function() {

    //  get form
    const form = document.querySelector("form");

    // add event listener for submission
    form.addEventListener('submit', function() {
        let pilot = this.document.querySelector("input[name=pilotName]");
        let copilot = this.document.querySelector("input[name=copilotName]");
        let fuelLevel = this.document.querySelector("input[name=fuelLevel]");
        let cargoLevel = this.document.querySelector("input[name=cargoMass]");
        let list = this.document.getElementById("faultyItems");

        if (
            validateInput(pilot.value) === "Empty" || 
            validateInput(copilot.value) === "Empty" ||
            validateInput(fuelLevel.value) === "Empty" ||
            validateInput(cargoLevel.value) === "Empty" 
        ) {
            launchStatus.style.color = "black";
            launchStatus.innerHTML = "Awaiting Information Before Launch";
            list.style.visibility = "hidden";
            this.event.preventDefault();
            alert("All fields are required.")
        } else if (
            validateInput(pilot.value) !== "Not a Number" || 
            validateInput(copilot.value) !== "Not a Number" ||
            validateInput(fuelLevel.value) !== "Is a Number" ||
            validateInput(cargoLevel.value) !== "Is a Number"
        ) {
            launchStatus.style.color = "black";
            launchStatus.innerHTML = "Awaiting Information Before Launch";
            list.style.visibility = "hidden";
            this.event.preventDefault();
            alert("Please enter valid information in each field.")
        } else {
            formSubmission(
                document,
                list,
                pilot.value,
                copilot.value,
                fuelLevel.value,
                cargoLevel.value
            );
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