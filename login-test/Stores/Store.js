// Base class for all stores
// Implements the Observer design pattern to notify state changes
// Subclasses must define the `getState()` method to return their state
export default class Store {
    constructor() {
      // Define an empty observer list
      this.observers = [];
    }
  
    // Add new observer to list
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    // Notify all observers of a state change in the store
    notifyObservers() {
      this.observers.forEach(observer => observer.setState(this.getState()));
    }
  }