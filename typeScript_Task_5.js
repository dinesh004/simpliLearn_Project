//Task-5 : Create a boolean array and print the number of true values in the array to the console. 
var barr = [true, false, true, true, false, true];
var pcntr = 0;
for (var cntr = 0; cntr < barr.length; cntr++) {
    if (barr[cntr]) {
        pcntr = pcntr + 1;
    }
}
console.log("The number of true values in Boolean Array is " + pcntr);
