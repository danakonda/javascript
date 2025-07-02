const lunches=[];
let addLunchToEnd=(lunches,lunch)=>{
  lunches.push(lunch);
console.log(`${lunch} added to the end of the lunch menu.`) 
return lunches; 
}
addLunchToEnd(lunches, "Tacos");
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));
let addLunchToStart=(lunches,lunch)=>{
lunches.unshift(lunch);
console.log(`${lunch} added to the start of the lunch menu.`);

return lunches; 
}
addLunchToStart(lunches,"Sushi");
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza")); 
let removeLastLunch=lunchesArray=>{
  if(lunchesArray.length==0){
  console.log("No lunches to remove.")}
  else{
   let lunch=lunchesArray.pop();
  console.log(`${lunch} removed from the end of the lunch menu.`);}
 return lunchesArray;  
}
removeLastLunch(["Stew", "Soup", "Toast"]);
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"])); 
let removeFirstLunch=lunch=>{
  if(lunch.length==0){
    console.log("No lunches to remove.");
  }else{
    let lunches=lunch.shift();
    console.log(`${lunches} removed from the start of the lunch menu.`)
  }return lunch;
}
removeFirstLunch(["Salad", "Eggs", "Cheese"]);
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));
let getRandomLunch=arr=>{
  if(arr.length==0){
    console.log("No lunches available.");
}else{
  const arrs=Math.floor(Math.random()*arr.length);
  const arrr=arr[arrs];
  console.log(`Randomly selected lunch: ${arrr}`);
}
}
getRandomLunch("");
let showLunchMenu=arr=>{
  if(arr.length==0){
    console.log("The menu is empty.");
  }else{
  console.log(`Menu items: ${arr.join(", ")}`);
  }
}
showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);