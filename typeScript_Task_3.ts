//Task 3 : Create an array of any type and print the sum of all the numbers in the array to the console. 

let numar:any[]= ["Dinesh",10,"4.5",true,"Hire",20,1.5];
let totalnum:number=0;

for(let cntr=0;cntr<numar.length;cntr++)
{


if(typeof(numar[cntr])=="number")
{
    totalnum = numar[cntr]+ totalnum; 
}

}
console.log(totalnum); 