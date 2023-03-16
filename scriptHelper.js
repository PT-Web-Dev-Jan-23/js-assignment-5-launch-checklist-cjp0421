// Write your helper functions here!
// require('isomorphic-fetch');

onload = (event) => {

function validateInput(testInput) {
    if(testInput.value===""){
        console.log("Empty")
        return 'Empty'
    }  
    if(isNaN(testInput.value)){
        console.log(testInput.value + "NaN")
        return "Not a number"
    }
    if(!isNaN(testInput.value)){
        console.log(testInput.value + "Num")
        return "Number"
    }
}

function formSubmission(pilotName,copilotName, fuelLevel, cargoMass){

    alert("You submitted the form.")
    
let validatedPilot = validateInput(pilotName);
let validatedCopilot = validateInput(copilotName);
let validatedFuel = validateInput(fuelLevel);
let validatedCargo = validateInput(cargoMass);

if(validatedPilot === "Number"){
    alert ('You need to enter a name for pilot name!')
}
if(validatedCopilot === "Number"){
    alert ('You need to enter a name for copilot name!')
}
if(validatedFuel === "Not a number"){
    alert ('You need to enter a number for fuel level!')
}
if(validatedCargo === "Not a number"){
    alert ('You need to enter a number for cargo mass!')
}   
if(validatedPilot === "Empty"|| validatedCopilot=== "Empty"|| validatedFuel === "Empty"|| validatedCargo === "Empty"){
    alert("All fields are required.")
}


if(validatedPilot === "Not a number"&&validatedCopilot ==="Not a number"&&validatedFuel==="Number"&&validatedCargo==="Number"){
    alert("Info is validated.")
    let statusUpdateDiv = document.getElementById("faultyItems")
    let pilotStatusUpdate = document.getElementById("pilotStatus");
    let copilotStatusUpdate = document.getElementById("copilotStatus");
    let fuelStatusUpdate = document.getElementById("fuelStatus");
    let cargoStatusUpdate = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    statusUpdateDiv.style.visibility = "visible";
    pilotStatusUpdate.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
    copilotStatusUpdate.innerHTML = `Co-pilot ${copilotName.value} is ready for launch.`;
    
    let shuttleStatus = false;

    if(fuelLevel.value < 10000){
        fuelStatusUpdate.innerHTML = `Fuel level is too low to launch shuttle.`;
        console.log(fuelLevel.value);
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch"
    }
    
    // if(fuelLevel.value > 10000){
    //     fuelStatusUpdate.innerHTML = `Fuel level is sufficient to launch shuttle.`;
    //     console.log(fuelLevel.value);
    // }
    
    if(cargoMass.value > 10000){
        cargoStatusUpdate.innerHTML = `Cargo mass too heavy to launch shuttle.`;
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch"
    }
    
    if(fuelLevel.value > 10000 && cargoMass.value < 10000){
        launchStatus.innerHTML = "Shuttle is ready for launch"
        launchStatus.style.color = "green";
        shuttleStatus = true;
     }

    }
}



let submittedForm = document.getElementById("formSubmit");
submittedForm.addEventListener("click", function(event){
    event.preventDefault();
    
    let pilot = document.querySelector("input[name=pilotName]"); 
    let copilot = document.querySelector("input[name=copilotName]");
    let fuel = document.querySelector("input[name=fuelLevel]");
    let cargo = document.querySelector("input[name=cargoMass]");
    
      
    
        alert("You clicked the button!")
       
        formSubmission(pilot, copilot,fuel,cargo);
        return true
    
    
})

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionDestinationTarget = document.getElementById("missionTarget");
   
    missionDestinationTarget.innerHTML =
    // Here is the HTML formatting for our mission target div.
   `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`
}



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

}



// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
