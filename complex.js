let bomb = {
  serialNumber: 3, // last digit
  hasParallelPort: false,
  hasTwoBatteries: false,
};

let wire = {
  hasStar: false,
  hasLed: false,
  isRed: false,
  isBlue: false,
};

// ENGINE

// Complex Wires
let result;
if (!wire.hasStar && !wire.hasLed && !wire.isRed && !wire.isBlue) result = 'C';
else if (wire.hasStar && !wire.hasLed && !wire.isRed && !wire.isBlue)
  result = 'C';
else if (!wire.hasStar && wire.hasLed && !wire.isRed && !wire.isBlue)
  result = 'D';
else if (wire.hasStar && wire.hasLed && !wire.isRed && !wire.isBlue)
  result = 'B';
else if (!wire.hasStar && !wire.hasLed && wire.isRed && !wire.isBlue)
  result = 'D';
else if (wire.hasStar && !wire.hasLed && wire.isRed && !wire.isBlue)
  result = 'B';
else if (wire.hasStar && wire.hasLed && wire.isRed && !wire.isBlue)
  result = 'B';
else if (!wire.hasStar && !wire.hasLed && !wire.isRed && wire.isBlue)
  result = 'S';
else if (wire.hasStar && !wire.hasLed && !wire.isRed && wire.isBlue)
  result = 'D';
else if (wire.hasStar && wire.hasLed && !wire.isRed && wire.isBlue)
  result = 'P';
else if (wire.hasStar && wire.hasLed && wire.isRed && wire.isBlue) result = 'D';

if (result === 'C') console.log('Cut!');
else if (result === 'D') console.log('No!');
else if (result === 'S') {
  if (bomb.serialNumber % 2 === 0) console.log('Cut!');
  else console.log('No!');
} else if (result === 'P') {
  if (bomb.hasParallelPort) console.log('Cut!');
  else console.log('No!');
} else if (result === 'B') {
  if (bomb.hasTwoBatteries) console.log('Cut!');
  else console.log('No!');
}
