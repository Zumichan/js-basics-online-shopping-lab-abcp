var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var newObject = {};
  newObject[item]=price;
  cart.push(newObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
var message = "In your cart, you have";
 if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }else if(cart.length === 1){
    console.log(`${message} ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
  }
  else if(cart.length === 2){
    console.log(`${message} ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`);
  } 
  else {
    var newArray = [];
    for (var i = 0; i < cart.length; i++) {
      for (var elem in cart[i]) {
        newArray.push(elem + " at $" + cart[i][elem])
      }
    }
    console.log(message +" "+ newArray.join(", ") + ".");
    }
  }

function total() {
 var sum = 0;
  for (var i=0; i<cart.length; i++) {
    sum += cart[i][Object.keys(cart[i])];
  }
  return sum;
}

function removeFromCart(item) {
  for (var i=0; i<cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
