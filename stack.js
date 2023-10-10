class Stack{
  arr = [];
  push(value){
    return this.arr.push(value);
  }
  pop(){
    return this.arr.pop();
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  get length() {
    return this.arr.length;
  }
}
const stack = new Stack(); 

stack.push(1);
stack.push(3);
console.log(stack.top())
console.log(stack.length)