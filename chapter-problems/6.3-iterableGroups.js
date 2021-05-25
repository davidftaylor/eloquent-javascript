// My solution

class Group {
  constructor() {
    this.elements = [];
  }
  
  [Symbol.iterator]() {
  	return new GroupIterator(this);
  };
  
  add(elem) {
    if (!this.elements.includes(elem)) {
    	this.elements.push(elem);
    }
  }
  
  delete(elem) {
    if (this.elements.includes(elem)) {
      	let elementIndex = this.elements.indexOf(elem);
    	this.elements = this.elements.filter(elem => !elem);
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

class GroupIterator {
	constructor(group) {
      this.index = 0;
      this.value = undefined;
      this.elements = group.elements;
    }
  
  	next() {
      if (this.index === this.elements.length) return {done: true};
      
      let value = this.elements[this.index];
      this.index++;
      
      return {value, done: false};
    }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c