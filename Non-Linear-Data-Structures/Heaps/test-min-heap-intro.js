// import MinHeap class
const MinHeap = require('./min-heaps-intro');

// instantiate a MinHeap class
const minHeap = new MinHeap();

// populate minHeap with descending numbers from 10001 to 1
console.log('Adding');
for (let i=10000; i >=1; i--) {
  minHeap.add(i);
}

// remove the minimum value from heap
console.log('Removing');
console.log('Minimum value = ' + minHeap.popMin());

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
