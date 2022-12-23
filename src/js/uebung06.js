import terminal from "./terminal.js";

function callFunctions() {
  let commands = [ "let a = 12;", "while(a > 0) {console.log(a); a--;}", "return a;" ];
  terminal.println(maxLengthImperativ(commands));
  terminal.println(maxLengthRekursiv(commands));
  
  let distance = [12, 56, 3, 7, 9];
  let move = accSum(distance);
  terminal.println("\n" + move);
  let moveInit = accSum(distance, 20)
  terminal.println(moveInit);

  let properties = ["sepal_length", "sepal_width", "petal_length", "petal_width", "species"];
  let sample = [
    [6.6, 2.9, 4.6, 1.3, "versicolor"],
    [5.5, 3.5, 1.3, 0.2, "setosa"],
    [5.8, 2.6, 4.0, 1.2, "versicolor"],
    [5.4, 3.9, 1.7, 0.4, "setosa"],
    [5.0, 3.2, 1.2, 0.2, "setosa"],
    [6.7, 3.0, 5.2, 2.3, "virginica"],
    [5.4, 3.4, 1.7, 0.2, "setosa"],
    [7.7, 2.6, 6.9, 2.3, "virginica"],
  ];
  let iris = merge(sample, properties);
  terminal.println("\n" + "value in iris is :");
  terminal.printArray(iris);
  let result = iris.filter(item => item.species === "setosa");
  terminal.println("\n" + "value in result is :");
  terminal.printArray(result);

  let countIris = count(iris, sample => sample.petal_width > 1);
  terminal.println("\n" + "count :")
  terminal.printArray(countIris);
}

function maxLengthImperativ(array) {
  let maxLength = 0;
  array.forEach(item => {
    if(item.length > maxLength) {
      maxLength = item.length;
    }
  });
  return "Imperativ : " + maxLength + "+";
}

function maxLengthRekursiv(array, maxLength = 0) {
  if(array.length === 0) {
    return "Rekursiv : " + maxLength + "+";
  } else {
    if(array[0].length > maxLength){
      maxLength = array[0].length;
    }
    let newArray = array.slice(1);
    return maxLengthRekursiv(newArray, maxLength)
  }
}

function accSum(array, acc){
  if(acc === undefined){
    return "value in move is [" + array+ "]";
  } else {
    let newArray = [];
    array.forEach(item => {
      item += acc;
      newArray.push(item);
    });
    return "value in moveInit is [" + newArray + "]";
  }
}

function merge(array, properties) {
  let newArray = [];
  array.forEach(item => {
    let newObject = {};
    for(let i = 0; i < item.length; i++){
      newObject[properties[i]] = item[i];
    }
    newArray.push(newObject);
  });
  return newArray;
}

function count(array, callback){
  console.log(array)
  console.log(callback)
  return array.filter(callback);
}

callFunctions();
