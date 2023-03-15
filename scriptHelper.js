// Write your helper functions here!
// require('isomorphic-fetch');



onload = (event) =>{
    
    function formSubmission(document, pilotName, copilotName, fuelLevel,cargoMass){
        let unexplainedDocument = document;

        function validateInput(testInput) {
            if(testInput === pilotName|| testInput === copilotName){
                if(testInput === ''){
                    alert(testInput + " is empty!")
                    return "Empty"
                } 
                if (!isNaN(testInput)){
                    alert(testInput + " is a number! It should be letters!")
                    return 'Is a Number'
                } 
            }
            if(testInput === fuelLevel||testInput=== cargoMass){
                if(testInput === ''){
                    alert(testInput + " is empty!")
                    return "Empty"
                } 
                if (isNaN(testInput)) {
                    alert(testInput + " is letters! It should be a number!")
                    return "Not a number"
                } 
            }
         }
         
         validateInput(pilotName);
         validateInput(copilotName);
         validateInput(fuelLevel);
         validateInput(cargoMass);
         


         return `${document}
         ${pilotName}
         ${copilotName}
         ${fuelLevel}
         ${cargoMass}
         
         This is a very badly explained assignment that doesn't make a lot of sense. `

    }

    document.getElementById("formSubmit").addEventListener("click", function(event){
        
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");

        
        event.preventDefault()
        console.log("Unicorns! Puppy Paws! Kitty Noses!")
function checkForEmpties(pilotName,copilotName,fuelLevel,cargoMass){
    if(pilotName.value === ""|| copilotName.value === ""|| fuelLevel.value === ""|| cargoMass.value === ""){
        alert("All fields are required.")
        return false
    }
}          
    });
  let document = "the directions didn't explain this so I have to guess. It's awful."
  if(checkForEmpties){
    formSubmission(document, pilotName,copilotName,fuelLevel,cargoMass)
  }

}        


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





// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
