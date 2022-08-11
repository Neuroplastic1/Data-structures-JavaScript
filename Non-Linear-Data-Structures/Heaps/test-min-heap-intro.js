/ import MinHeap class
const MinHeap = require('./MinHeap');

// instantiate a MinHeap class
const minHeap = new MinHeap();

// helper function to return a random integer
const randomize = () => Math.floor(Math.random() * 40);

// populate minHeap with random numbers
for (let i = 0; i < 6; i++) {
  const num = randomize();
  console.log(`.. Adding value ${num}`);
  minHeap.add(num);
  console.log('Content of min-heap', minHeap.heap);
}

// return the minimum value in the heap until heap is empty
console.log('\n');
for (let i = 0; i < 6; i++) {
  console.log(`.. Removing minimum value ${minHeap.popMin()}`);
  console.log('Content of min-heap', minHeap.heap);
}
/*
.. Adding value 35
Content of min-heap [ null, 35 ]
.. Adding value 6
Content of min-heap [ null, 6, 35 ]
.. Adding value 20
Content of min-heap [ null, 6, 35, 20 ]
.. Adding value 5
Content of min-heap [ null, 5, 6, 20, 35 ]
.. Adding value 4
Content of min-heap [ null, 4, 5, 20, 35, 6 ]
.. Adding value 25
Content of min-heap [ null, 4, 5, 20, 35, 6, 25 ]


.. Removing minimum value 4
Content of min-heap [ null, 5, 6, 20, 35, 25 ]
.. Removing minimum value 5
Content of min-heap [ null, 6, 25, 20, 35 ]
.. Removing minimum value 6
Content of min-heap [ null, 20, 25, 35 ]
.. Removing minimum value 20
Content of min-heap [ null, 25, 35 ]
.. Removing minimum value 25
Content of min-heap [ null, 35 ]
.. Removing minimum value 35
Content of min-heap [ null ]



*/
