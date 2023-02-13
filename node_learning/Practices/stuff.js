

/**
 * Counter takes an array as an argument and returns a string that tells us how many items are in the array.
 * @param arr - an array
 * @returns The string "There are " + arr.length + " elements in this array"
 */

const counter = (arr) => {
  return "There are " + arr.length + " elements in this array";
};

/**
 * It takes two numbers as arguments and returns a string that concatenates them together with their sum
 */

const adder = (a,b)=>{
    return `The sum of the ${a} and ${b} number is ${a+b}`
}

const pi = 3.145;

const myObj ={
  name:"dhrupal",
  job:"web developer",
  age:22
};

export {counter, adder, pi, myObj};
