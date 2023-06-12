// Task2 : Create a typescript array of numbers and create a variable to store the sum of all the numbers in the array. 
var arrnum = [7, 15, 29, 7, 8];
var total = 0;
var cntr;
for (cntr = 0; cntr < arrnum.length; cntr++) {
    total = arrnum[cntr] + total;
}
console.log("Total is ", total);
