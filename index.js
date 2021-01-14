// Add your code here

let destinationURL = 'http://localhost:3000/users'

let formData = {
   dogName: "Byron",
   dogBreed: "Poodle"
}; 

let configurationObject = {
   method: "POST", 
   headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"
   }, 
   body: JSON.stringify(formData)
}

fetch(destinationURL, configurationObject)
   .then(function(response) {
      return response.json();
   })
   .then(function(object) {
      console.log(object);
   })
   .catch(function (error) {
      alert("Bad things! Ragnarok!"); 
      console.log(error.message);
   });