/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */
var p1={
    manufacturer: "ASICS",
        name: "Men's GEL Venture 5 Running Shoe",
    price: 79.95,
    review: 3446};

var p2={
    manufacturer: "JACKSHIBO",
        name: "JACKSHIBO Men Women Unisex Couple Casual Fashion Sneakers Breathable Athletic Sports Shoes",
    price: 32.99,
    review: 917};

var p3={
    manufacturer: "Champion",
        name: "Champion Women's Gusto Cross Trainer",
    price: 39.97,
    review: 89};
var p4={
    manufacturer: "PUMA",
        name: "PUMA Adult Suede Classic Shoe",
    price: 168.32,
    review: 2588};

var productList = []; //this is an array
//Your code here
//Hint: productList.push(newObject) will add the object you just created to the array
productList.push(p1);
productList.push(p2);
productList.push(p3);
productList.push(p4);


/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */
for(var i=0;i<productList.length;i++)
{ if(productList[i].price<50){
    console.log("The product " +productList[i].name +" costs " + productList[i].price + ", and is a match");}
}


/* Step 3
 * What is the average price of all the products?
 */

//3.1 first, calculate total price using the for loop again
var TotalPrice=0;
for(var i=0;i<productList.length;i++)
{
    TotalPrice+=productList[i].price;
}

console.log(TotalPrice);

//3.2 then, divide total price by the number of products, using proudctList.length
var avgPrice=TotalPrice/productList.length;
console.log(avgPrice);
/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */

function comparePrice(p){

    var numOfMatchingProducts = 0;

    //Your code here
    for(var i=0;i<productList.length;i++)
    {
        if(productList[i].price<p){numOfMatchingProducts++;}
    }
    return numOfMatchingProducts;
}

//
console.log("The number of products below $10 is " + comparePrice(10));
console.log("The number of products below $50 is " + comparePrice(50));
