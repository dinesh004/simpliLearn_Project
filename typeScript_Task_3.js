//Task 3 : Create an array of any type and print the sum of all the numbers in the array to the console. 
var numar = ["Dinesh", 10, "4.5", true, "Hire", 20, 1.5];
var totalnum = 0;
for (var cntr = 0; cntr < numar.length; cntr++) {
    if (typeof (numar[cntr]) == "number") {
        totalnum = numar[cntr] + totalnum;
    }
}
console.log(totalnum);
