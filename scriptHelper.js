// Write your helper functions here!
require('isomorphic-fetch');
// onload = (event) => {
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let destinationData = document.getElementById("missionTarget");
    destinationData.innerHTML =
  `<h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`;
                
}



function validateInput(testInput) {
    if(testInput===""){
        console.log("Empty")
        return 'Empty'
    }  
    if(isNaN(testInput)){
        console.log(testInput + "NaN")
        return "Not a number"
    }
    if(!isNaN(testInput)){
        console.log(testInput + "Num")
        return "Number"
    }
}

function formSubmission(document, list, pilotName,copilotName, fuelLevel, cargoMass){

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
    let statusUpdateDiv = list;
    let pilotStatusUpdate = document.getElementById("pilotStatus");
    let copilotStatusUpdate = document.getElementById("copilotStatus");
    let fuelStatusUpdate = document.getElementById("fuelStatus");
    let cargoStatusUpdate = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    statusUpdateDiv.style.visibility = "visible";
    pilotStatusUpdate.innerHTML = `Pilot ${pilotName} is ready for launch.`;
    copilotStatusUpdate.innerHTML = `Co-pilot ${copilotName} is ready for launch.`;
    
    let shuttleStatus = false;

    if(fuelLevel < 10000){
        fuelStatusUpdate.innerHTML = `Fuel level is too low to launch shuttle.`;
        console.log(fuelLevel);
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch"
    }
    
    if(cargoMass > 10000){
        cargoStatusUpdate.innerHTML = `Cargo mass too heavy to launch shuttle.`;
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch"
    }
    
    if(fuelLevel > 10000 && cargoMass < 10000){
        launchStatus.innerHTML = "Shuttle is ready for launch"
        launchStatus.style.color = "green";
        shuttleStatus = true;
     }

    }
}



async function myFetch() {
    let planetsReturned;

    planetsReturned = 
    await fetch("https://handlers.education.launchcode.org/static/planets.json").
    then(function(response) {
        return response.json()
});

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetIndex = Math.floor(Math.random() * planets.length);
    
    return planets[planetIndex];
}

//}



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
