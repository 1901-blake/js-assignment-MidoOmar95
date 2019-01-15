/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
var numArray = [33, 103, 3, 726, 200, 984, 198, 764, 9];

function bubbleSort(numArray) {
    var swap;
    do {
        swap = false;
        for (var i=0; i < numArray.length-1; i++) {
            if (numArray[i] > numArray[i+1]) {
                var temp = numArray[i];
                numArray[i] = numArray[i+1];
                numArray[i+1] = temp;
                swap = true;
            }
        }
    } while (swap);
}

bubbleSort(numArray);
console.log(numArray);