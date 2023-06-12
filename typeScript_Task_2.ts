// Task2 : Create a typescript array of numbers and create a variable to store the sum of all the numbers in the array. 


let arrnum: number[]=[7,15,29,7,8];

let total :number=0;
let cntr :number;

for(cntr=0;cntr<arrnum.length;cntr++)
{
    total = arrnum[cntr]+total;

}
console.log("Total is ",total);