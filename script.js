const result = document.querySelectorAll(".result");

// Capitalise keys
// Write a function capitaliseKeys, which takes an object as an argument, and returns a new object with the same key-value pairs except all the keys have been capitalised.

const testSample = { abc: 1, minju: 2, asdf: 3 };
let newObj = {};

function capitaliseKeys(obj) {
  //to find obj's key
  for (const [key, value] of Object.entries(obj)) {
    // to use to UpperCase
    let newKey = key.toUpperCase();
    // append the capitalised key and value pair to newObj
    let index = 0;

    newObj[newKey] = value;
  }
  let stringObj = JSON.stringify(newObj);
  result[0].innerHTML = stringObj;

  return newObj;
}

//execute function
capitaliseKeys(testSample);

// String to object
// Write a function stringToObject

// stringToObject takes one parameter, a string. The string is made up of key-value pairs formatted as follows: “key1:value1,key2:value2,…”

// stringToObject should return an object made up of the key-value pairs in the string. Assume all values are strings.

const testString =
  "tomato:vegetable , mayonaise: sauce , minju: person , scarf: clothes, -1: number";
const testObject = {};

function stringToObject(testString) {
  const splitted = testString.split(",");

  for (let i = 0; i < splitted.length; i++) {
    let pair = splitted[i];

    const keyValue = pair.split(":");

    let key = keyValue[0].trim();
    let value = keyValue[1].trim();
    testObject[key] = value;
  }
  // console.log(testObject);
  let stringObject = JSON.stringify(testObject);
  result[1].innerHTML = stringObject;

  return testObject;
}
// execute function
stringToObject(testString);

// Going shopping
// Write a function shoppingList that accepts a single parameter, a string. The string is a list of ingredients, separated by a comma, formatted as below:

// “2 tomatoes, 1 egg, 3 pumpkins”

// The function shoppingList should return an object where the keys are the ingredient names, and the values are the number of the ingredients needed.

const shoppingStr = "2 milk, 1 mayonaise, 1 bisucuit, 2 water";
let shoppingObj = {};

function shopping(string) {
  let splitShopping = string.split(",");

  for (let i = 0; i < splitShopping.length; i++) {
    let trimShopping = splitShopping[i].trim();
    // console.log(trimShopping);
    let ingredientNumber = trimShopping.split(" ");
    // console.log(ingredientNumber);
    let ingredient = ingredientNumber[1];
    let number = ingredientNumber[0];
    // console.log(ingredient, number);
    shoppingObj[ingredient] = number;
  }
  // console.log(shoppingObj);

  let stringShopping = JSON.stringify(shoppingObj);
  result[2].innerHTML = stringShopping;

  return shoppingObj;
}

shopping(shoppingStr);

// Map Object
// Write a function mapObject that takes two parameters: an object obj and a function fn.

// mapObject should return a new object whose keys are the same as those of obj, and whose values are the result of calling fn with the values of obj.

let testMap = { a: "b", c: "d", e: "f" };
let fn = (n) => n + " is alpahbet";
let resultMap = {};
function mapObject(obj, fn) {
  for (const [key, value] of Object.entries(obj)) {
    // console.log(key, value);
    let fnValue = fn(value);
    resultMap[key] = fnValue;
  }
  let stringMap = JSON.stringify(resultMap);
  result[3].innerHTML = stringMap;

  return resultMap;
}
mapObject(testMap, fn);
