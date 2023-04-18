// LCD solve
let l1 = 'zlmyfq';
let l2 = 'ifcmvw';
let l3 = 'frzjqo';

let words = [
  'about',
  'after',
  'again',
  'below',
  'could',
  'every',
  'first',
  'found',
  'great',
  'house',
  'large',
  'learn',
  'never',
  'other',
  'place',
  'plant',
  'point',
  'right',
  'small',
  'sound',
  'spell',
  'still',
  'study',
  'their',
  'there',
  'these',
  'thing',
  'think',
  'three',
  'water',
  'where',
  'which',
  'world',
  'would',
  'write',
];

/* ENGINE - DO NOT TOUCH */

// LCD Solve
for (let key of words) {
  let first = key[0];
  let second = key[1];
  let third = key[2];

  for (let keyL1 of l1) {
    if (keyL1 === first) {
      for (let keyL2 of l2) {
        if (keyL2 === second) {
          for (let keyL3 of l3) {
            if (keyL3 === third) {
              console.log(key);
            }
          }
        }
      }
    }
  }
}
