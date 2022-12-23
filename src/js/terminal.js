const output = document.getElementById("output");

const terminal = {
  print: function(data) {
    if (typeof data === "string") {
      output.innerHTML += data;
    } else {
      output.innerHTML += JSON.stringify(data);
    }
  },
  println: function(data) {
    if (typeof data === "string") {
      output.innerHTML += data + "\n";
    } else {
      output.innerHTML += JSON.stringify(data) + "\n";
    }
  },
  printArray: function(array) {
    let result = "[";
    for (const obj of array) {
      result += JSON.stringify(obj) + ", "  + "\n" ;
    }
    result = result.slice(0, -2);  // Remove the last ', '
    result += "]";

    this.println(result);
  }
};

export default terminal;

