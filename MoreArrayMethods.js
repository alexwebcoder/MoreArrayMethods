let data = [
{
 country:"China",
 population:1409517397,
},

{
  country:"India",
  population:1339180127,

},

{
  country:"USA",
  population:324459463,

},

{
 country:"Indonisia",
 population:263991379,

}

]

   //filter out the countries that have a population greater than 500M

   let bigPopulation = data.filter(val => val.population > 500000000);
   console.log(bigPopulation);

   
 // using the reduce method to add up the total population of all the countries except for China

 let allButChina = data.reduce((acc, val) =>{
  return val.country === "China" ? acc : acc + val.population;
}, 0);

 console.log(allButChina);



 let dataNew = [

 {
  name:"Butters",
  age:3,
  type:"dog"
},

{
  name:"Lizzy",
  age:6,
  type:"dog"
},

{
  name:"Red",
  age:1,
  type:"cat"

},
{

 name:"Joey",
 age:3,
 type:"dog"

},


];

let sumAges = dataNew // each method (filter, map and reduce) is applied on dataNew object and stored in a variable

.filter((animal) => {
//applying the filter method to return only dog types from each object in the array
return animal.type === "dog";

}).map((animal) => {
//multiplying each dogs age by 7
return animal.age * 7;

}).reduce((acc, animal) => {
 //adding the total of all the dogs ages
 return acc + animal;
});

console.log(sumAges);


//a different way of doing the same thing as directly above
//we have three functions that return each value

let isDog = (animal)=>{
  return animal.type === "dog";
}

let dogYears = (animal)=>{
  return animal.age * 7;
}

let sum = (acc, animal)=>{
  return acc + animal; 
}

// the methods (filter, map and reduce) are then run on the dataNew object which is stored in a variable
//the functions from above are passed in as arguements on each array method
let newAges = dataNew
.filter(isDog)
.map(dogYears)
.reduce(sum);

console.log(newAges);