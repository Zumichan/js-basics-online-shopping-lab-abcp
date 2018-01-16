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

function getName(i){
  return Object.keys(cart[i])[0];
}

function getPrice(i){
  return cart[i][getName(i)];
}

function getItemDescription(i) { 
  return getName(i) + " at $" + getPrice(i)
  }

function getAllDescriptions() {
    var descriptions = []
    for (var i = 0; i < cart.length; ++i) {
        descriptions.push(getItemDescription(i))
    }
    return descriptions
}

function summarizeDescriptions(description) {
    var message = ""
    if (description.length === 0) {
        message = "Your shopping cart is empty"
    } else {
        message = "In your cart, you have "
        for (var i = 0; i < description.length; ++i) {
            if (i > 0 && description.length != 2) {
                message = message + ", "
            }
            if (i === description.length-1 && description.length > 1) {
                if (description.length === 2) {
                    message = message + " " 
                }
                message = message + "and "
            }
            message = message + description[i]
        }
    }
    message = message + "."
    return message
}

function viewCart() {
  console.log(summarizeDescriptions(getAllDescriptions()))
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
