const Queue = require('./Queue')

const restaurantOrder = new Queue();

console.log(`restaurantOrders has ${restaurantOrder.size} nodes`)

restaurantOrder.enqueue('apple pie');
restaurantOrder.enqueue('roast chicken');
restaurantOrder.enqueue('quinoa salad');

console.log(`restaurantOrders has ${restaurantOrder.size} nodes`)
