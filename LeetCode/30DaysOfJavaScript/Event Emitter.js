// 2694. Event Emitter

// Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

// Your EventEmitter class should have the following two methods:

// subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
// An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
// The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
// emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.
 

// Example 1:

// Input: 
// actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"], 
// values = [[], ["firstEvent", "function cb1() { return 5; }"],  ["firstEvent", "function cb1() { return 6; }"], ["firstEvent"]]
// Output: [[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]]
// Explanation: 
// const emitter = new EventEmitter();
// emitter.emit("firstEvent"); // [], no callback are subscribed yet
// emitter.subscribe("firstEvent", function cb1() { return 5; });
// emitter.subscribe("firstEvent", function cb2() { return 6; });
// emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2

// class EventEmitter {
//     constructor(){

//     }

//     subscribe(eventName, callback) {
        
//         return {
//             unsubscribe: () => {
                
//             }
//         };
//     }

//     emit(eventName, args = []) {
        
//     }
// }

// const emitter = new EventEmitter();
// // Subscribe to the onClick event with onClickCallback
// function onClickCallback() { return 99 }
// const sub = emitter.subscribe('onClick', onClickCallback);

// emitter.emit('onClick'); // [99]
// sub.unsubscribe(); // undefined
// emitter.emit('onClick'); // []

class EventEmitter {
    constructor() {
        // Initialize a map to store event names and their corresponding listeners
        this.events = new Map();
    }

    subscribe(eventName, callback) {
        // If the event does not exist, initialize it with an empty array
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        // Add the callback to the list of listeners for this event
        this.events.get(eventName).push(callback);

        // Return an object with an unsubscribe method
        return {
            unsubscribe: () => {
                // Remove the callback from the list of listeners
                const listeners = this.events.get(eventName);
                if (listeners) {
                    const index = listeners.indexOf(callback);
                    if (index !== -1) {
                        listeners.splice(index, 1);
                    }
                }
            }
        };
    }

    emit(eventName, args = []) {
        // If there are no listeners for this event, return an empty array
        if (!this.events.has(eventName)) {
            return [];
        }

        // Call each listener with the provided arguments and collect the results
        const listeners = this.events.get(eventName);
        return listeners.map(listener => listener(...args));
    }
}

// Example usage
const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() { return 99; }
const sub = emitter.subscribe('onClick', onClickCallback);

console.log(emitter.emit('onClick')); // [99]
sub.unsubscribe(); // unsubscribe the callback
console.log(emitter.emit('onClick')); // []


//another solution :
class EventEmitter {

    constructor() {
        this.events = {};
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);

        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);

                if (this.events[eventName].length === 0) {
                    delete this.events[eventName];
                }
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events[eventName]) {
            return [];
        }
        return this.events[eventName].map(callback => callback(...args));
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

const emitter1 = new EventEmitter();

// Subscribe to the 'onClick' event with the 'onClickCallback' function
function onClickCallback() { return 99 }
const sub1 = emitter1.subscribe('onClick', onClickCallback);

console.log(emitter1.emit('onClick')); // [99] -> The callback is called and returns 99

sub1.unsubscribe(); // Unsubscribe the 'onClickCallback'

console.log(emitter1.emit('onClick')); // [] -> The callback was unsubscribed, so no result
