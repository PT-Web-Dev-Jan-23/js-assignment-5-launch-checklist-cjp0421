// Write your helper functions here!
// require('isomorphic-fetch');



onload = (event) =>{
    alert("All fields are required.")
    document.getElementById("formSubmit").addEventListener("click", function(event){
        event.preventDefault()
        console.log("Unicorns! Puppy Paws! Kitty Noses!")
    });
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

function validateInput(testInput) {
   if(testInput === ''){
       return "Empty"
   } else if (typeof testInput === 'number'){
       return 'Is a Number'
   } else if (isNaN(testInput)) {
       return "Not a number"
   }
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
