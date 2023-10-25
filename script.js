const add = function(x, y) {
    return x+y;
  };
  
  const subtract = function(x,y) {
      return x-y;
  };
  
  const sum = function(array) {
      let res = 0;
    for (value of array){
      res += value;
    }
    return res;
  };
  
  const multiply = function(array) {
    let res = 1;
    for (value of array){
      res *= value;
    }
    return res;
  };


const divide = function(a, b) {
    return a/b;
}

const calc_buttons = document.querySelectorAll("button");
console.log(calc_buttons);
calc_buttons.forEach((button) => {
    button.addEventListener(
        "click",
        ()=>{
            alert(button.textContent);
        }
    )
});