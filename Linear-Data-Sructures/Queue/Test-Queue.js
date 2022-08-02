const Queue = require('./Queue')

const restaurantOrder = new Queue();

console.log(`restaurantOrders has ${restaurantOrder.size} nodes`)

restaurantOrder.enqueue('apple pie');
restaurantOrder.enqueue('roast chicken');
restaurantOrder.enqueue('quinoa salad');

console.log(`restaurantOrders has ${restaurantOrder.size} nodes`)

console.log('\nFood preparing...\n')
restaurantOrder.dequeue();
restaurantOrder.dequeue();
restaurantOrder.dequeue();
console.log('All orders ready!')
