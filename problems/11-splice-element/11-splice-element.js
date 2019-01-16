/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
let someArr = [1,2,3,4,5,6,7,8,9,10]

function spliceElement(someArr, index) {
  
    for( var i = 0; i < someArr.length-1; i++){ 
        if ( i === index) {
            someArr.splice(i, 1); 
        }
     }
     
     return someArr;

}

// spliceElement(someArr, index);
console.log(spliceElement(someArr, 5));
