/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {

let str = '';

  switch(shape) {
    case "Square":   
    for (let i = 0; i < height; i++){ // iterates rows
      for (let j = 0; j < height; j++){ // iterates * in row
          str += character;}
      console.log(str);
      str = ''; }
      break;

    case "Triangle":
    for (let i = 1; i < height+1; i++){
      for (let j = 0; j < i; j++){ 
          str += character;}
      console.log(str);
      str = ''; }
      break;

    case "Diamond":
    let k = 0;
    for (let i = 1; i <= height; i++) {
        let str = "";
        let n = parseInt((height + 1) / 2);
        if (height % 2 == 0) {
            if (i <= n) k++;
            if (i > n + 1) k--;
        }
        else {
            i <= n ? k++ : k--;
        }
        for (var j = 1; j <= height; j++) {
            if (j <= (n - 1 + k) && j >= (n + 1 - k))
                str += character;
            else
                str += " ";
        }
        console.log(str);
    }
      break;

    default:
      break;
  }

}

printShape("Diamond",5,"*");
// console.log(printShape());
