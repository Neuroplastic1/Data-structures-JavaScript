const Node = require('./Node');
const DoublyLinkedList = require('./DoublyLinkedList');

const subway = new DoublyLinkedList();
console.log(subway)
subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead();

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');

// subway.removeHead();
// subway.removeTail();

subway.removeByData('TimesSquare');
subway.printList();

/* logs:
DoublyLinkedList { head: null, tail: null }
<head> undefined GrandCentral PennStation WallStreet BrooklynBridge <tail>
*/
