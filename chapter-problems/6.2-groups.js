class Group {
  constructor() {
    this.elements = [];
  }
  
  add(elem) {
    if (!this.elements.includes(elem)) {
    	this.elements.push(elem);
    }
  }
  
  delete(elem) {
    if (this.elements.includes(elem)) {
      	let elementIndex = this.elements.indexOf(elem);
    	this.elements = this.elements.slice(0, elementIndex).concat(this.elements.slice(elementIndex + 1));
      // or, more elegantly,
      // this.elements.filter(elem => !elem);
    }
  }
  
  has(elem) {
    return this.elements.includes(elem);
  }
  
  static from(iterable) {
    let group = new Group();
    
    for (let elem of iterable) {
      group.add(elem);
    }
    
    return group;
  }
}


// Book test cases

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// My test cases

let group = Group.from([1, 2, 3, 5]);
console.log(group.has(1));
// true
console.log(group.has(4));
// false
group.add(4);
console.log(group.has(4));
// true
group.delete(5);
console.log(group.has(5));
// false