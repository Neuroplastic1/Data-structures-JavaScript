const HashMap = require('./HashMap');

const birdCensus = new HashMap(16);

birdCensus.assign('mandarin duck','Central Park Pond');
birdCensus.assign('monk parakeet', 'Brooklyn College');
birdCensus.assign('horned owl', 'Pelham Bay Park');

console.log(birdCensus.retrieve('mandarin duck'));
console.log(birdCensus.retrieve('monk parakeet'));
console.log(birdCensus.retrieve('horned owl'));

// to run this test in node:
// get to the project folder in terminal
// run node by typing: node and press Enter
// in node type: const runTest = require('./Hash-Maps/Test-HashMap')
// that's just one way
