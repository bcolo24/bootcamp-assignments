//WRITE YOUR CODE BELOW
var customerDrink = {
    numberOfSugars: 2,
    readyToOrder: true,
    drinkName: "Tall Black Coffee"
}
console.log(customerDrink.numberOfSugars);
console.log(customerDrink["numberOfSugars"]);

if (customerDrink.readyToOrder){
    console.log("Ready for pick-up");
}
else{
    console.log("Still in queue")
}
