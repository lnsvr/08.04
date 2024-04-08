for (let i = 0; i <=10; i++){
    console.log(i);
}


let j = 10;
while (j>=0){
    console.log(j);
    j--;
}

let l = 20;
do{
    console.log(l);
    l++;
}while(l<=50);

for (let k = 0; k <= 100; k++){
    if(k % 2 === 0){
        console.log(k);
    }
}

let arr = [];
for (let m = 0; m < 10; m++){
    arr.push(Math.floor(Math.random()*101));
    }
        console.log(arr);

let sum = 0;
for(let n = 0; n<arr.length; n++){
    sum+=arr[n];
}
console.log("Сума значень масиву:",sum);


for (let m=0; m<arr.length; m++){
   console.log("$" + arr[m])
}

let evenSum = 0;
for(let h = 0; h < arr.length; h++){
    if (arr[h] % 2 === 0){
        evenSum += arr[h];
    }
}
console.log("Сума парних елементів масиву:", evenSum);

console.log("Масив в прямому порядку:", arr);
console.log("Масив в зворотньому порядку:", arr.reverse());

for (let p = 0; p<arr.length; p++){
   arr[p]*=2;
}
console.log("Масив після збільшення:",arr);