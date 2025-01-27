// for loop

let arr = [1,2,3,4,5];

// for(let i=0;i<5;i++){
//     console.log(arr[i]);
// }
let i=0
// while(i<5){
//     console.log(arr[i]);
//     i++;
// }

// do{
//     console.log(arr[i]);
//     i++;
// }
// while(i<5);


for(let num of arr){
    console.log(num)
}

let obj = {a:1,b:2,c:3};

for(let key in obj){
    console.log(key, ":" ,obj[key]);
}

arr.forEach(elem => console.log(elem));
