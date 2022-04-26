let models = require("./models")

module.exports = {
  user: {
    getName() {
      return models.user.name;
    },

    getEmail() {
      return models.user.email;
    },

    addItemToCart(item) {
      models.cart.addItemToCart(item);
    },
  },

  calc: {
    add(x, y) {
      let answer = x + y;
      models.calc.addItemToHistory(answer);
      return answer;
    },
    sin(x) {
      let answer = Math.sin(x);
      models.calc.addItemToHistory(answer);
      return answer;
    },
    getHistory() {
      return models.calc.history.join(', ')
    }
  },

  cart: {
    getItemCount() {
      return models.cart.items.length;
    },

    getPrettyItemsInCart() {
      return models.cart.items.join(", ");
    }
  }

}