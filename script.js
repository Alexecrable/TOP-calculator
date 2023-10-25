const add = function(x, y) {
    return x+y;
  };
  
  const subtract = function(x,y) {
      return x-y;
  };
  
 
  
  const multiply = function(x,y) {
    
    return x*y;
  };


const divide = function(x, y) {
    return x/y;
};


function calculate(left, right, op){
    if (op === "+"){
        return add(left,right);
    }
    else{
        if (op === "-"){
            return subtract(left,right);
        }
        else{
            if (op === "*"){
                return multiply(left,right);
            }
            else{
                if (op === "/"){
                    return divide(left,right);
                }
            }
        }
    }
}

function operation(op){

    let x = 0;
            let y = 0;
            let str = "";
            let left = operating_array.slice(0,op_index);
            for(value of left){
                str += value;

            }
            x = parseFloat(str);
            str = "";
            let right = operating_array.slice(op_index+1);
            for(value of right){
                str += value;

            }
            y = parseFloat(str);
            
            console.log(x,y);
            operating_array[0] = calculate(x, y, operating_array[op_index]).toFixed(2);
            operating_array = [operating_array[0]];
            console.log(operating_array);

            
            console.log("miaou");
            if(op !== "="){
                operating_array[1] = op;
            }
            
            
           
            
            nb_of_op = 0;
            i = 1;
            console.log(operating_array);


}

let operating_array = [];
let i = 0;
let nb_of_op = 0;
let op_index = -1;
let display_res = false;
function operating_choose(op){
    
    
    if((op === "+" || op === "-" || op === "*" || op === "/") ){
        if(i == 0){return 0;}
        if(i == op_index+1){
            i--;
            nb_of_op--;
        }

        if (nb_of_op == 1 ){
            operation(op);
        }
        else{
            operating_array[i] = op;
            console.log("ouaf" + i);

        }
        op_index = i;
        nb_of_op++;
        op_index = i;
        display_res = false;

    }
    else{
        if(op === "C"){
            operating_array = [];
            i = -1;
            nb_of_op = 0;
            display_res = false;
            op_index = -1;
            
        }
        else{
            
            if(op === "="){
                if(op_index+1 != i && display_res == false && nb_of_op > 0){
                    operation(op);
                    display_res = true;
                    op_index = -1
                }
                else{
                    return 0;
                }
            }
            else{
                if (display_res == false){
                    operating_array[i] = op;
                }
                else{
                    return 0;
                }   
                
            }
            
        }

    }


    i++;
    console.log("wtf" + i);
    
    displayer.textContent = operating_array.join("");
}

const calc_buttons = document.querySelectorAll("button");
const displayer = document.querySelector("#display");
console.log(calc_buttons);
calc_buttons.forEach((button) => {
    button.addEventListener(
        "click",
        ()=>{
            operating_choose(button.textContent);
        }
    )
});