module.exports = {
  addItemToHistory(item) {
    this.history.push(item);
  },
  history: [],
}