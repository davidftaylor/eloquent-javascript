// My solution

function deepEqual(value1, value2) {
  if (value1 === value2) return true;
  else if (typeof value1 === typeof value2 &&
           typeof value1 === 'object') {
    if ((value1 === null & value2 !== null) ||
        (value1 !== null & value2 === null)) return false;
    else {
      let value1keys = Object.keys(value1);
      let value2keys = Object.keys(value2);
      if (value1keys.length !== value2keys.length) return false;
      for (let i = 0; i < value1keys.length; i++) {
        let key = value1keys[i]
        if (value2keys.includes(key)) {
          if (!deepEqual(value1[key], value2[key])) {
            return false;
          };
        }
      }
      return true;
    }
  }
  return false;
}

// Book solution
/*
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}
*/

// Tests

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true