const runway = require('./runway');

const flights = [
  'Amsterdam Loud Bird flight #345',
  'California Skies flight #890',
  'Mexico Mirage flight #234',
  'Greenland Flying Seals flight #567'
];

// Enqueue runway with planes
const departing = runway.load(flights);
// Clear each plane to takeoff
runway.clear(departing);

/* logs
    Amsterdam Loud Bird flight #345 taxi to runway.
    California Skies flight #890 taxi to runway.
    Mexico Mirage flight #234 taxi to runway.
    Runway full!


    Flights wait...

    Amsterdam Loud Bird flight #345, is cleared for takeoff!
    Amsterdam Loud Bird flight #345 in air.

    Flights wait...

    California Skies flight #890, is cleared for takeoff!
    California Skies flight #890 in air.

    Flights wait...

    Mexico Mirage flight #234, is cleared for takeoff!
    Mexico Mirage flight #234 in air.

    All planes took off, runway clear.
*/
