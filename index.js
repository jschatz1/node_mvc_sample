let controller = require("./controller")

// DUMB VIEW

function userView() {
  console.log(`Welcome ${controller.user.getName()} (${controller.user.getEmail()})`);
  console.log(`You have ${controller.cart.getItemCount()} items in your cart`);
}

function clickedAddShampooToCart() {
  console.log(`Items in cart: ${controller.cart.getPrettyItemsInCart()}`)
  controller.user.addItemToCart("Shampoo");
  console.log(`Items in cart: ${controller.cart.getPrettyItemsInCart()}`)
}

function calculatorView() {
  console.log(`The sin of 4.5 is: ${controller.calc.sin(4.5)}`);
  console.log(`I added 4 + 9 and it was: ${controller.calc.add(4, 9)}`);
  console.log(`Answer History: ${controller.calc.getHistory()}`)
}

// userView();
// user clicked button
// clickedAddShampooToCart()
calculatorView();