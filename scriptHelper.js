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
    alert ('You need to enter a name for cargo mass!')
}   
if(validatedPilot === "Empty"|| validatedCopilot=== "Empty"|| validatedFuel === "Empty"|| validatedCargo === "Empty")
alert("All fields are required.")

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



// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch().then( function(response) {
//         });

//     return planetsReturned;
// }

// function pickPlanet(planets) {
// }

}



// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
